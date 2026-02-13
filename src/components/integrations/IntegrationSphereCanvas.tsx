// src/components/integrations/IntegrationSphereCanvas.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import type { IntegrationSphereItem } from '@/lib/integrationSphereData';
import { getIntegrationSpritePosition } from '@/lib/integrationSphereData';

type IntegrationSpriteMeta = {
  url: string;
  tileSize: number;
  columns: number;
  rows: number;
};

export type IntegrationSphereCanvasProps = {
  logos: IntegrationSphereItem[];
  sprite: IntegrationSpriteMeta;
  /** Canvas height classes (Tailwind). */
  canvasHeightClassName?: string;
  /** Optional extra classes for the outer wrapper. */
  className?: string;
  /** How much the sphere expands when hovered. */
  hoverSpread?: number;
};

type SphereStatus = 'loading' | 'ready' | 'fallback';

type SphereNode = {
  item: IntegrationSphereItem;
  /** Base unit sphere position. */
  bx: number;
  by: number;
  bz: number;
  /** Rotated + scaled position (CSS px). */
  x: number;
  y: number;
  z: number;
  /** Projected screen position (CSS px). */
  sx: number;
  sy: number;
  scale: number;
  alpha: number;
  drawSize: number;
};

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function safeMatchMedia(query: string): MediaQueryList | null {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return null;
  return window.matchMedia(query);
}

function getSpriteSourceXY(index: number, sprite: IntegrationSpriteMeta) {
  const col = index % sprite.columns;
  const row = Math.floor(index / sprite.columns);
  return { sx: col * sprite.tileSize, sy: row * sprite.tileSize };
}

export default function IntegrationSphereCanvas({
  logos,
  sprite,
  canvasHeightClassName = 'h-[360px] sm:h-[460px] lg:h-[520px]',
  className,
  hoverSpread = 1.05,
}: IntegrationSphereCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [status, setStatus] = useState<SphereStatus>('loading');

  // Fallback sprite background sizing.
  const fallbackTile = 56; // CSS px for fallback grid
  const fallbackBgSize = useMemo(
    () => `${sprite.columns * fallbackTile}px ${sprite.rows * fallbackTile}px`,
    [sprite.columns, sprite.rows]
  );

  // Hover state is kept in refs so it doesn't trigger re-renders every move.
  const hoverRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let rafId: number | null = null;
    let disposed = false;

    // Avoid stale React state inside the animation loop.
    let statusLocal: SphereStatus = 'loading';
    const setStatusSafe = (next: SphereStatus) => {
      if (disposed) return;
      if (statusLocal === next) return;
      statusLocal = next;
      setStatus(next);
    };

    // Respect reduced motion.
    const reduceMotion = safeMatchMedia('(prefers-reduced-motion: reduce)')?.matches ?? false;
    if (reduceMotion) {
      setStatusSafe('fallback');
      return () => {
        disposed = true;
      };
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setStatusSafe('fallback');
      return () => {
        disposed = true;
      };
    }

    // Canvas metrics in CSS pixels.
    let cssW = 0;
    let cssH = 0;
    let dpr = 1;

    // Sphere configuration
    let baseRadius = 200;
    let spread = 1;
    let spreadTarget = 1;
    let baseDraw = 44;
    let centerX = 0;
    let centerY = 0;

    // Interaction / physics
    let rotX = 0;
    let rotY = 0;
    let velX = 0.0006;
    let velY = 0.0011;
    let targetVelX = velX;
    let targetVelY = velY;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragMoved = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let pointerInside = false;

    // Build nodes using a Fibonacci sphere distribution.
    const nodes: SphereNode[] = logos.map((item, i) => {
      const n = Math.max(1, logos.length);
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const bx = Math.sin(phi) * Math.cos(theta);
      const by = Math.sin(phi) * Math.sin(theta);
      const bz = Math.cos(phi);
      return {
        item,
        bx,
        by,
        bz,
        x: 0,
        y: 0,
        z: 0,
        sx: 0,
        sy: 0,
        scale: 1,
        alpha: 1,
        drawSize: 40,
      };
    });

    const spriteImg = new Image();
    // Local asset — still set to anonymous to avoid taint if the site is hosted behind a CDN.
    spriteImg.crossOrigin = 'anonymous';

    const resize = () => {
      const rect = container.getBoundingClientRect();
      cssW = Math.max(1, Math.floor(rect.width));
      cssH = Math.max(1, Math.floor(rect.height));

      dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      dpr = clamp(dpr, 1, 2);

      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      // Draw in CSS pixels by scaling the context.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      centerX = cssW / 2;
      centerY = cssH / 2;
      baseRadius = Math.min(cssW, cssH) * 0.34;
      baseDraw = clamp(baseRadius * 0.17, 32, 62);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const getPointerPos = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const pickNode = (x: number, y: number) => {
      // Find best hit: closest within radius, prefer front-most (higher z).
      let best: SphereNode | null = null;
      let bestScore = -Infinity;

      for (const n of nodes) {
        const r = n.drawSize * 0.5;
        const dx = x - n.sx;
        const dy = y - n.sy;
        const distSq = dx * dx + dy * dy;
        if (distSq > r * r) continue;

        // Score: front-most first, then closer to center.
        const score = n.z * 10 - distSq * 0.001;
        if (score > bestScore) {
          bestScore = score;
          best = n;
        }
      }
      return best;
    };

    const onPointerEnter = () => {
      pointerInside = true;
      hoverRef.current = true;
    };

    const onPointerLeave = (e: PointerEvent) => {
      pointerInside = false;
      // Keep the "spread" effect while the pointer is still hovering.
      // On touch screens (no hover), collapse back after release.
      hoverRef.current = e.pointerType === 'mouse' ? pointerInside : false;
    };

    const onPointerDown = (e: PointerEvent) => {
      // Capture pointer so drags don't get stuck.
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {
        // no-op
      }

      const p = getPointerPos(e);
      isDragging = true;
      dragMoved = false;
      dragStartX = p.x;
      dragStartY = p.y;
      lastPointerX = p.x;
      lastPointerY = p.y;

      hoverRef.current = false;
    };

    const onPointerMove = (e: PointerEvent) => {
      const p = getPointerPos(e);
      lastPointerX = p.x;
      lastPointerY = p.y;

      if (isDragging) {
        hoverRef.current = false;
        const dx = p.x - dragStartX;
        const dy = p.y - dragStartY;
        if (Math.abs(dx) > 6 || Math.abs(dy) > 6) dragMoved = true;

        // Directly drive velocity during drag.
        velY = clamp(dx * 0.0024, -0.055, 0.055);
        velX = clamp(dy * 0.0024, -0.055, 0.055);
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;

      // Click detection
      const p = getPointerPos(e);
      const dx = p.x - dragStartX;
      const dy = p.y - dragStartY;
      const moved = Math.hypot(dx, dy);

      // If it was essentially a tap/click, pick the nearest logo.
      if (!dragMoved && moved < 8) {
        const picked = pickNode(p.x, p.y);
        if (picked) {
          // Preserve current path; just set the hash.
          window.location.hash = picked.item.id;
        }
      }

      hoverRef.current = false;
    };

    // Pointer events
    canvas.addEventListener('pointerenter', onPointerEnter);
    canvas.addEventListener('pointerleave', onPointerLeave);
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);

    // Improve touch behavior.
    canvas.style.touchAction = 'none';

    // Pause when offscreen.
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        visible = Boolean(entry?.isIntersecting);
        if (visible && rafId === null && !disposed) {
          rafId = window.requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(container);

    const drawBackdrop = (radius: number) => {
      // Subtle orbit rings to make the sphere feel intentional.
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.22)';
      ctx.lineWidth = 1;
      for (const k of [0.55, 0.78, 1.0]) {
        ctx.beginPath();
        ctx.arc(0, 0, radius * k, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    };

    const updateNodes = () => {
      const radius = baseRadius * spread;
      const perspective = radius * 3.0;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      for (const n of nodes) {
        // Rotate around Y
        const x1 = n.bx * cosY + n.bz * sinY;
        const z1 = -n.bx * sinY + n.bz * cosY;

        // Rotate around X
        const y1 = n.by * cosX - z1 * sinX;
        const z2 = n.by * sinX + z1 * cosX;

        const x3 = x1 * radius;
        const y3 = y1 * radius;
        const z3 = z2 * radius;

        const scale = perspective / (perspective - z3);
        const sx = x3 * scale + centerX;
        const sy = y3 * scale + centerY;

        // Depth-based alpha + size
        const depth = (z3 / radius + 1) / 2; // 0..1
        const alpha = lerp(0.35, 1, depth);
        const drawSize = baseDraw * scale;

        n.x = x3;
        n.y = y3;
        n.z = z3;
        n.sx = sx;
        n.sy = sy;
        n.scale = scale;
        n.alpha = alpha;
        n.drawSize = drawSize;
      }
    };

    const drawNodes = () => {
      // back-to-front
      const sorted = [...nodes].sort((a, b) => a.z - b.z);
      for (const n of sorted) {
        const size = n.drawSize;
        const dx = n.sx - size / 2;
        const dy = n.sy - size / 2;

        const { sx, sy } = getSpriteSourceXY(n.item.spriteIndex, sprite);

        // Small glow for front nodes only
        const depth = (n.z / (baseRadius * spread) + 1) / 2;
        if (depth > 0.72) {
          ctx.save();
          ctx.globalAlpha = 0.22 * n.alpha;
          ctx.beginPath();
          ctx.fillStyle = 'rgba(0, 212, 255, 0.35)';
          ctx.arc(n.sx, n.sy, size * 0.55, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.save();
        ctx.globalAlpha = n.alpha;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(spriteImg, sx, sy, sprite.tileSize, sprite.tileSize, dx, dy, size, size);
        ctx.restore();
      }
    };

    const tick = () => {
      if (disposed) return;
      rafId = null;

      if (!visible) return;

      // Smooth hover spread.
      spreadTarget = hoverRef.current ? hoverSpread : 1;
      spread = lerp(spread, spreadTarget, 0.08);

      // Magnetic follow (when pointer is inside and not dragging).
      if (!isDragging && pointerInside) {
        const nx = (lastPointerX - centerX) / (cssW / 2);
        const ny = (lastPointerY - centerY) / (cssH / 2);
        targetVelY = clamp(nx * 0.004, -0.02, 0.02);
        targetVelX = clamp(ny * 0.004, -0.02, 0.02);
      } else if (!isDragging) {
        // Default drift.
        targetVelX = 0.0006;
        targetVelY = 0.0011;
      }

      // Ease velocity towards target (and apply friction).
      velX = lerp(velX, targetVelX, 0.04) * 0.985;
      velY = lerp(velY, targetVelY, 0.04) * 0.985;

      rotX += velX;
      rotY += velY;

      // Clear
      ctx.clearRect(0, 0, cssW, cssH);

      // Backdrop
      drawBackdrop(baseRadius * spread);

      // Nodes
      if (spriteImg.complete && spriteImg.naturalWidth > 0) {
        updateNodes();
        drawNodes();

        setStatusSafe('ready');
      } else {
        // Sprite not ready yet — keep the fallback visible.
        setStatusSafe('loading');
      }

      rafId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (disposed) return;
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(tick);
    };

    spriteImg.onload = () => {
      if (disposed) return;
      start();
    };

    spriteImg.onerror = () => {
      if (disposed) return;
      setStatusSafe('fallback');
    };

    // Kick off.
    spriteImg.src = sprite.url;

    // Start even before sprite loads (so we draw the backdrop and keep things responsive).
    start();

    return () => {
      disposed = true;
      try {
        ro.disconnect();
      } catch {
        // no-op
      }
      try {
        io.disconnect();
      } catch {
        // no-op
      }
      canvas.removeEventListener('pointerenter', onPointerEnter);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logos, sprite, hoverSpread]);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="relative"
        // These handlers make the hover expand effect feel immediate.
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
      >
        <canvas
          ref={canvasRef}
          className={`block w-full ${canvasHeightClassName} ${status === 'fallback' ? 'hidden' : ''}`}
          aria-label="Interactive integration sphere"
          role="img"
        />

        {/* Static grid fallback (and also shown while the sprite is loading). */}
        <div
          className={
            status === 'ready'
              ? 'pointer-events-none absolute inset-0 p-6 opacity-0 transition-opacity duration-500'
              : 'absolute inset-0 p-6'
          }
          aria-hidden={status === 'ready' ? 'true' : 'false'}
        >
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-8 md:grid-cols-10">
            {logos.map((it) => {
              const pos = getIntegrationSpritePosition(it.spriteIndex, fallbackTile);
              return (
                <a
                  key={it.id}
                  href={it.href}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white/60 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-teal dark:border-white/10 dark:bg-white/5"
                  aria-label={it.name}
                >
                  <span className="sr-only">{it.name}</span>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${sprite.url})`,
                      backgroundSize: fallbackBgSize,
                      backgroundPosition: `-${pos.x}px -${pos.y}px`,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {status === 'fallback' && (
            <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
              Interactive canvas is unavailable — showing a static grid.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

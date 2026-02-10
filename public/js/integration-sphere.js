/*
  UNOBITS — Integrations Sphere (Canvas-only)
  -------------------------------------------------
  Dependency-free ES6 module-style script.

  Requirements satisfied:
  - Fibonacci sphere distribution (no random clumping)
  - Canvas render loop (rAF) with correct pipeline order
  - Depth-based scaling + fading
  - Physics rotation state machine: magnetic follow → drag → inertia
  - Sprite-sheet rendering (single image request)
  - HiDPI / devicePixelRatio support
  - Hit testing (closest-to-camera selection) + link trigger
  - Responsive re-center on resize
  - Touch controls with preventDefault (passive: false)
  - Fallback activation when canvas fails
*/

(() => {
  'use strict';

  const GOLDEN_ANGLE = 2.399963229728653; // ~= 2.39996 radians

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  function fibonacciSphere(n) {
    const pts = [];
    if (n <= 0) return pts;
    if (n === 1) return [{ x: 0, y: 0, z: 0 }];

    for (let i = 0; i < n; i += 1) {
      // Fibonacci sphere (even distribution)
      const y = 1 - (i / (n - 1)) * 2; // 1 → -1
      const r = Math.sqrt(1 - y * y);
      const theta = GOLDEN_ANGLE * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      pts.push({ x, y, z });
    }
    return pts;
  }

  function readPayload() {
    // Prefer a window payload, but also support a JSON <script> payload.
    if (window.__UNOBITS_INTEGRATION_SPHERE__) return window.__UNOBITS_INTEGRATION_SPHERE__;
    const el = document.getElementById('integrationSpherePayload');
    if (!el) return null;
    try {
      return JSON.parse(el.textContent || 'null');
    } catch (e) {
      return null;
    }
  }

  function setFallbackVisible(canvas) {
    const fallback = document.getElementById('integrationSphereFallback');
    if (fallback) fallback.classList.remove('hidden');
    if (canvas) canvas.classList.add('hidden');
  }

  class IntegrationSphere {
    constructor(canvas, payload) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      if (!this.ctx) throw new Error('Canvas 2D context not available');

      this.payload = payload;
      this.logos = Array.isArray(payload.logos) ? payload.logos : [];
      this.spriteMeta = payload.sprite;
      if (!this.spriteMeta || !this.spriteMeta.url) throw new Error('Sprite metadata missing');

      // Interaction + physics state machine
      this.state = 'idle'; // 'idle' | 'drag' | 'inertia'
      this.velX = 0;
      this.velY = 0;
      this.angleX = 0;
      this.angleY = 0;
      this.friction = 0.95;
      this.threshold = 0.001;

      this.pointer = { x: 0, y: 0, nx: 0, ny: 0 };
      this.prev = { x: 0, y: 0 };
      this.drag = { startX: 0, startY: 0, moved: false };

      // Build points on sphere
      const points = fibonacciSphere(this.logos.length);
      const cols = this.spriteMeta.columns || 10;
      const tileSize = this.spriteMeta.tileSize || 128;

      this.items = this.logos.map((logo, i) => {
        const idx = typeof logo.spriteIndex === 'number' ? logo.spriteIndex : i;
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        return {
          logo,
          baseX: points[i].x,
          baseY: points[i].y,
          baseZ: points[i].z,
          x: 0,
          y: 0,
          z: 0,
          x2: 0,
          y2: 0,
          scale: 1,
          alpha: 1,
          size: 0,
          sx: col * tileSize,
          sy: row * tileSize,
        };
      });

      // Sprite sheet
      this.sprite = new Image();
      this.spriteLoaded = false;
      this.sprite.onload = () => {
        this.spriteLoaded = true;
      };
      this.sprite.onerror = () => {
        this.spriteLoaded = false;
        setFallbackVisible(this.canvas);
      };
      this.sprite.src = this.spriteMeta.url;

      // Bind handlers
      this.onResize = this.resize.bind(this);
      this.onMouseDown = this.handleMouseDown.bind(this);
      this.onMouseMove = this.handleMouseMove.bind(this);
      this.onMouseUp = this.handleMouseUp.bind(this);
      this.onTouchStart = this.handleTouchStart.bind(this);
      this.onTouchMove = this.handleTouchMove.bind(this);
      this.onTouchEnd = this.handleTouchEnd.bind(this);
      this.onClick = this.handleClick.bind(this);

      // Events
      window.addEventListener('resize', this.onResize);
      canvas.addEventListener('mousedown', this.onMouseDown);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
      canvas.addEventListener('click', this.onClick);

      canvas.addEventListener('touchstart', this.onTouchStart, { passive: false });
      canvas.addEventListener('touchmove', this.onTouchMove, { passive: false });
      window.addEventListener('touchend', this.onTouchEnd);

      // Setup geometry
      this.resize();

      // Start render loop
      this.running = true;
      requestAnimationFrame(() => this.tick());
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      const cssW = Math.max(280, rect.width || 0);
      const cssH = Math.max(280, rect.height || 0);
      this.cssW = cssW;
      this.cssH = cssH;

      // HiDPI support
      const dpr = clamp(window.devicePixelRatio || 1, 1, 3);
      this.dpr = dpr;
      this.canvas.width = Math.floor(cssW * dpr);
      this.canvas.height = Math.floor(cssH * dpr);
      this.canvas.style.width = `${cssW}px`;
      this.canvas.style.height = `${cssH}px`;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.centerX = cssW / 2;
      this.centerY = cssH / 2;

      // Sphere scale tuned for 100 items.
      this.sphereRadius = Math.min(cssW, cssH) * 0.33;
      this.perspective = this.sphereRadius * 3.0;

      this.minScale = this.perspective / (this.perspective + this.sphereRadius);
      this.maxScale = this.perspective / (this.perspective - this.sphereRadius);

      // Base logo size (scaled by perspective)
      this.baseDraw = clamp(Math.min(cssW, cssH) * 0.12, 32, 72);
    }

    setPointer(clientX, clientY) {
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      this.pointer.x = x;
      this.pointer.y = y;
      // Normalize -1..1
      this.pointer.nx = (x - this.centerX) / (this.centerX || 1);
      this.pointer.ny = (y - this.centerY) / (this.centerY || 1);
    }

    // ---------- State B: Drag/Swipe (Active Mode)
    handleMouseDown(e) {
      this.setPointer(e.clientX, e.clientY);
      this.state = 'drag';
      this.drag = { startX: this.pointer.x, startY: this.pointer.y, moved: false };
      this.prev = { x: this.pointer.x, y: this.pointer.y };
    }

    handleMouseMove(e) {
      this.setPointer(e.clientX, e.clientY);
      if (this.state !== 'drag') return;

      const dx = this.pointer.x - this.prev.x;
      const dy = this.pointer.y - this.prev.y;

      if (!this.drag.moved) {
        const ddx = this.pointer.x - this.drag.startX;
        const ddy = this.pointer.y - this.drag.startY;
        this.drag.moved = ddx * ddx + ddy * ddy > 36; // ~6px threshold
      }

      // Map delta → velocity
      const sens = 0.005;
      this.velY = clamp(dx * sens, -0.12, 0.12);
      this.velX = clamp(dy * sens, -0.12, 0.12);

      this.prev = { x: this.pointer.x, y: this.pointer.y };
    }

    handleMouseUp() {
      if (this.state === 'drag') this.state = 'inertia';
    }

    handleTouchStart(e) {
      if (!e.touches || !e.touches.length) return;
      e.preventDefault();
      const t = e.touches[0];
      this.setPointer(t.clientX, t.clientY);
      this.state = 'drag';
      this.drag = { startX: this.pointer.x, startY: this.pointer.y, moved: false };
      this.prev = { x: this.pointer.x, y: this.pointer.y };
    }

    // Touch move MUST prevent scrolling while spinning.
    handleTouchMove(e) {
      if (!e.touches || !e.touches.length) return;
      e.preventDefault();
      const t = e.touches[0];
      this.setPointer(t.clientX, t.clientY);
      if (this.state !== 'drag') return;

      const dx = this.pointer.x - this.prev.x;
      const dy = this.pointer.y - this.prev.y;

      if (!this.drag.moved) {
        const ddx = this.pointer.x - this.drag.startX;
        const ddy = this.pointer.y - this.drag.startY;
        this.drag.moved = ddx * ddx + ddy * ddy > 36;
      }

      const sens = 0.005;
      this.velY = clamp(dx * sens, -0.12, 0.12);
      this.velX = clamp(dy * sens, -0.12, 0.12);
      this.prev = { x: this.pointer.x, y: this.pointer.y };
    }

    handleTouchEnd() {
      if (this.state === 'drag') this.state = 'inertia';

      // Treat as a tap if the finger didn't move meaningfully.
      if (!this.drag.moved) {
        const hit = this.pick(this.pointer.x, this.pointer.y);
        if (hit && hit.logo && hit.logo.href) {
          window.location.href = hit.logo.href;
        }
      }
    }

    // ---------- Hit Testing (Raycasting-ish): pick closest-to-camera at pointer
    pick(x, y) {
      let best = null;
      let bestZ = -Infinity;

      for (const it of this.items) {
        const r = it.size * 0.5;
        const dx = x - it.x2;
        const dy = y - it.y2;
        if (dx * dx + dy * dy <= r * r) {
          if (it.z > bestZ) {
            bestZ = it.z;
            best = it;
          }
        }
      }
      return best;
    }

    handleClick(e) {
      // Ignore click if it was a drag.
      if (this.drag.moved) return;
      this.setPointer(e.clientX, e.clientY);
      const hit = this.pick(this.pointer.x, this.pointer.y);
      if (hit && hit.logo && hit.logo.href) {
        window.location.href = hit.logo.href;
      }
    }

    // ---------- Render Loop (requestAnimationFrame)
    tick() {
      if (!this.running) return;

      const ctx = this.ctx;

      // 1) Clear Canvas
      ctx.clearRect(0, 0, this.cssW, this.cssH);

      // 2) Apply Rotation Matrix / update angles (physics state machine)
      if (this.state === 'idle') {
        // State A: Magnetic Follow (plus a tiny baseline spin so it's never static)
        const baseSpin = 0.0012;
        const targetVelY = baseSpin + clamp(this.pointer.nx, -1, 1) * 0.0022;
        const targetVelX = clamp(this.pointer.ny, -1, 1) * 0.0022;
        this.velY = lerp(this.velY, targetVelY, 0.06);
        this.velX = lerp(this.velX, targetVelX, 0.06);
      } else if (this.state === 'inertia') {
        // State C: Inertia (Decay)
        this.velX *= this.friction;
        this.velY *= this.friction;
        if (Math.abs(this.velX) + Math.abs(this.velY) < this.threshold) {
          this.state = 'idle';
        }
      }

      this.angleX += this.velX;
      this.angleY += this.velY;

      const sinX = Math.sin(this.angleX);
      const cosX = Math.cos(this.angleX);
      const sinY = Math.sin(this.angleY);
      const cosY = Math.cos(this.angleY);

      // 3) Project to 2D (perspective)
      for (const it of this.items) {
        let x3 = it.baseX * this.sphereRadius;
        let y3 = it.baseY * this.sphereRadius;
        let z3 = it.baseZ * this.sphereRadius;

        // Rotate around Y axis
        const x1 = x3 * cosY + z3 * sinY;
        const z1 = -x3 * sinY + z3 * cosY;
        // Rotate around X axis
        const y2 = y3 * cosX - z1 * sinX;
        const z2 = y3 * sinX + z1 * cosX;

        it.x = x1;
        it.y = y2;
        it.z = z2;

        const scale = this.perspective / (this.perspective - z2);
        it.scale = scale;
        it.x2 = x1 * scale + this.centerX;
        it.y2 = y2 * scale + this.centerY;

        // Depth fade — based on scale (monotonic with z)
        it.alpha = 0.3 + 0.7 * clamp((scale - this.minScale) / (this.maxScale - this.minScale), 0, 1);
        it.size = this.baseDraw * scale;
      }

      // 4) Z-sort (Painter's Algorithm): furthest first
      this.items.sort((a, b) => a.z - b.z);

      // 5) Draw Image (scaled) + Apply Alpha (fading)
      if (this.spriteLoaded) {
        const tileSize = this.spriteMeta.tileSize || 128;
        for (const it of this.items) {
          const sz = it.size;
          // Light culling for perf
          if (it.x2 < -sz || it.x2 > this.cssW + sz || it.y2 < -sz || it.y2 > this.cssH + sz) continue;
          ctx.globalAlpha = it.alpha;
          ctx.drawImage(
            this.sprite,
            it.sx,
            it.sy,
            tileSize,
            tileSize,
            it.x2 - sz / 2,
            it.y2 - sz / 2,
            sz,
            sz
          );
        }
        ctx.globalAlpha = 1;
      } else {
        // Optional placeholders while sprite loads (keeps the page feeling alive).
        for (const it of this.items) {
          const r = it.size * 0.36;
          ctx.globalAlpha = it.alpha;
          ctx.beginPath();
          ctx.arc(it.x2, it.y2, r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 212, 255, 0.12)';
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      requestAnimationFrame(() => this.tick());
    }

    destroy() {
      this.running = false;
      window.removeEventListener('resize', this.onResize);
      this.canvas.removeEventListener('mousedown', this.onMouseDown);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);
      this.canvas.removeEventListener('touchstart', this.onTouchStart);
      this.canvas.removeEventListener('touchmove', this.onTouchMove);
      window.removeEventListener('touchend', this.onTouchEnd);
      this.canvas.removeEventListener('click', this.onClick);
    }
  }

  function mount() {
    const canvas = document.getElementById('integrationSphere');
    if (!canvas) return;

    const payload = readPayload();
    if (!payload || !payload.logos || !payload.sprite) {
      setFallbackVisible(canvas);
      return;
    }

    try {
      // eslint-disable-next-line no-new
      const inst = new IntegrationSphere(canvas, payload);
      window.UnobitsIntegrationSphere = {
        mount,
        destroy: () => inst.destroy(),
      };
    } catch (e) {
      setFallbackVisible(canvas);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();

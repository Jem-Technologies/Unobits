'use client';
export function getAppOrigin(): string {
  if (typeof document !== 'undefined') {
    const meta = document.querySelector('meta[name="unobits:app-origin"]') as HTMLMetaElement | null;
    const mval = meta?.content?.trim();
    if (mval) return mval;
  }
  // Fallback for SSR or if meta is missing
  return 'https://unobits.app';
}

export const API_BASE = `${getAppOrigin()}/api`;

export function slugifyOrg(x: string | null | undefined): string {
  return String(x ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getOrgFromPath(pathname?: string): string {
  const p = (pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '')).replace(/\/+$/,'');
  const m = /(?:^|\/)o\/([a-z0-9-]+)/i.exec(p);
  return m ? m[1].toLowerCase() : '';
}

type ApiErrorShape = { error?: string; error_description?: string; message?: string; detail?: string; [k: string]: any };

export async function apiPost<T = any>(path: string, body?: any): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  });
  let data: any = {};
  try { data = await res.json(); } catch { data = {}; }

  if (!res.ok || data?.error) {
    const code = data?.error || `HTTP_${res.status}`;
    const msg =
      (code === 'invalid_credentials')   ? 'Wrong email or password.' :
      (code === 'organization_required') ? 'Organization is required.' :
      (code === 'no_org_membership')     ? 'No membership found for that organization.' :
      (code === 'email_exists')          ? 'That email is already in use.' :
      (code === 'signup_failed')         ? (data?.detail || 'Unable to create your account.') :
      (data?.error_description || data?.message || code);
    const err = new Error(msg) as Error & { code?: string; status?: number; data?: any };
    (err as any).code = code;
    (err as any).status = res.status;
    (err as any).data = data;
    throw err;
  }
  return data as T;
}

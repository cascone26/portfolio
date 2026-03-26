/**
 * Server-side session store for admin authentication.
 * Uses a module-level Map so the token persists for the lifetime of the
 * Node.js process. On Vercel, a cold start clears the store (re-login fixes it).
 * This is intentional — a portfolio site doesn't need Redis.
 */

const activeSessions = new Map<string, number>(); // token -> expiry (ms since epoch)

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function createSession(): string {
  const token = crypto.randomUUID();
  activeSessions.set(token, Date.now() + SESSION_TTL_MS);
  return token;
}

export function validateSession(token: string): boolean {
  const expiry = activeSessions.get(token);
  if (!expiry) return false;
  if (Date.now() > expiry) {
    activeSessions.delete(token);
    return false;
  }
  return true;
}

export function destroySession(token: string): void {
  activeSessions.delete(token);
}

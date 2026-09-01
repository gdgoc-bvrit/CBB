import { Component } from "react";

/**
 * Catches render errors — most importantly a failed lazy-chunk load
 * (stale hashes after a deploy, flaky connection) — and offers a way back
 * instead of a blank screen.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // A chunk that 404s after a redeploy is the common case — a reload fixes it.
    if (/Loading chunk|dynamically imported module|Failed to fetch/i.test(String(error?.message))) {
      window.location.reload();
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
        <p className="font-display text-2xl font-bold text-white">Something went wrong</p>
        <p className="max-w-sm text-neutral-400">
          The page failed to load. This usually clears up with a refresh.
        </p>
        <button
          onClick={() => window.location.assign("/")}
          className="rounded-full border border-[#4cdef5]/40 bg-[#4cdef5]/10 px-6 py-2.5 font-display text-sm font-semibold text-[#4cdef5] transition-colors hover:bg-[#4cdef5]/20"
        >
          Back to home
        </button>
      </div>
    );
  }
}

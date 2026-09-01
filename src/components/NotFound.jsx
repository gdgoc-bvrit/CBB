import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found · CBB", "The page you were looking for doesn't exist.");
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <h1 className="font-brand bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-7xl text-transparent sm:text-8xl">
        404
      </h1>
      <p className="text-lg text-neutral-300">This page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="rounded-full border border-[#4cdef5]/40 bg-[#4cdef5]/10 px-6 py-2.5 font-display text-sm font-semibold text-[#4cdef5] transition-colors hover:bg-[#4cdef5]/20"
      >
        Back to home
      </Link>
    </section>
  );
}

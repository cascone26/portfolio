import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
        404
      </p>
      <h1 className="text-2xl font-semibold text-white mb-3">
        Page not found
      </h1>
      <p className="text-slate-400 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Here are some places you can go instead:
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors"
        >
          Services
        </Link>
        <Link
          href="/blog"
          className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

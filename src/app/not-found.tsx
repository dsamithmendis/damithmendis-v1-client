import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-black flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-wide">
          404 — Not Found
        </p>

        <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600">
            Oops, that page vanished.
          </span>
        </h1>

        <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto">
          The link might be broken or the page may have moved. Try heading back
          home, or check the URL.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
          >
            Go Home
          </Link>

        </div>

        <div className="mt-10 text-xs text-neutral-500 dark:text-neutral-500">
          If you believe this is an error, please{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:no-underline"
          >
            contact us
          </Link>
          .
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto container px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-[rgb(var(--muted))]">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        Go home
      </Link>
    </main>
  );
}


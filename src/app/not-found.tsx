import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-6 py-32">
      <span className="font-display text-sm tracking-[0.3em] text-accent">404</span>
      <h1 className="font-display text-4xl text-fg">Page not found</h1>
      <p className="text-fg-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-2 text-fg underline-offset-4 hover:text-accent hover:underline">
        Back to home →
      </Link>
    </div>
  );
}

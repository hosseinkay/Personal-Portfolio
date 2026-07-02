export function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-fg-muted">
      {children}
    </span>
  );
}

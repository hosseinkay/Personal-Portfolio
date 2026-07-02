import type { ProjectStatus } from "@/content";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Completed: "bg-accent",
  Ongoing: "bg-amber-400",
  Research: "bg-sky-400",
  "In Progress": "bg-fg-subtle",
};

export function StatusDot({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
      <span
        className={cn("h-1.5 w-1.5 shrink-0 rounded-full", STATUS_STYLES[status], className)}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

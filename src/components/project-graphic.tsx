import { cn } from "@/lib/utils";

// Placeholder visual used until a real screenshot exists for a project.
// A per-project gradient plus a faint grid keeps cards visually distinct
// without needing real imagery yet.
export function ProjectGraphic({
  gradient,
  className,
}: {
  gradient: [string, string];
  className?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--fg) 1px, transparent 1px), linear-gradient(to bottom, var(--fg) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(79,168,154,0.25), transparent 60%)",
        }}
      />
    </div>
  );
}

import type { Stat } from "@/content";

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-xs uppercase tracking-wide text-fg-subtle">{stat.label}</dt>
          <dd className="mt-1 font-display text-lg text-fg">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

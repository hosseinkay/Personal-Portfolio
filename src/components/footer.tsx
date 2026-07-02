import { hero, site } from "@/content";
import { SocialIcon } from "@/components/social-icon";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg text-fg">{hero.name}</p>
          <p className="text-sm text-fg-muted">{hero.role} · {hero.location}</p>
        </div>

        <div className="flex items-center gap-4">
          {hero.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "email" ? undefined : "_blank"}
              rel={social.icon === "email" ? undefined : "noreferrer"}
              aria-label={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>

        <p className="text-xs text-fg-subtle">
          © {new Date().getFullYear()} {hero.name}. Built with Next.js.
        </p>
      </div>
      <span className="sr-only">{site.email}</span>
    </footer>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import { hero } from "@/content";
import { SocialIcon } from "@/components/social-icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(79,168,154,0.14), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-content flex-col gap-6"
      >
        <motion.span variants={item} className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
          {hero.role} · {hero.location}
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-4xl leading-[1.1] text-fg text-balance sm:text-6xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p variants={item} className="max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl">
          {hero.valueProp}
        </motion.p>

        <motion.div variants={item} className="flex items-center gap-4 pt-2">
          {hero.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "email" ? undefined : "_blank"}
              rel={social.icon === "email" ? undefined : "noreferrer"}
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
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
        className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16"
      >
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <motion.span variants={item} className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
            {hero.role} · {hero.location}
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-3xl font-display text-4xl leading-[1.1] text-fg text-balance sm:text-6xl"
          >
            {hero.name}
          </motion.h1>

          <motion.div variants={item} className="flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-fg-muted sm:text-xl">
            {hero.valueProp.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

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
        </div>

        {hero.avatarUrl && (
          <motion.div variants={item} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Image
              src={hero.avatarUrl}
              alt={hero.name}
              width={320}
              height={320}
              priority
              className="h-48 w-48 rounded-full border border-border object-cover sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, type Variants } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type StatusState = {
  loading: boolean;
  success: string | null;
  error: string | null;
  submitted: boolean;
};

const headingContainer: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const headingItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const formVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {

  const [status, setStatus] = useState<StatusState>({
    loading: false,
    success: null,
    error: null,
    submitted: false,
  });


  return (
    <section id="contact" className="my-16 w-full scroll-mt-28 md:mb-24">
      <motion.div
        className="mb-10 flex flex-col items-center gap-3 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={headingContainer}
        transition={{
          duration: 0.45,
          ease: "easeOut",
          staggerChildren: 0.1,
        }}
      >
        <motion.span
          variants={headingItem}
          className="rounded-full border border-[#aaa] bg-background/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-[6px]"
        >
          Contact
        </motion.span>
        <motion.h2
          variants={headingItem}
          className="font-heading text-2xl font-semibold sm:text-4xl"
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p
          variants={headingItem}
          className="max-w-xl text-sm text-muted-foreground sm:text-base"
        >
          Prefer email? Reach me at{" "}
          <a
            href="mailto:monisakram5@gmail.com"
            className="font-medium underline-offset-4 hover:underline bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent"
          >
            monisakram5@gmail.com
          </a>{" "}
          or use the form below.
        </motion.p>
      </motion.div>

      <motion.div className="flex flex-row flex-wrap items-center justify-center gap-2">
        <motion.a
          aria-label="Email"
          href="mailto:monisakram5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </motion.a>

        <motion.a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/monis-akram-02262322b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </motion.a>

        <motion.a
          aria-label="GitHub"
          href="https://github.com/monisakram2113/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85V22" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </motion.a>

        <motion.a
          aria-label="Call"
          href="tel:7240442113"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const subtleUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative my-10 scroll-mt-40 sm:mt-28 max-md:transform max-md:translate-y-[-150px]"
    >
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        variants={container}
        transition={{
          staggerChildren: 0.12,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.div className="relative mb-2" variants={item}>
          <motion.div
            className="relative overflow-hidden rounded-full border border-white bg-background/80 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-md"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              alt="Monis Akram profile"
              src="/images/monis-akram.jpg"
              width={144}
              height={144}
              className="size-36 rounded-full object-cover shadow-xl shadow-yellow-400/40 grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-[#aaaaaa] bg-white/50 backdrop-blur-[6px]  px-3 py-1 text-xs font-medium"
          variants={subtleUp}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="font-mono">
            Available for Full-time, Remote & Hybrid work
          </span>
        </motion.div>

        <motion.p className="mt-1 text-xs sm:text-sm" variants={subtleUp}>
          Based in Jaipur, Rajasthan — open to work with teams across the globe.{" "}
          <br />
          Flexible with relocation — Jaipur, Chandigarh, Delhi, Gurugram, and
          Noida preferred.
        </motion.p>

        <motion.h1
          className="font-heading max-w-3xl text-2xl font-extrabold leading-tight sm:text-5xl"
          variants={item}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
            Monis Akram
          </span>
          , a Web Designer &amp; Frontend Developer crafting clean, modern web
          experiences.
        </motion.h1>

        <motion.p
          className="text-muted-foreground max-w-2xl text-sm sm:text-base"
          variants={item}
        >
          I design and build thoughtful interfaces with a strong focus on
          clarity, usability, and smooth interactions. With 4+ years of
          experience working on brands like Eveready, Eicher Motors, Tata Motors
          Finance, Indian Air Force, Muthoot Finance, and Mitsubishi Electric, I
          turn ideas into responsive websites using HTML, CSS, Bootstrap,
          JavaScript, jQuery, WordPress, Framer Motion, GSAP and modern tools
          like React/Next and Tailwind.
        </motion.p>

        <motion.div
          className="flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          variants={item}
        >
          <motion.div
            className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row"
            variants={item}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#contact"
                className="inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-black to-neutral-800 px-8 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:brightness-110 sm:w-auto"
              >
                Let&apos;s talk
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
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className="inline-flex h-11 w-full items-center justify-center whitespace-nowrap rounded-full border border-[#aaaaaa] bg-white/50 backdrop-blur-[6px]  px-8 text-sm font-medium text-foreground transition hover:bg-muted sm:w-auto"
              >
                View work
              </Link>
            </motion.div>

            <motion.div
              className="hidden sm:inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="/images/monis-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-dashed border-border px-8 text-sm font-medium text-muted-foreground transition hover:border-foreground hover:text-foreground"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-row flex-wrap items-center justify-center gap-2 sm:justify-start"
            variants={item}
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Connect
            </span>

            <motion.a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/monis-akram-02262322b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
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
        </motion.div>
      </motion.div>
    </section>
  );
}

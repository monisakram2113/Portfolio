"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Eveready - India's No. 1 Battery",
    img: "./images/eveready-project.png",
    alt: "Eveready website preview",
    desc:
      "Developed the entire website from scratch with a strong focus on clean UI structure, responsive layouts, and high-performance frontend architecture. Implemented smooth GSAP animations, interactive motion effects, and scroll-based transitions to create an engaging and premium user experience. Optimized overall performance, built reusable components, and ensured pixel-perfect execution aligned with the brand identity.",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "TypeScript",
      "MUI",
      "Responsive",
      "3D Animation",
      "Supabase",
      "GLB Object",
    ],
    href: "https://calmllama.life/",
  },
  {
    title: "Eicher Motors - Indian Automotive Company",
    img: "./images/eicher-project.png",
    alt: "Eicher Motors website preview",
    desc:
      "Developed the entire UI from scratch for Eicher Motors, focusing on clean component architecture and responsive frontend implementation. Built reusable UI components, implemented smooth animations using GSAP, and ensured a seamless user experience across all screen sizes. Handled the full frontend workflow—from structuring layouts to integrating advanced motion effects for a modern, premium automotive brand feel.",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "TypeScript",
      "MUI",
      "Responsive",
      "3D Animation",
      "Supabase",
      "GLB Object",
    ],
    href: "https://www.eichertrucksandbuses.com/",
  },
  {
    title: "Tata Motors Finance",
    img: "./images/tmf-project.png",
    alt: "Tata Motors Finance website preview",
    desc:
      "Developed key frontend components for Tata Motors Finance with a strong focus on smooth user interactions and motion design. Ensured fast performance and consistent design implementation throughout the website.",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Framer Motion",
      "TypeScript",
      "MUI",
      "Responsive",
    ],
    href: "https://www.tmf.co.in/",
  },
  {
    title: "Indian Air Force – Career Portal",
    img: "./images/air-inida-project.png", // yaha tumhara file path sahi ho to mat change karna
    alt: "Indian Air Force career website preview",
    desc:
      "Created the Indian Air Force career portal from scratch using HTML, CSS, JavaScript, jQuery, and Bootstrap with responsive UI and interactive features.",
    tags: ["HTML", "CSS", "Bootstrap 5", "JavaScript", "jQuery", "Responsive"],
    href: "https://careerairforce.gov.in/",
  },
];

const headingContainer = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const headingItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const cardsContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const tagsContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const tagVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="my-16 scroll-mt-28 md:mb-24">
      {/* Heading */}
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
          Projects
        </motion.span>
        <motion.h2
          variants={headingItem}
          className="font-heading text-2xl font-semibold sm:text-4xl"
        >
          Work I&apos;m proud of
        </motion.h2>
        <motion.p
          variants={headingItem}
          className="max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          A curated collection of my latest frontend and motion development
          projects, crafted from the ground up with a strong focus on clean UI
          architecture, component-driven development, and high-performance
          execution. Each project blends responsive design with smooth GSAP
          animations, interactive user flows, and optimized code structures
          delivering experiences that feel modern, fast, and visually engaging
          across all devices.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
        variants={cardsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        transition={{
          staggerChildren: 0.14,
          delayChildren: 0.15,
        }}
      >
        {PROJECTS.map((p) => (
          <motion.article
            key={p.title}
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-[#aaa] bg-background/50 shadow-sm backdrop-blur-[6px] transition-all hover:shadow-xl"
          >
            <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl">
              <motion.div
                className="relative h-full w-full"
                initial={{ scale: 1.02 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-300 group-hover:scale-110"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </div>

            <div className="flex flex-col gap-3 p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>

              <p className="text-sm text-muted-foreground">{p.desc}</p>

              {/* Tags */}
              <motion.div
                className="mt-1 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={tagsContainer}
                transition={{
                  staggerChildren: 0.04,
                }}
              >
                {p.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={tagVariant}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="rounded-full border border-[#aaa] bg-background/20 backdrop-blur-[6px] px-3 py-1 text-[11px] uppercase tracking-wide text-muted-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.title}
                className="mt-3 w-fit"
              >
                <motion.button
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full border border-[#aaa] bg-background/20 px-5 py-2 text-sm font-medium text-foreground backdrop-blur-[6px] transition hover:bg-muted/70 hover:text-foreground cursor-pointer"
                >
                  Preview
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </motion.button>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.a
          href="/projects/"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center rounded-full border border-[#aaa] bg-background/70 px-5 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-muted/70 hover:text-foreground"
        >
          View More Projects
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
        </motion.a>
      </motion.div> */}
    </section>
  );
}

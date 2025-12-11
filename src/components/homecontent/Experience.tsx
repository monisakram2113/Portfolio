"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Adglobal 360, Jaipur",
    role: "Frontend Developer",
    period: "2023 – Present",
    desc: "Designing and developing marketing websites and landing pages with a focus on clean UI, responsive layouts, and brand consistency. Collaborated on projects for brands like Eveready, Eicher Motors, Tata Motors Finance, Indian Air Force, Muthoot Finance, and Mitsubishi Electric, handling both UI and front-end implementation.",
    tags: [
      "Web Design",
      "Frontend",
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "GSAP",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "GitHub",
      "WordPress",
      "Photoshop",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    company: "Perdiscoo, Jaipur",
    role: "Web Designer & UI Developer",
    period: "2022 – 2023",
    desc: "Worked on corporate and product-based websites, translating Figma designs into pixel-perfect frontend implementations. Focused on performance, layout systems, and reusable components across multiple projects like Tractor Dekho and Alphasix Marketing. Mostly worked on WordPress builders using Elementor Pro, Divi, and WPBakery.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
      "Animation",
      "WordPress",
      "Elementor",
      "Divi",
      "WPBakery",
      "Responsive",
      "Page Speed Optimization",
      "Cross-Browser",
      "Photoshop",
      "Figma",
    ],
  },
  {
    company: "Webnapp Solution, Jaipur",
    role: "Web Designer",
    period: "2021 – 2022",
    desc: "Started my career building responsive websites and UI screens for different clients. Learned how to ship production-ready layouts, work with designers, and handle real-world feedback cycles.",
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "WordPress Theme Setup",
      "Elementor",
      "Divi",
      "WPBakery",
      "Responsive",
      "Page Speed Optimization",
      "Cross-Browser",
      "Photoshop",
      "Figma",
    ],
  },
  {
    company: "SSV IT Solution, Jaipur",
    role: "Diploma – Creative Career in Web Design (CCWD)",
    period: "2020 – 2021",
    desc: "Built portfolio and small business websites while strengthening core frontend skills. Gained hands-on experience with HTML, CSS, JavaScript, jQuery, and WordPress builders, and explored modern tools like React and Tailwind at a basic level. Focused on improving UI implementation, responsiveness, and clean component structure.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "WordPress",
      "Elementor / Divi / WPBakery",
      "React (Basics)",
      "Tailwind (Basics)",
      "Photoshop",
      "Figma",
    ],
  },
];

const headingItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const timelineContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const timelineItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const tagVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const tagList = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Experience() {
  return (
    <section id="experience" className="my-16 scroll-mt-28 md:mb-24">
      <motion.div
        className="mb-10 flex flex-col items-center gap-3 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          variants={headingItem}
          className="rounded-full border border-[#aaa] bg-background/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-[6px]"
        >
          Experience
        </motion.span>
        <motion.h2
          variants={headingItem}
          className="font-heading text-2xl font-semibold sm:text-4xl"
        >
          The journey so far
        </motion.h2>
        <motion.p
          variants={headingItem}
          className="max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          A quick look at where I&apos;ve worked and what I&apos;ve been
          building as a Web Designer and Frontend Developer.
        </motion.p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-border via-border/40 to-transparent md:left-5"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          style={{ originY: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="space-y-8"
          variants={timelineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            staggerChildren: 0.16,
            delayChildren: 0.15,
          }}
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              variants={timelineItem}
              className="relative flex gap-4 pl-0 md:gap-6 md:pl-12"
            >
              <div className="absolute left-3 top-2 flex h-4 w-4 items-center justify-center md:left-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex-1 relative bg-background/50 p-5 backdrop-blur-[6px] group animate-border-draw-contain shadow-sm sm:p-5"
              >
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-150 rounded-full"></span>
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 delay-300 rounded-full"></span>
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-500 rounded-full"></span>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {exp.company}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-foreground sm:text-lg">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="inline-flex items-center rounded-full bg-muted/70 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {exp.period}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.desc}
                </p>

                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={tagList}
                  transition={{
                    staggerChildren: 0.04,
                  }}
                >
                  {exp.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariant}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="rounded-full border border-[#aaa] bg-background/20 backdrop-blur-[6px] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

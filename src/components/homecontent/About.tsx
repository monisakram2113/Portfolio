"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const skillsContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const skillChip = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="my-16 flex w-full scroll-mt-28 flex-col items-center md:mb-24"
    >
      {/* Heading block */}
      <motion.div
        className="mb-10 flex flex-col items-center gap-3 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          variants={item}
          className="rounded-full border border-[#aaa] bg-background/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-[6px]"
        >
          About
        </motion.span>

        <motion.h2
          variants={item}
          className="font-heading text-2xl font-semibold sm:text-4xl"
        >
          Designer who loves clean, usable interfaces
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          I&apos;m a Web Designer and Frontend Developer blending solid visual
          design with pixel-perfect implementation for modern web products.
        </motion.p>
      </motion.div>

      {/* Main grid */}
      <motion.div
        className="grid w-full max-w-5xl gap-8 px-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={container}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        {/* Text column */}
        <motion.div
          className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
          variants={item}
        >
          <p>
            My name is{" "}
            <span className="font-medium text-foreground">Monis Akram</span>.
            I&apos;ve spent the last{" "}
            <span className="font-medium text-foreground">4+ years</span>{" "}
            designing and building digital experiences as a Web Designer and
            Frontend Developer. I enjoy turning rough ideas into clean, focused
            interfaces that feel effortless to use.
          </p>
          <p>
            I work with HTML, CSS, Bootstrap, JavaScript, jQuery, and WordPress
            on the frontend, and I&apos;ve been leveling up with modern tools
            like{" "}
            <span className="font-medium text-foreground">
              React and Next.js
            </span>{" "}
            and{" "}
            <span className="font-medium text-foreground">Tailwind CSS</span>.
            My process usually starts in Figma, where I explore layouts,
            typography, and interactions before bringing everything to life in
            code.
          </p>
          <p>
            Over the years, I&apos;ve contributed to projects for brands like{" "}
            <span className="font-medium text-foreground">
              Eveready, Eicher Motors, Tata Motors Finance, Indian Air Force,
              Muthoot Finance,
            </span>{" "}
            and{" "}
            <span className="font-medium text-foreground">
              Mitsubishi Electric
            </span>
            , focusing on clarity, performance, and a smooth user journey across
            devices.
          </p>
          <p>
            I&apos;m currently based in{" "}
            <span className="font-medium text-foreground">
              Jaipur, Rajasthan
            </span>
            , and I love collaborating with teams who care about details,
            meaningful design, and long-term product thinking. When I&apos;m not
            designing or coding, I&apos;m usually exploring new UI trends,
            improving my skills, or planning the next thing to build.
          </p>
        </motion.div>

        {/* Cards column */}
        <motion.div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative bg-background/50 p-5 shadow-sm backdrop-blur-[6px] group animate-border-draw-container"
          >
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-150 rounded-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 delay-300 rounded-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-500 rounded-full"></span>

            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Experience
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                4+ years in Web &amp; Frontend
              </p>
              <p className="text-xs text-muted-foreground">
                Worked with agencies and product teams on dashboards, marketing
                websites, and brand experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative bg-background/50 p-5 shadow-sm backdrop-blur-[6px] group animate-border-draw-container"
          >
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-150 rounded-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 delay-300 rounded-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-500 rounded-full"></span>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What I do
            </div>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Frontend development and responsive layouts</li>
              <li>• Landing pages and marketing sites</li>
              <li>• UI/UX design for web products</li>
              <li>• Design systems and reusable components</li>
            </ul>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative bg-background/50 p-5 shadow-sm backdrop-blur-[6px] group animate-border-draw-container md:col-span-1 sm:col-span-2"
          >
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-150 rounded-full"></span>
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:w-full transition-all duration-300 delay-300 rounded-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 group-hover:h-full transition-all duration-300 delay-500 rounded-full"></span>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Recent highlights
              </span>
            </div>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Shipped responsive experiences for large brands</li>
              <li>• Collaborated closely with dev and marketing teams</li>
              <li>• Focused on accessibility, performance, and clean handoff</li>
              <li>• Continuously learning modern frontend tools and patterns</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-2 px-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:justify-start md:px-0"
        variants={skillsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          staggerChildren: 0.06,
          delayChildren: 0.2,
        }}
      >
        {[
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "jQuery",
          "WordPress",
          "React",
          "Next.js",
          "Tailwind",
          "Framer Motion",
          "GitHub",
          "Figma",
          "Adobe Photoshop",
        ].map((skill) => (
          <motion.span
            key={skill}
            variants={skillChip}
            whileHover={{ y: -2, scale: 1.03 }}
            className="rounded-full border border-[#aaa] bg-background/50 backdrop-blur-[6px] px-3 py-1"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

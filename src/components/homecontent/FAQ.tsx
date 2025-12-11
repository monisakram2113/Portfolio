"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "What kind of work do you do?",
    a: "I design and build modern, responsive websites and landing pages as a Web Designer and Frontend Developer. I focus on clean layouts, clear hierarchy, and smooth interactions from Figma designs to live, production-ready front-end.",
  },
  {
    q: "How much experience do you have?",
    a: "I have 4+ years of experience working with agencies and brands, creating marketing sites, product pages, and custom UIs. I’ve worked on projects for Eveready, Eicher Motors, Tata Motors Finance, Indian Air Force, Muthoot Finance, and Mitsubishi Electric, and more.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "For development, I work with HTML, CSS, Bootstrap, JavaScript, jQuery, and WordPress, along with growing experience in React.js, Next.js, Tailwind CSS, MUI, GSAP and Framer Motion for modern component-based UIs. On the design side, I mainly use Figma and Photoshop.",
  },
  {
    q: "Are you available for freelance or remote work?",
    a: "Yes. I’m based in Jaipur, Rajasthan and open to remote opportunities with teams in India or abroad. I’m comfortable collaborating async using tools like Slack, Zoom, and project management platforms.",
  },
  {
    q: "What type of projects do you enjoy the most?",
    a: "I enjoy projects where I can own the web and frontend—from portfolio sites and product landing pages to brand websites and dashboards where attention to detail, typography, spacing, and responsiveness really matter.",
  },
  {
    q: "Can you join existing teams and ongoing projects?",
    a: "Absolutely. I can jump into existing codebases, refine UI, fix layout issues, improve responsiveness, and align the design system. I’m used to working with designers, developers, and marketing teams together.",
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

const listContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const faqItemVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="my-16 scroll-mt-28 md:mb-24">
      <div className="mx-auto max-w-4xl">
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
            FAQ
          </motion.span>
          <motion.h2
            variants={headingItem}
            className="font-heading text-2xl font-semibold sm:text-4xl"
          >
            Answers to common questions
          </motion.h2>
          <motion.p
            variants={headingItem}
            className="max-w-2xl text-sm text-muted-foreground sm:text-base"
          >
            A quick overview of how I work, what I do, and how we can
            collaborate on your next project.
          </motion.p>
        </motion.div>

        {/* List */}
        <motion.div
          className="overflow-hidden rounded-2xl bg-background/50 shadow-sm backdrop-blur-[6px]"
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            staggerChildren: 0.08,
            delayChildren: 0.1,
          }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.q}
                variants={faqItemVariant}
                className="border-b border-dashed border-[#aaa] last:border-b-0 mb-2"
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/40 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    id={`faq-question-${index}`}
                    className="pr-4 text-sm font-semibold sm:text-base"
                  >
                    {item.q}
                  </h3>

                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="size-5 shrink-0"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden px-5 sm:px-6"
                    >
                      <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

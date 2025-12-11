"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Scroll ke hisaab se active section detect karo
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.querySelector(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          threshold: 0.45,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="sticky top-5 z-20 my-5 sm:top-10 sm:my-10">
      <div
        className="flex items-center justify-between gap-2 rounded-full border border-[#aaaaaa] bg-white/50 backdrop-blur-[6px] px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.18)] sm:px-4 sm:py-3"
      >
        {/* Logo / Name */}
        <Link
          href="#home"
          className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setActive("#home")}
        >
          Monis Akram
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden text-sm sm:block">
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    className={`group relative inline-flex items-center justify-center rounded-full
                    px-4 py-2 text-xs font-medium transition-colors
                    ${
                      isActive
                        ? "text-foreground bg-[#f4f4f5]"
                        : "text-muted-foreground"
                    }`}
                  >
                    {/* Background pill */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-200
                      ${
                        isActive
                          ? "bg-muted"
                          : "bg-transparent group-hover:bg-muted/60"
                      }`}
                      aria-hidden="true"
                    />
                    {/* Text */}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#aaa] bg-background/20 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm transition hover:bg-muted/70 hover:text-foreground sm:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`mt-2 origin-top rounded-2xl border border-border/60 bg-background/95 
        p-2 text-sm shadow-xl backdrop-blur-md transition-all duration-200 sm:hidden
        ${
          menuOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActive(item.href);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-xl px-3 py-2
                    text-xs font-medium transition
                    ${
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full
                      ${
                        isActive
                          ? "bg-foreground"
                          : "bg-muted-foreground/50"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

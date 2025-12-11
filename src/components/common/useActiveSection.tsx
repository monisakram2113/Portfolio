"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const section = document.querySelector(id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [sectionIds]);

  return active;
}

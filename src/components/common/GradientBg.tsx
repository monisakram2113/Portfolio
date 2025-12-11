"use client";

import { useEffect } from "react";

export default function GradientBg() {
  useEffect(() => {
    const bg = document.getElementById("gradient-bg");

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (bg) {
        bg.style.background = `
          radial-gradient(circle at ${x * 100}% ${y * 100}%, 
          #f1e6ff, 
          #c9a9ff, 
          #9f63ff)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}

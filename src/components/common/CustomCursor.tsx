"use client";

import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const inner = document.querySelector(".cursor-inner") as HTMLDivElement | null;
    const outer = document.querySelector(".cursor-outer") as HTMLDivElement | null;

    if (!inner || !outer) return; // prevent null errors

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;

    // event type fix
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      inner.style.left = `${mouseX}px`;
      inner.style.top = `${mouseY}px`;
    };

    // smooth follow
    const followOuter = () => {
      outerX += (mouseX - outerX) * 0.1;
      outerY += (mouseY - outerY) * 0.1;

      outer.style.left = `${outerX}px`;
      outer.style.top = `${outerY}px`;

      requestAnimationFrame(followOuter);
    };

    followOuter();

    // click effect
    const clickEffect = () => {
      inner.classList.add("click");
      outer.classList.add("click");

      setTimeout(() => {
        inner.classList.remove("click");
        outer.classList.remove("click");
      }, 200);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickEffect);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickEffect);
    };
  }, []);

  return (
    <>
      <div className="cursor-inner"></div>
      <div className="cursor-outer"></div>
    </>
  );
}

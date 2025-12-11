"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } z-[9999]`}
    >
      <div className="relative">
        <Image
          src="/images/m-logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="relative z-10 rounded-[50%/50%] shadow-sm animate-[pulse_1.5s_ease-in-out_infinite]"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}

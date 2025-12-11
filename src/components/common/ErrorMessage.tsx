"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const errorData = {
  503: {
    title: "We’re Down for Maintenance!",
    description:
      "Our servers are currently unavailable. We’ll be back soon—thank you for your patience!",
    image: "/images/under-maintenance-img.svg",
    cta: {
      text: "Check Status Page",
      href: "#",
    },
  },
  "no-internet": {
    title: "Uh-oh! It looks like you’re offline.",
    description:
      "Your internet seems slow or disconnected. Try refreshing or checking your connection.",
    image: "/images/No-Internet-img.svg",
    cta: {
      text: "Retry Connection",
      href: "#", // JavaScript-based retry could be added
    },
  },
  500: {
    title: "500 - Internal Server Error",
    description:
      "We’re experiencing an issue on our end. Please try again later or refresh the page.",
    image: "/images/server-error-img.svg",
    cta: {
      text: "Try Again",
      href: "#",
    },
  },
  404: {
    title: "Well, this is awkward!",
    description:
      "We can’t find the page. Maybe it never existed? Let’s get you back.",
    image: "/images/404-error-img.svg",
    cta: {
      text: "Return to Homepage",
      href: "/",
    },
  },
};

type ErrorType = "503" | "500" | "404" | "no-internet";

const ErrorMessage = ({
  type = "503",
  reset,
}: {
  type?: ErrorType;
  reset?: () => void;
}) => {
  const { title, description, image, cta } =
    errorData[type] || errorData["503"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E9E8E8] px-4 text-center">
      <Image
        src={image}
        alt={title}
        className="w-50 mb-6"
        priority
        width={50}
        height={50}
      />
      <h1 className="text-[22px] font-semibold text-black">{title}</h1>
      <p className="mt-2 text-[14px] text-[#333] mb-5">{description}</p>
      {cta.href === "#" ? (
        <button onClick={reset} className="btn_red cursor-pointer">
          {cta.text}
        </button>
      ) : (
        <Link href={cta.href} className="btn_red cursor-pointer">
          {cta.text}
        </Link>
      )}
    </div>
  );
};

export default ErrorMessage;

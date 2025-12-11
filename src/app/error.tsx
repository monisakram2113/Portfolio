"use client";

import { useEffect } from "react";
import ErrorMessage from "@/components/common/ErrorMessage";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  // You can customize this logic:
  let errorType: "500" | "503" = "500";
  if (error.message.includes("503")) errorType = "503";

  return <ErrorMessage type={errorType} reset={reset}/>;
}

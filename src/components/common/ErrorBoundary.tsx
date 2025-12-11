"use client";
import React, { ErrorInfo } from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
          <div className="relative w-[220px] h-[220px] mb-8">
            <Image
              src="/images/server-error-img.svg"
              alt="Error"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Oops! Something went wrong
          </h1>

          <p className="text-gray-600 mb-6 max-w-md text-center">
            We hit a snag while loading this section. Please try again or go
            back home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={this.reset} className="btn_red cursor-pointer">
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

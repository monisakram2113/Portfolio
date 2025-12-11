import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageLoader from "@/components/common/PageLoader";
import GradientBg from "@/components/common/GradientBg";
import CustomCursor from "@/components/common/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Monis Akram — Frontend Developer & Web Designer",
  description: "Monis Akram, a frontend developer skilled in React.js, Next.js, Tailwind CSS, and modern Web Design.",
  openGraph: {
    title: "Monis Akram — Frontend Developer & Web Designer",
    description: "Monis Akram, a frontend developer skilled in React.js, Next.js, Tailwind CSS, and modern Web Design.",
    url: "https://your-website-url.com",
    siteName: "Monis Akram Portfolio",
    images: [
      {
        url: "/monis-akram.jpg",
        width: 400,
        height: 400,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col w-full">
        <CustomCursor />
        <GradientBg />
        <div id="gradient-bg" className="fixed inset-0 -z-10"></div>

        <main className="container flex flex-col items-center mx-auto max-md:px-[20px]">
          <Header />
          <PageLoader />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

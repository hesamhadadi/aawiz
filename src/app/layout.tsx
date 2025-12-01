import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Aawiz",
    template: "%s | Aawiz",
  },
  description: "Aawiz demo built with Next.js 14, UI components, form validation, and a dashboard fetching public API data.",
  keywords: [
    "Next.js 14",
    "React",
    "Tailwind",
    "Form validation",
    "Dashboard",
    "Dark mode",
    "React Hook Form",
    "Zod"
  ],
  authors: [{ name: "Nassim" }],
  metadataBase: new URL("https://aawiz-demo.vercel.app"),
  openGraph: {
    title: "Aawiz",
    description: "A SaaS-style Next.js 14 demo with reusable UI and API dashboard.",
    url: "https://aawiz-demo.vercel.app",
    siteName: "Aawiz",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

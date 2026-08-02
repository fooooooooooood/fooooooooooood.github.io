import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fooooooooooood | Recipe & Meal Planner",
  description: "A curated collection of clean, high-protein, and nutrient-dense meal ideas and recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-slate-50 flex flex-col min-h-screen selection:bg-emerald-500/20 selection:text-emerald-900`}
      >
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/80 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-500/20 group-hover:rotate-3 transition-transform">
                🥗
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 bg-clip-text text-transparent">
                fooooooooooood
              </span>
            </Link>
          </div>
        </header>

        {/* Main Body */}
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}

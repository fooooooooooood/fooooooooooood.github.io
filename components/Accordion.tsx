"use client";

import { useState } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 text-slate-100 shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-white bg-slate-800/90 hover:bg-slate-800 transition-colors duration-200 focus:outline-none gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold tracking-tight text-white">
          {title}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <svg
            className="w-4 h-4 shrink-0 overflow-visible"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 py-5 border-t border-slate-700/80 bg-slate-900 text-slate-100 text-base leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

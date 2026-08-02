import Link from "next/link";
import { getSlugs } from "@/utils/fs";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* Back Button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-800 transition-all shadow-xs group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>All Categories</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="prose-custom">
        <Post />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getSlugs();
}

export const dynamicParams = false;

import Image from "next/image";
import Link from "next/link";
import { MealMeta } from "@/utils/fs";

export default function CategoryGrid({
  categories,
}: {
  categories: MealMeta[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/recipes/${cat.slug}`}
          className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${cat.borderColor} bg-gradient-to-br ${cat.gradient} p-6 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-500/50`}
        >
          <div>
            {/* Image Section */}
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-2xl bg-white/40 border border-white/60 flex items-center justify-center group-hover:bg-white/60 transition-colors">
              <Image
                src={`/${cat.slug}.png`}
                alt={cat.title}
                width={160}
                height={160}
                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              {cat.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
              {cat.description}
            </p>
          </div>

          {/* Action Link */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4">
            <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors uppercase tracking-wider">
              View Recipes
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white group-hover:bg-emerald-600 transition-all duration-300 group-hover:translate-x-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

import { MEAL_METADATA } from "@/utils/fs";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  const categories = Object.values(MEAL_METADATA);

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Recipes & Meal Planning
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Select a category to view recipes, ingredients, and preparation ideas.
        </p>
      </div>

      {/* Interactive Categories & Search Grid */}
      <CategoryGrid categories={categories} />
    </div>
  );
}

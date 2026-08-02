export interface MealMeta {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  borderColor: string;
}

export const MEAL_METADATA: Record<string, MealMeta> = {
  breakfast: {
    slug: 'breakfast',
    title: 'Breakfast',
    description: 'Oats, yogurt bowls & breakfast ideas.',
    emoji: '🍳',
    gradient: 'from-amber-500/20 via-orange-500/10 to-amber-500/5',
    borderColor: 'border-amber-500/30',
  },
  lunch: {
    slug: 'lunch',
    title: 'Lunch',
    description: 'Mediterranean, Mexican, and Asian grain bowls & salads.',
    emoji: '🥗',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-500/5',
    borderColor: 'border-emerald-500/30',
  },
  dinner: {
    slug: 'dinner',
    title: 'Dinner',
    description: 'Stir-fries, pastas, curries & dinners.',
    emoji: '🍲',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-indigo-500/5',
    borderColor: 'border-indigo-500/30',
  },
  snacks: {
    slug: 'snacks',
    title: 'Snacks',
    description: 'Fruits, protein shakes & snacks.',
    emoji: '🍎',
    gradient: 'from-rose-500/20 via-pink-500/10 to-rose-500/5',
    borderColor: 'border-rose-500/30',
  },
  takeout: {
    slug: 'takeout',
    title: 'Takeout',
    description: 'Takeout & dining out options.',
    emoji: '🍱',
    gradient: 'from-sky-500/20 via-blue-500/10 to-sky-500/5',
    borderColor: 'border-sky-500/30',
  },
};

export const FILENAMES = ['breakfast', 'lunch', 'dinner', 'snacks', 'takeout'];

export const getSlugs = () => {
  return FILENAMES.map((filename) => {
    return { slug: filename };
  });
};

export const getCategoryMeta = (slug: string): MealMeta => {
  return (
    MEAL_METADATA[slug] || {
      slug,
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      description: 'Recipes and meal options.',
      emoji: '🍽️',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-500/5',
      borderColor: 'border-emerald-500/30',
    }
  );
};

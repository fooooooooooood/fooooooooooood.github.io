import { getSlugs } from "@/utils/fs";

export default async function Home() {
  const slugs = getSlugs();

  return (
    <div>
      <h1>Recipes</h1>
      { slugs.map((slug) => {
        return <div key={slug.slug}>
          <a href={`/recipes/${slug.slug}`}>{slug.slug}</a>
        </div>
      })}
    </div>
  );
}

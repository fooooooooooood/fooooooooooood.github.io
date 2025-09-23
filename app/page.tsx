import { getSlugs } from "@/utils/fs";

export default async function Home() {
  const slugs = getSlugs();

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        { slugs.map((slug) => {
          return <li key={slug.slug}>
            <a href={`/recipes/${slug.slug}`}>{slug.slug}</a>
          </li>
        })}
      </ul>
    </div>
  );
}

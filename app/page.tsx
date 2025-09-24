import { getSlugs } from "@/utils/fs";

export default async function Home() {
  const slugs = getSlugs();

  const properCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        { slugs.map((slug) => {
          const slugName = slug.slug;
          return <li key={slugName}>
            <a href={`/recipes/${slugName}`}>{properCase(slugName)}</a>
          </li>
        })}
      </ul>
    </div>
  );
}

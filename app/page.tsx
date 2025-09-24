import Image from 'next/image';

import { getSlugs } from "@/utils/fs";

export default async function Home() {
  const slugs = getSlugs();

  const properCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <h1 className="text-center">Recipes</h1>
      <div className="flex flex-wrap justify-center">
        { slugs.map((slug) => {
          const slugName = slug.slug;
          return (
            <a key={slugName} href={`/recipes/${slugName}`} className="card flex flex-col justify-around border border-gray-400 rounded-lg shadow-sm hover:bg-gray-100 w-6/16 md:w-1/4">
              <div className="flex justify-center">
                <Image src={`/${slugName}.png`} width={200} height={200} alt={slugName} className="object-center" />
              </div>
              <div className="text-center font-semibold pt-1">{properCase(slugName)}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

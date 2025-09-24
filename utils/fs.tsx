// import fs from 'fs';

const FILENAMES = ['breakfast', 'lunch', 'dinner', 'snacks', 'takeout'];

export const getSlugs = () => {
  // Hardcoding to appease the upper beings.
  return FILENAMES.map((filename) => {
    return { slug: filename.replace('.mdx', '') };
  });

  // return fs.readdirSync(`content`).map((filename) => {
  //   return { slug: filename.replace('.mdx', '') };
  // });
};

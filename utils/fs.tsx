import fs from 'fs';

export const getSlugs = () => {
  return fs.readdirSync(`content`).map((filename) => {
    return { slug: filename.replace('.mdx', '') };
  });
};

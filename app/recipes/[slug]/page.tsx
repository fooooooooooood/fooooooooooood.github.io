import { getSlugs } from '@/utils/fs';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);
 
  return (
    <div>
      <div>
        <a href="/" className="secondary">{"< Go Back"}</a>
      </div>
      <Post />
    </div>
  );
};
 
export function generateStaticParams() {
  return getSlugs();
};
 
export const dynamicParams = false;

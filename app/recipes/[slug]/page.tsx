import { getSlugs } from '@/utils/fs';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);
 
  return <Post />;
};
 
export function generateStaticParams() {
  return getSlugs();
};
 
export const dynamicParams = false;

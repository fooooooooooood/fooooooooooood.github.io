import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  distDir: 'docs',  // Github Pages
  output: 'export', // Static files only

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // For MDX support

  images: { unoptimized: true }, // Fighting the compiler...
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

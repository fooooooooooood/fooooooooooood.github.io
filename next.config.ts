import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  distDir: 'docs',  // Github Pages
  output: 'export', // Static files only

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // For MDX support
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

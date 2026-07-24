import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  output: "export",

  basePath: "/filimo-next",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

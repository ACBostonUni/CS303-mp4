import type { NextConfig } from "next";

const nextConfig: NextConfig = {


  /* config options here */
  compiler: {
    styledComponents: true,
  }, /* I had to add this for whatever reason, maybe it is because I am using styled components, and this was originally configed with tailwind */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

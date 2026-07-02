// When building for GitHub Pages project sites, assets must be served from
// /<repo-name>/. Set NEXT_PUBLIC_BASE_PATH in CI to the repo name (with a
// leading slash) to enable this; leave unset for local dev or a user/org
// page deployed at the domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

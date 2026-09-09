import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // GitHub Pages is a static host. Keep the existing Sites build unchanged and
  // enable a repository-aware static export only in GitHub Actions.
  ...(isGitHubPagesBuild
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;

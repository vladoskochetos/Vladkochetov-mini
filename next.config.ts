import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // GitHub Pages is a static host. Keep the existing Sites build unchanged and
  // enable static export only in the GitHub Actions environment.
  ...(isGitHubPagesBuild ? { output: "export" } : {}),
};

export default nextConfig;

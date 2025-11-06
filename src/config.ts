// Centralized configuration file
export const config = {
  // GitHub configuration
  github: {
    username: "leynier",
    apiBaseUrl: "https://api.github.com",
    contributionsApiUrl: "https://github-contributions-api.jogruber.de/v4",
  },
  
  // Hashnode configuration
  hashnode: {
    blogUrl: "blog.leynier.dev",
    apiUrl: "https://gql.hashnode.com",
  },
  
  // Site configuration
  site: {
    name: "Leynier Gutiérrez González",
    url: "https://leynier.dev",
    twitterHandle: "@leynier41",
    defaultLocale: "en",
    locales: ["en", "es"] as const,
  },
  
  // API limits and timeouts
  api: {
    githubReposLimit: 100,
    githubCommitsLimit: 30,
    requestTimeout: 10000, // 10 seconds
  },
  
  // Image paths
  images: {
    avatar: "/assets/images/avatar.webp",
    favicon: "/assets/images/favicon.webp",
    defaultCover: "/assets/images/avatar.webp",
  },
} as const;

export type Config = typeof config;

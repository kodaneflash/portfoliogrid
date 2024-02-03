module.exports = {
  siteUrl: "https://jamesarcher.io",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["http://localhost:3000/server-sitemap.xml"],
  },
};

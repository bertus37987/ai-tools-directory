module.exports = {
  siteUrl: 'https://bertus37987.github.io/ai-tools-directory',
  generateRobotsTxt: true,
  outDir: 'out',
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7
    };
  },
  exclude: ['/404']
};

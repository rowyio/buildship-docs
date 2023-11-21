/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.buildship.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
};

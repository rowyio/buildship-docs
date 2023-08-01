const BASE_PATH = process.env.BASE_PATH;
const PREFIX_PATH = "";

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
    basePath: BASE_PATH || "",
    async redirects() {
      return [
        /*
          Redirects to avoid inital page
        */
        {
          source: "/",
          destination: "/docs/introduction/welcome",
          permanent: true,
        }
      ];
    },
  })

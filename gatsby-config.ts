import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio Website`,
    siteUrl: `https://www.zkhan.dev`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/",
      },
      __key: "pages",
    },
    
  ],
};

export default config;

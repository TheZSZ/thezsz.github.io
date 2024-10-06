module.exports = {
  pathPrefix: ``, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Z\'s Site',
    siteUrl: `https://www.zkhan.dev`, // Adding this to match the TS config
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hyperspace',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sitemap', // Added from the TS config
      options: {}, // Empty options object if needed
    },
    {
      resolve: 'gatsby-source-filesystem', // Added from the TS config
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-mdx', // Added from the TS config
  ],
};

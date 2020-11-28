module.exports = {
  siteMetadata: {
    title: `hect.dev`,
    description: `I'm a software engineer residing in the Dominican Republic 🏝. For the past 6 years I've been creating all sorts of applications, ranging from complex backend solutions to beautifully designed websites.`,
    author: `@hectorandac`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `hect.dev`,
        start_url: `/`,
        background_color: `#092934`,
        theme_color: `#092934`,
        display: `minimal-ui`,
        icon: `src/images/logo_favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
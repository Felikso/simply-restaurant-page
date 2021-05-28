require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Lwowskie Smaki`,
    description: `Strona jednego z najlepszych FoodTrucków we Wrocławiu`,
    author: `Aleksandra Śniegucka`,
    street: `ul. Dawida`,
    city: `Wrocław`,
    motto: `szybko, smacznie, świeżo`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menuData`,
        path: `./menuData/`,
      },
    },
/*     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dataMenu`,
        path: `${__dirname}/src/dataMenu/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    }, */
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
/*     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_KEY,
      },
    }, */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon2.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-preload-fonts`,
/*     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dataMenu`,
        path: `./dataMenu/`,
      },
    }, */
/*         {
			resolve: `gatsby-source-wordpress`,
			options: {
				url: "https://blog.ventus-trade.pl/graphql",
        type: {
          BlockEditorContentNode: { exclude: true }
        }
			},
		}, */
/*     {
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Ubuntu',
            variants: [
              '400',
              '400i',
              '700',
              '700i',
            ],
            subsets: [
              'latin-ext',
            ],
          },
        ],
      },
    }, */
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
    `gatsby-plugin-minify`,
    `gatsby-plugin-netlify-cache`,
  ],
}

let env = process.env.NODE_ENV || "development"
require("dotenv").config({ path: `./.env.${env}` })

module.exports = {
  siteMetadata: {
    title: `Elmi Systemy Automatyki`,
    description: ``,
    author: `@monikasianko`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: "elmi-development",
        // We add the 'team-members' object type to be able to fetch it later
        objectTypes: ["all-pages"],
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: "X6WYCgjsW0AlTzOSBKjZb8wfz9lj4K3OwVoXhUdfuYqbxciUoD",
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`pl`, `en`],
        // language file path
        defaultLanguage: `pl`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-breakpoints",

    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}

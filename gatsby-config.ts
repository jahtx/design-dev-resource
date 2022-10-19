import type { GatsbyConfig } from "gatsby";
import siteConfig from "./data/siteConfig";

const config: GatsbyConfig = {
  siteMetadata: {
    title: siteConfig.title,
    siteUrl: siteConfig.siteUrl,
    keywords: siteConfig.keywords,
    author: siteConfig.author,
    description: siteConfig.siteDescription,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-X0RKH7LJ9N"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`, `Raleway`, `Lato`, `Space Grotesk`, `Silkscreen`],
        display: "swap",
      },
    },
  ],
};

export default config;

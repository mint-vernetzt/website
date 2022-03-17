require("dotenv").config();

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "MINTvernetzt",
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: false,
        ref: true,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.CMS_API}`,
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
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
  ],
};

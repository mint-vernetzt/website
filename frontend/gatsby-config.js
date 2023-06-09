require("dotenv").config();

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: "MINTvernetzt",
    description:
      "MINTvernetzt ist die Service- und Anlaufstelle für die Community der MINT-Akteur:innen in Deutschland.",
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "MINTvernetzt",
        short_name: "MINTvernetzt",
        start_url: "/",
        background_color: "#154194",
        theme_color: "#154194",
        display: "minimal-ui",
        icon: "src/images/logo-mint.svg",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 80,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "downloads",
        path: `${__dirname}/src/downloads`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pakt",
        path: "src/data/pakt/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "diversity_glossary",
        path: "src/data/diversity/glossary/",
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: `${process.env.MATOMO_SITE_ID}`,
        matomoUrl: `${process.env.MATOMO_URL}`,
        siteUrl: `${process.env.SITE_URL}`,
      },
    },
    `gatsby-plugin-meta-redirect`,
  ],
};

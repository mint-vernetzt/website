require("dotenv").config();

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "MINTvernetzt",
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.CMS_API}`,
      },
    },
  ],
};

const path = require("path");

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  });
};

exports.createPages = async (props) => {
  const { graphql, actions } = props;
  const { createPage } = actions;
  const result = await graphql(`
    {
      allWpEvent {
        nodes {
          id
          slug
          wpParent {
            node {
              slug
            }
          }
        }
      }
      allWpNewsItem(sort: { fields: [date] }) {
        nodes {
          id
          slug
        }
      }
    }
  `);
  result.data.allWpNewsItem.nodes.forEach((node) => {
    createPage({
      path: `/news/${node.slug}`,
      component: path.resolve(`./src/templates/News.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  result.data.allWpEvent.nodes.forEach((node) => {
    createPage({
      path: `/event/${node.slug}`,
      component: path.resolve(`./src/templates/Event.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  const { createRedirect } = actions;

  createRedirect({
    fromPath:
      "/mint-bildungsforschung/themenspezial-artikel-maedchen-fuer-programmieren-begeistern/",
    toPath: `/mint-bildungsforschung/themenspezial-artikel-maedchen-fuer-informatik-begeistern/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      logo: File @fileByRelativePath
    }
  `;
  createTypes(typeDefs);
};
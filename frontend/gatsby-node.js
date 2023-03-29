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
      allWpProject {
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

  result.data.allWpProject.nodes.forEach((node) => {
    createPage({
      path: `/project/${node.slug}`,
      component: path.resolve(`./src/templates/Project.tsx`),
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
  createRedirect({
    fromPath: "/mintrakete",
    toPath: `/projects/mint-raketen/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/mintrakete/",
    toPath: `/projects/mint-raketen/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/",
    toPath: `/projects/mint-pakt/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt",
    toPath: `/projects/mint-pakt/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/about",
    toPath: `/about/was-ist/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/about/",
    toPath: `/about/was-ist/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/mintvernetzt",
    toPath: `/mintvernetzt-informiert/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/mintvernetzt/",
    toPath: `/mintvernetzt-informiert/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/projects/mint-pakt/",
    toPath: `/projects/mint-buendnis/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/codingschule-junior-g-gmb-h",
    toPath: "/pakt/unternehmen-und-stiftungen/tech-and-teach-g-gmb-h/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/codingschule-junior-g-gmb-h/",
    toPath: "/pakt/unternehmen-und-stiftungen/tech-and-teach-g-gmb-h/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/basf-se/",
    toPath: "/pakt/unternehmen-und-stiftungen/basf/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/arbeitgeber-und-arbeitnehmerverbaende/deutscher-industrie-und-handelskammertag-dihk/",
    toPath: "/pakt/koerperschaften-des-oeffentlichen-rechts/deutsche-industrie-und-handelskammer-dihk/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/trilux-gigital-solutions-gmb-h/",
    toPath: "/pakt/unternehmen-und-stiftungen/trilux-digital-solutions-gmb-h/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/vdi-vde-innovation-technik-gmb-h-vdi-vde-it/",
    toPath: "/404/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cluster/",
    toPath: "/news/cluster",
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
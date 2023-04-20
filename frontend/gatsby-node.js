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
    fromPath: "/pakt/vereine-und-verbaende/i3-e-v-mit-dem-projekt-hacker-school/",
    toPath: "/pakt/unternehmen-und-stiftungen/hacker-school/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/vdi-vde-innovation-technik-gmb-h-vdi-vde-it/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/e-c-s-systems-and-software-solution-gmb-h-and-co-kg/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/emc-deutschland-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/ghett-omedia-marketing-and-kommunikation/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/hunting-her-hr-partners-kg/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/isios-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/novoluto-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/travis-foundation-g-ug/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/vereine-und-verbaende/berufsmentoring-fuer-schueler-e-v-bildungsinitiative-jump-in-mint/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/cluster/",
    toPath: "/news/cluster/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/wissenschaftseinrichtungen-hochschulen-und-hochschulverbaende/koordinierungsstelle-chancengleichheit-sachsen-co-universitaet-leipzig/",
    toPath: "/pakt/wissenschaftseinrichtungen-hochschulen-und-hochschulverbaende/koordinierungsstelle-chancengleichheit-sachsen",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/freistaat-bayern-vertreten-durch-das-staatsministerium-fuer-wissenschaft-forschung-und-kunst/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/freistaat-sachsen/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/freistaat-thueringen/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/land-baden-wuerttemberg/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/land-berlin/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/land-mecklenburg-vorpommern/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/land-niedersachsen/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/nordrhein-westfalen/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/bundeslaender/rheinland-pfalz/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/koerperschaften-des-oeffentlichen-rechts/bundesamt-fuer-verfassungsschutz/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/koerperschaften-des-oeffentlichen-rechts/landschaftsverband-rheinland-lvr/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/koerperschaften-des-oeffentlichen-rechts/wupperverband/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/elsevier-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/jungvornweg-kinder-und-jugendkommunikation/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/med-engineering/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/orange-yc-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/x-study-se-mit-studieren-de/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/accenture-dienstleistungen-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/actemium-deutschland/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/aixtron-se/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/alstom-deutschland-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/be-one-hamburg-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/birkle-it-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/boge-kompressoren-otto-boge-gmb-h-and-co-kg/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/code-x-gmb-h-internet-und-marketing/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/code-x-gmb-h-internet-und-marketing/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/btc-business-technology-consulting-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/common-solutions-gmb-h-and-co-kg/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/d-s-automotive-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/d-space-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/dream-it-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/einstieg-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/eltromat-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/eucon-group/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/fdm-group-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/frimo-group-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/gerhard-roesch-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/gf-k-se/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/goodgame-studios/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/gpdm-mb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/hdo-druckguss-und-oberflaechentechnik-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/hmg-systems-engineering-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/incony-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/integ-g-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/it-s-owl-clustermanagement-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/jonas-and-redmann-group-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/mediaprint-solutions-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/mgm-technology-partners-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/mps-bildung-und-forschung-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/national-instruments-germany-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/oase-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/phoenix-contact-deutschland-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/pro-wirtschaft-gt-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/run-kom-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/security-division-und-ntt-ltd/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/sim-and-learn/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/stadtwerke-guetersloh-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/te-connectivity-germany-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/team-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/vereine-und-verbaende/architektinnen-initiative-nw/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/vereine-und-verbaende/initiative-fuer-beschaeftigung-owl-e-v/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/kooperationen/min-tmagie/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/kooperationen/mint-zukunft-schaffen/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/forschungsorganisationen-und-forschungsverbuende/deutsche-physikalische-gesellschaft-e-v-dpg/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/brigitte/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/die-zeit/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/medien/emotion-das-frauenmagazin/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/adidas-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/ask-a-woman-com-ug/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/audi-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/carl-zeiss-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/deutsche-telekom-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/deutsches-zentrum-fuer-hochschul-und-wissenschaftsforschung-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/e-on/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/ergo-group-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/hewlett-packard-enterprise-hpe/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/ibm-deutschland-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/jugend-denkt-zukunft-ifok-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/microsoft-deutschland-gmb-h/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/osram/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/volkswagen-ag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/unternehmen-und-stiftungen/wayfair-stores-ltd/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/vereine-und-verbaende/bundesarbeitsgemeinschaft-der-kommunalen-frauenbueros-und-gleichstellungsstellen-bag/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/vereine-und-verbaende/business-and-professional-women-germany-e-v-bpw/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/vereine-und-verbaende/fab-lab-region-nuernberg-e-v/",
    toPath: "/projects/mint-buendnis/",
    redirectInBrowser: true,
    isPermanent: true,
  });
  createRedirect({
    fromPath: "/pakt/wissenschaftseinrichtungen-hochschulen-und-hochschulverbaende/ha-wtech-hochschul-allianz-fuer-angewandte-wissenschaften/",
    toPath: "/projects/mint-buendnis/",
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
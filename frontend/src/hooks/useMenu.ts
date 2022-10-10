import { useStaticQuery, graphql } from "gatsby";

export type MenuItem = {
  title: string;
  description?: string;
  url: string;
  image?: GatsbyTypes.ImageSharp["gatsbyImageData"];
};

export type MainMenu = MenuItem & {
  items: MenuItem[];
  teaser: MenuItem[];
};

export type MegaMenu = {
  menu: MainMenu[];
  teasers: MenuItem[];
};

function buildMenuItemFromMenu(node: GatsbyTypes.WpWebsiteMenu): MenuItem {
  return {
    title: node.title ?? "",
    description: node.menuInformations?.description ?? "",
    url: node.menuInformations?.url ?? "",
    image:
      node.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
  };
}

function filterByParentIdAndType(
  menuItems: GatsbyTypes.MegaMenuQuery["menuItems"],
  parentId: string | null,
  type: "menu" | "teaser" | "globalteaser"
) {
  return menuItems.edges.filter(({ node }) => {
    const connectedNode = node.connectedNode
      ?.node as unknown as GatsbyTypes.WpWebsiteMenu;

    return (
      node.parentId === parentId &&
      connectedNode.menuInformations?.menutype === type
    );
  });
}

export const useMenu = (): MegaMenu => {
  const { menuItems, globalTeasers } =
    useStaticQuery<GatsbyTypes.MegaMenuQuery>(
      graphql`
        query MegaMenu {
          menuItems: allWpMenuItem(sort: { fields: order, order: ASC }) {
            edges {
              node {
                id
                parentId
                connectedNode {
                  node {
                    __typename
                    id
                    ... on WpWebsiteMenu {
                      id
                      title
                      menuInformations {
                        menutype
                        url
                        description
                      }
                      featuredImage {
                        node {
                          localFile {
                            childImageSharp {
                              gatsbyImageData(width: 100)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          globalTeasers: allWpWebsiteMenu(
            filter: { menuInformations: { menutype: { eq: "globalteaser" } } }
            sort: { fields: menuOrder, order: ASC }
          ) {
            edges {
              node {
                id
                menuInformations {
                  url
                  description
                }
                title
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 100)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    );

  const firstLevel = filterByParentIdAndType(menuItems, null, "menu");

  const menu: MainMenu[] = firstLevel.map(({ node }) => {
    const menuItem = buildMenuItemFromMenu(
      node.connectedNode?.node as unknown as GatsbyTypes.WpWebsiteMenu
    );
    return {
      ...menuItem,
      items: filterByParentIdAndType(menuItems, node.id, "menu").map(
        ({ node }) => {
          return buildMenuItemFromMenu(
            node.connectedNode?.node as unknown as GatsbyTypes.WpWebsiteMenu
          );
        }
      ),
      teaser: filterByParentIdAndType(menuItems, node.id, "teaser").map(
        ({ node }) => {
          return buildMenuItemFromMenu(
            node.connectedNode?.node as unknown as GatsbyTypes.WpWebsiteMenu
          );
        }
      ),
    };
  });

  return {
    menu: menu,
    teasers: globalTeasers.edges.map(({ node }) =>
      buildMenuItemFromMenu(node as unknown as GatsbyTypes.WpWebsiteMenu)
    ),
  };
};

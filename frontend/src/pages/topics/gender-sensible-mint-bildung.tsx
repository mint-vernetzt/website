import { graphql } from "gatsby";
import { H1 } from "../../components/Heading/Heading";

export function GenderSensibleMintBildung(
  data: GatsbyTypes.GenderSensibleMintBildungPageQuery
) {
  return <H1 like="h0">Didaktik</H1>;
}

export default GenderSensibleMintBildung;

export const pageQuery = graphql`
  query GenderSensibleMintBildungPage {
    heroImage: file(relativePath: { eq: "hero_gender.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    bildungsforschungImage: file(
      relativePath: { eq: "mint-bildungsforschung.jpg" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    paktImage: file(relativePath: { eq: "teaser_pakt.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    befragungImage: file(relativePath: { eq: "gender_befragung.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    vernetzungImage: file(relativePath: { eq: "gender_vernetzung.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    transferImage: file(relativePath: { eq: "gender_transfer.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    news: allWpNewsItem(
      limit: 3
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "gender" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
      }
    }
    events: allWpEvent(
      limit: 3
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "gender" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        excerpt
        slug
        title
        date
      }
    }
  }
`;

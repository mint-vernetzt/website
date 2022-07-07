import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { H1 } from "../components/Heading/Heading";

/* eslint-disable-next-line */
export interface TermsOfUseProps {}

export function TermsOfUseCommunityPlatform({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.termsOfUsePage.title}`}
        slug={`${data.termsOfUsePage.slug}`}
        children={""}
        image=""
        description=""
      />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <H1>{data.termsOfUsePage.title}</H1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: data.termsOfUsePage.content }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TermsOfUseCommunityPlatformPage {
    termsOfUsePage: wpPage(slug: { eq: "terms-of-use-community-platform" }) {
      content
      title
      slug
    }
  }
`;

export default TermsOfUseCommunityPlatform;

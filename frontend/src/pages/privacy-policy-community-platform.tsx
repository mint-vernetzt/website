import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { H1 } from "../components/Heading/Heading";

/* eslint-disable-next-line */
export interface PrivacyProps {}

export function PrivacyPolicyCommunityPlatform({
  data,
}: {
  data: GatsbyTypes.PrivacyPolicyCommunityPlatformPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title={data.privacyPage?.title || ""}
        slug={data.privacyPage?.slug || ""}
        children={""}
        image=""
        description=""
      />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <H1>{data.privacyPage?.title || ""}</H1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: data.privacyPage?.content || "" }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PrivacyPolicyCommunityPlatformPage {
    privacyPage: wpPage(slug: { eq: "privacy-policy-community-platform" }) {
      content
      title
      slug
    }
  }
`;

export default PrivacyPolicyCommunityPlatform;

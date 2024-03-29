import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { H1 } from "../components/Heading/Heading";

export function PrivacyPolicy({
  data,
}: {
  data: GatsbyTypes.PrivacyPolicyPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title={data.privacyPolicyPage?.title || ""}
        slug={data.privacyPolicyPage?.slug || ""}
        children={""}
        image=""
        description=""
      />
      <section className="hero container my-8 md:my-10 lg:my-20">
        <H1>{data.privacyPolicyPage?.title || ""}</H1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{
            __html: data.privacyPolicyPage?.content || "",
          }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PrivacyPolicyPage {
    privacyPolicyPage: wpPage(slug: { eq: "privacy-policy" }) {
      content
      title
      slug
    }
  }
`;

export default PrivacyPolicy;

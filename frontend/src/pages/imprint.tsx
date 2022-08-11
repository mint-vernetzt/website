import { graphql } from "gatsby";
import { H1, H2, H3 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export function Imprint({ data }: { data: GatsbyTypes.ImprintPageQuery }) {
  return (
    <Layout>
      <SEO
        title={data.imprintPage?.title || ""}
        slug={data.imprintPage?.slug || ""}
        image=""
        description="Impressum"
        children={""}
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <H1>{data.imprintPage?.title || ""}</H1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: data.imprintPage?.content || "" }}
        />
      </section>
    </Layout>
  );
}

export const imprintPageQuery = graphql`
  query ImprintPage {
    imprintPage: wpPage(slug: { eq: "imprint" }) {
      content
      title
      slug
    }
  }
`;

export default Imprint;

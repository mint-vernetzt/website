import { graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Icon, { IconType } from "../components/Icon/Icon";
import { H1 } from "../components/Heading/Heading";
import Testimonial from "../components/Testimonial/Testimonial";

const htmlWithAllLinksTargetBlank = (html: string) =>
  html.replace(
    /(<a [^>]*)(>)/gi,
    '$1 rel="noopener noreferrer" target="_blank"$2'
  );

export default function PaktPartner({
  data,
}: {
  data: GatsbyTypes.PaktPartnerQuery;
}) {
  const { partner } = data;
  if (!partner) {
    return null;
  }

  const hasCite =
    partner.partnerInformations?.citeauthor !== null &&
    partner.partnerInformations?.citequote !== null;

  return (
    <Layout>
      <SEO
        title={`Partner: ${partner.title}`}
        slug={`/pakt/${partner.slug}`}
        description={""}
        image={""}
        children={""}
      />
      <section className="container py-8">
        <a
          className="inline-block border border-neutral-400 py-3 px-4 mb-4 text-neutral-800 text-semibold uppercase rounded-lg"
          href={`/projects/mint-buendnis/list`}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            zur Übersicht
          </span>
        </a>

        <div className="flex flex-wrap items-center md:-mx-4 lg:-mx-6 ">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-2">
            {partner.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData && (
              <GatsbyImage
                image={
                  partner.featuredImage.node?.localFile?.childImageSharp
                    ?.gatsbyImageData
                }
                alt={partner.title ?? ""}
              />
            )}
          </div>
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <H1>{partner.title}</H1>
          </div>
        </div>

        <div className="flex flex-wrap md:-mx-4 lg:-mx-6">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-1">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{
                __html: htmlWithAllLinksTargetBlank(partner.content ?? ""),
              }}
            />
          </div>

          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-2">
            {hasCite && (
              <Testimonial
                name={partner.partnerInformations?.citeauthor ?? ""}
                jobTitle={partner.partnerInformations?.citeauthorfunction ?? ""}
                description={
                  partner.partnerInformations?.citeauthorfunction ?? ""
                }
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query PaktPartner($id: String!) {
    partner: wpPartner(id: { eq: $id }) {
      id
      title
      content
      slug
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 600, quality: 100, formats: PNG)
            }
          }
        }
      }
      partnerInformations {
        citeauthor
        citequote
        citeauthorfunction
        institutiontype {
          name
        }
        state {
          id
          name
        }
        fieldGroupName
      }
    }
  }
`;

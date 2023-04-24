import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H3, H5 } from "../../components/Heading/Heading";
import { ReactComponent as HeaderImage } from "../../images/MINTvernetzt_Key_Visual_Diversitaet.svg";
import { getGlossaryItemsByAlphaCategories } from "../../utils/dataTransformer";

export function DiversityGlossar({
  data,
}: {
  data: GatsbyTypes.GlossarPageQuery;
}) {
  React.useEffect(() => {
    // accordeon toggle
    document.querySelectorAll(".glossary").forEach(($glossary) => {
      $glossary.addEventListener("click", (event) => {
        // event.preventDefault();
        document.querySelectorAll(".glossary.active").forEach(($active) => {
          if ($glossary !== $active) {
            $active.classList.remove("active");
          }
        });
        $glossary.classList.toggle("active");
      });
    });
  }, []);

  const glossaryEntriesByCategory = getGlossaryItemsByAlphaCategories(
    [
      { from: "A", to: "F" },
      { from: "G", to: "L" },
      { from: "M", to: "Q" },
      { from: "R", to: "Z" },
    ],
    data.glossaryData.nodes
  );

  const alphaCategories = glossaryEntriesByCategory.map((i) => i.category);

  return (
    <Layout>
      <SEO
        title="Glossar Diversität"
        slug="/topics/diversitaet_glossar"
        description="Begriffe zum Thema verständlich erklärt"
        image={data?.HeroImage?.publicURL}
        children=""
      />

      <section className="bg-lilac-50 relative md:h-[480px] md:flex md:items-center overflow-hidden">
        <div className="container pt-16 pb-12">
          <div className="md:w-1/2 md:pr-8">
            <H1 like="h0" className="font-black">
              Diversität
            </H1>
            <p className="font-semibold text-primary lg:text-3xl lg:leading-snug">
              Begriffe zum Thema verständlich erklärt
            </p>
          </div>
        </div>

        <div className="hero-image md:absolute md:right-0 md:bottom-0 md:w-1/2">
          <div className="max-w-xs md:max-w-none mx-auto md:mx-0">
            <HeaderImage />
          </div>
          <div className="absolute right-0 bottom-0">
            <div
              className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700"
              style={{ writingMode: "vertical-rl" }}
            >
              iStock / cienpies
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="flex justify-center -mx-4">
            <div className="lg:w-6/12 px-4">
              <p className="text-3xl leading-snug text-primary font-semibold">
                Ableismus, Intersektionalität, Klassismus, kulturelles Kapital –
                schonmal gehört?! In unserem Glossar erklären wir wichtige
                Begriffe zum Thema Diversität, die im Bildungskontext eine Rolle
                spielen (können).
              </p>
              <p className="mt-10 -mx-2">
                {alphaCategories.map((category) => (
                  <a
                    key={category}
                    href={`#${category}`}
                    className="btn-primary m-2"
                  >
                    {category}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {glossaryEntriesByCategory.map((entrysByCategory) => (
        <section
          key={`section${entrysByCategory.category}`}
          id={entrysByCategory.category}
          className="bg-lilac-400 pt-16 lg:pt-24"
        >
          <div className="container">
            <div className="flex justify-center -mx-4">
              <div className="lg:w-6/12 px-4">
                <H3 className="text-white font-bold mb-8">
                  {entrysByCategory.category}
                </H3>
                <ul className="glossary-entries">
                  {entrysByCategory.entries.map((entry) => (
                    <>
                      <li className="glossary relative overflow-hidden mb-8">
                        <button className="font-bold text-primary md:text-lg md:leading-snug px-8 py-4 flex items-center justify-between bg-white w-full rounded-lg hover:bg-primary hover:text-white">
                          {entry.frontmatter?.title}
                        </button>
                        <div className="glossary-content max-h-0 overflow-hidden transition-all ease-in-out duration-300">
                          <div className="glossary-content-body">
                            <div
                              dangerouslySetInnerHTML={{ __html: entry.html }}
                            />
                            {entry.frontmatter?.links?.length > 0 && (
                              <div className="mt-8">
                                <p className="mb-4 font-bold">
                                  Zum Weiterlesen:
                                </p>
                                <ul className="list-disc list-outside leading-6 mb-6 pl-5">
                                  {entry.frontmatter?.links?.map((link) => (
                                    <li>
                                      {link?.author}:{" "}
                                      <a
                                        href={link?.url}
                                        target="_blank"
                                        className="font-bold text-secondary"
                                      >
                                        {link?.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}

export default DiversityGlossar;

export const pageQuery = graphql`
  query GlossarPage {
    HeroImage: file(
      relativePath: { eq: "MINTvernetzt_Key_Visual_Diversitaet.svg" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    StudyImage: file(
      relativePath: {
        eq: "topic-diversity/Studie_Teaser_Diversitaet_480x480.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    GlossarImage: file(
      relativePath: { eq: "topic-diversity/Glossar_Teaser_480x480.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }
    glossaryData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "diversity/glossary/" } }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      nodes {
        frontmatter {
          title
          links {
            author
            title
            url
          }
        }
        html
      }
    }
  }
`;

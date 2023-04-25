import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H3, H5 } from "../../components/Heading/Heading";
import { ReactComponent as HeaderImage } from "../../images/MINTvernetzt_Key_Visual_Diversitaet.svg";
import { getGlossaryItemsByAlphaCategories } from "../../utils/dataTransformer";
import Icon, { IconType } from "../../components/Icon/Icon";

export function DiversityGlossar({
  data,
}: {
  data: GatsbyTypes.GlossarPageQuery;
}) {
  React.useEffect(() => {
    // accordeon toggle
    document.querySelectorAll(".glossary button").forEach(($glossary) => {
      $glossary.addEventListener("click", (event) => {
        // event.preventDefault();
        document.querySelectorAll(".glossary button.active").forEach(($active) => {
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

      <section className="bg-lilac-50 relative overflow-hidden">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-yellow-500">
          <svg width="809" height="695" viewBox="0 0 809 695" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute mt-[60%] md:mt-0 left-[5%] md:left-[42%] w-[90%] md:w-[60%] h-[80%] md:h-[110%] xl:h-[150%] rotate-[-0deg]">
            <path d="M637.862 91.3002C973.1 223.765 753.674 722.111 463.915 691.176C333.039 677.203 358.384 619.535 269.807 558.208C142.414 470.005 -137.123 467.055 85.5645 142.115C105.425 113.135 174.794 49.354 206.917 30.1026C276.347 -11.5078 359.242 -18.7927 637.862 91.3002Z" stroke="currentColor" stroke-width="3"/>
          </svg>
        </div>
        <div className="container pt-8 pb-4 md:pb-12 relative z-20">
          <div className="">
            <a
              className="inline-block border border-primary py-2 px-4 text-primary font-semibold rounded-lg text-sm leading-[22px]"
              href="/topics/diversitaet/"
            >
              <span className="flex items-center">
                <span className="mr-2">
                  <Icon type={IconType.ChevronLeft} />
                </span>
                zur Übersicht
              </span>
            </a>
          </div>  
          <div className="-mx-4 mt-8 md:-mt-[24px] md:flex md:items-center">               
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-1/2 lg:w-5/12 px-4 mb-8 md:mb-0">
              <H1 like="h0" className="font-black">
                Glossar Diversität
              </H1>
              <p className="font-semibold text-primary lg:text-3xl lg:leading-snug">
                Begriffe zum Thema verständlich erklärt
              </p>
            </div>
            
            {data.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
              <div className="hero-image md:w-1/2 px-4">
                <div className="relative">              
                  <GatsbyImage
                    image={data.HeroImage.childImageSharp.gatsbyImageData}
                    className="w-full h-auto aspect-[16/9]"
                    alt="Didaktik: Themenseite mit Erkenntnissen aus Wissenschaft und Praxis"
                  />  
                  <div className="absolute right-0 bottom-0">
                    <div
                      className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      Unsplash/ Surendran MP
                    </div>
                  </div>        
                </div>                
              </div>  
            ) : null}               
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

      <section className="bg-lilac-400 pb-12 pt-4 lg:pt-12 lg:pb-20 -mb-20">
        <div className="container">
          <div className="flex justify-center -mx-4">
            <div className="lg:w-6/12 px-4">
              {glossaryEntriesByCategory.map((entrysByCategory) => (
                <div
                  key={`section${entrysByCategory.category}`}
                  id={entrysByCategory.category}
                  className="mt-12"
                >
          
                  <H3 className="text-white font-bold mb-8">
                    {entrysByCategory.category}
                  </H3>
                  <ul className="glossary-entries">
                    {entrysByCategory.entries.map((entry) => (
                      <>
                        <li className="glossary relative overflow-hidden mb-8">
                          <button className="font-bold text-primary md:text-lg md:leading-snug p-4 md:px-8 flex items-center justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white">
                            <span>{entry.frontmatter?.title}</span>
                            <span className="glossary-button-icon transition-all ease-in-out duration-0 delay-0 rotate-0">                              
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-3" viewBox="0 0 8 12">
                                <path fill="currentColor" fill-rule="evenodd" d="M7.3 6a.626.626 0 0 0-.23-.49L1.93.9a.722.722 0 0 0-.24-.14.857.857 0 0 0-.27-.05c-.09 0-.18.02-.27.05C1.06.79.98.84.91.9c-.07.06-.13.14-.16.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22L5.5 6 .91 10.12c-.07.06-.13.14-.17.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22.07.06.15.11.23.14.09.03.18.05.27.05.09 0 .18-.02.27-.05.09-.03.17-.08.23-.14l5.14-4.61c.07-.06.13-.14.17-.22A.66.66 0 0 0 7.27 6h.03Z"/>
                              </svg>                              
                            </span>
                          </button>
                          <div className="glossary-content max-h-0 p-0 overflow-hidden transition-all ease-in-out delay-0 duration-150 px-4 md:px-8 bg-white rounded-b-lg">
                            <div className="glossary-content-body md:text-lg">
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
              ))}  
            </div>
          </div>
        </div>
      </section>      
    </Layout>
  );
}

export default DiversityGlossar;

export const pageQuery = graphql`
  query GlossarPage {
    HeroImage: file(
      relativePath: { eq: "topic-diversity/Glossar_Stage_1280x720.jpg" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1280)
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

import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H3, H5 } from "../../components/Heading/Heading";
import { ReactComponent as HeaderImage } from "../../images/MINTvernetzt_Key_Visual_Diversitaet.svg";

export function DiversityGlossar({ data }) {
  React.useEffect(() => {
    // accordeon toggle
    document.querySelectorAll(".glossary").forEach(($glossary) => {
      $glossary.addEventListener("click", (event) => {
        // event.preventDefault();
        document
          .querySelectorAll(".glossary.active")
          .forEach(($active) => {
            if ($glossary !== $active) {
              $active.classList.remove("active");
            }
          });
        $glossary.classList.toggle("active");
      });
    });
  }, []);

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
            <H1 like="h0" className="font-black">Diversität</H1>
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
            <div className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700" style={{ writingMode: 'vertical-rl' }}>iStock / cienpies</div>
          </div>
        </div>

      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="flex justify-center -mx-4">
            <div className="lg:w-6/12 px-4">
              <p className="text-3xl leading-snug text-primary font-semibold">
                Ableismus, Intersektionalität, Klassismus, kulturelles Kapital – schonmal gehört?!
                In unserem Glossar erklären wir wichtige Begriffe zum Thema Diversität, die im
                Bildungskontext eine Rolle spielen (können).
              </p>
              <p className="mt-10 -mx-2">
                <a href="#a-f" className="btn-primary m-2">
                  A - F
                </a>
                <a href="#g-l" className="btn-primary m-2">
                  G - L
                </a>
                <a href="#m-q" className="btn-primary m-2">
                  M - Q
                </a>
                <a href="#r-z" className="btn-primary m-2">
                  R - Z
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>




      <section id="a-f" className="bg-lilac-400 pt-16 lg:pt-24">
        <div className="container">
          <div className="flex justify-center -mx-4">
            <div className="lg:w-6/12 px-4">
              <H3 className="text-white font-bold mb-8">
                A - F
              </H3>
              {/*
              <ul className="glossary-entries">
                {[
                  {
                    title: `Ableismus`,
                    description: (
                      <p>
                        beschreibt die Diskriminierung von Menschen mit Behinderungen, Beeinträchtigungen und chronischen Erkrankungen, 
                        sowohl körperlich als auch geistig. Nicht alle Behinderungen sind sichtbar. 
                      </p>  
                    ),            
                    more: (
                      <ul className="list-disc list-outside leading-6 mb-6 pl-5">
                        <li>Amadeu Antonio Stiftung:{" "}
                          <a href="https://www.amadeu-antonio-stiftung.de/publikationen/abwertung-von-menschen-mit-behinderung/" 
                          target="_blank" className="font-bold text-secondary">Abwertung 
                          von Menschen mit Behinderung</a></li>
                        <li>Deutsches Institut für Menschenrechte:{" "}
                          <a href="https://www.institut-fuer-menschenrechte.de/themen/rechte-von-menschen-mit-behinderungen" 
                          target="_blank" className="font-bold text-secondary">Rechte 
                          von Menschen mit Behinderungen</a></li>
                      </ul>  
                    ),        
                  },      
                  {
                    title: `Ally/Allyship`,
                    description: (
                      <p>
                        Der englische Begriff Allyship bedeutet übersetzt Verbündete. Ein:e Ally ist daher so viel wie ein:e Partner:in 
                        oder auch Verbündete:r. Die Begriffe werden unter anderem im Aktivismus verwendet: Ein:e Ally unterstützt eine 
                        diskriminierte Gruppe, ohne selbst betroffen zu sein. Es geht nicht um Mitleid oder Verständnis, sondern um 
                        den aktiven Einsatz und Engagement gegen ungleiche Machtverteilung. Doch Allyship steht teilweise auch in der 
                        Kritik, da Menschen dabei in eine Art Opfer-und-Retter-Konstellation eingeteilt werden. 
                      </p>  
                    ),            
                    more: (
                      <ul className="list-disc list-outside leading-6 mb-6 pl-5">
                        <li>Bundesministerium für Arbeit und Soziales:{" "}
                          <a href="https://www.inqa.de/DE/wissen/diversity/diversitaetsmanagement/allyship-diversity-konferenz/allyship-netzwerkstelle-unternehmen-diversity-nrw_artikel.html" 
                          target="_blank" className="font-bold text-secondary">Allyship findet nicht im Stillen statt</a></li>
                        <li>Deutschlandfunk Kultur:{" "}
                          <a href="https://www.deutschlandfunkkultur.de/kritik-konzept-allyship-100.html" 
                          target="_blank" className="font-bold text-secondary">Das Unbehagen am Konzept „Allyship“ – 
                          „Tue Gutes und rede darüber“ </a></li>
                      </ul>  
                    ),        
                  },             
                ].map((glossaraf, index) => (                  
                  <li
                    key={`glossar-af-${index}`}
                    className="glossary relative overflow-hidden mb-8"
                  >
                    <button className="font-bold text-primary md:text-lg md:leading-snug px-8 py-4 flex items-center justify-between bg-white w-full rounded-lg hover:bg-primary hover:text-white">
                      <span>{glossaraf.title}</span>
                      <span className="">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.02569 6.26897L7.02568 6.26896C6.97128 6.22013 6.92715 6.16127 6.89668 6.09526C6.86619 6.0292 6.85022 5.95771 6.85022 5.88506C6.85022 5.8124 6.86619 5.74092 6.89668 5.67485C6.92715 5.60884 6.97128 5.54998 7.02568 5.50115C7.08006 5.45235 7.14375 5.41438 7.21278 5.38871C7.28181 5.36305 7.35531 5.35 7.42923 5.35C7.50314 5.35 7.57665 5.36305 7.64567 5.38871C7.7147 5.41438 7.7784 5.45235 7.83277 5.50115L12.9742 10.1159L12.9743 10.116L12.8741 10.2276C12.914 10.2633 12.9457 10.3058 12.9673 10.3525C12.9889 10.3992 13 10.4493 13 10.4999C13 10.5505 12.9889 10.6006 12.9673 10.6473C12.9457 10.694 12.914 10.7365 12.8741 10.7722L7.02569 6.26897ZM7.02569 6.26897L11.7403 10.4999M7.02569 6.26897L11.7403 10.4999M11.7403 10.4999L7.02582 14.7307C7.02579 14.7307 7.02576 14.7308 7.02573 14.7308L7.02569 14.7308L11.7403 10.4999Z" fill="#143E8D" stroke="#143E8D" stroke-width="0.3"/>
                        </svg>
                      </span>
                    </button>
                    <div className="glossary-content max-h-0 overflow-hidden transition-all ease-in-out duration-300">
                      <div className="glossary-content-body">
                        <div className="">
                          {glossaraf.description}  
                        </div>
                        {glossaraf.more ? (
                          <div className="mt-8">
                            <p className="mb-4 font-bold">Zum Weiterlesen:</p>
                            {glossaraf.more}
                          </div>
                        ) : null}    
                      </div>
                    </div>                      
                  </li>                  
                ))}
              </ul>
                        */}
                        
              <ul className="glossary-entries">
                {data.glossaryData?.nodes?.map(item => (
                  <>
                    <li className="glossary relative overflow-hidden mb-8">
                      <button className="font-bold text-primary md:text-lg md:leading-snug px-8 py-4 flex items-center justify-between bg-white w-full rounded-lg hover:bg-primary hover:text-white">{item.frontmatter?.title}</button>
                      <div className="glossary-content max-h-0 overflow-hidden transition-all ease-in-out duration-300">
                        <div className="glossary-content-body">
                          <div dangerouslySetInnerHTML={{ __html: item.html }} />
                          {item.frontmatter?.links?.length > 0 && (
                            <div className="mt-8">
                              <p className="mb-4 font-bold">Zum Weiterlesen:</p>
                              <ul className="list-disc list-outside leading-6 mb-6 pl-5">
                                {item.frontmatter?.links?.map(link => (
                                  <li>
                                    {link?.author}: <a href={link?.url} target="_blank" className="font-bold text-secondary">{link?.title}</a>
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
      <section id="g-l" className="bg-lilac-400 pt-4 pb-20 -mb-20">
        <div className="container">
          <div className="flex justify-center -mx-4">
            <div className="lg:w-6/12 px-4">
              <H3 className="text-white font-bold">
                G - L
              </H3>
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
    HeroImage: file(relativePath: { eq: "MINTvernetzt_Key_Visual_Diversitaet.svg" }) {
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
      relativePath: {
        eq: "topic-diversity/Glossar_Teaser_480x480.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 480)
      }
    }        
    glossaryData: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "diversity/glossary/"}}
      sort: {order: ASC, fields: frontmatter___title}
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

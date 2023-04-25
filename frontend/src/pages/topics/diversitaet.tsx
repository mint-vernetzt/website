import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2 } from "../../components/Heading/Heading";
import { isBeforeOneDayAfterDate } from "../../utils/eventFilter";

import ProjectSwiper from "../../components/ProjectSwiper";
import { getNewsItems } from "../../utils/dataTransformer";
import NewsSwiper from "../../components/NewsSwiper/NewsSwiper";
import { ReactComponent as HeaderImage } from "../../images/MINTvernetzt_Key_Visual_Diversitaet.svg";
import EventCards from "../../components/EventCards/EventCards";

export function Diversity({
  data,
}: {
  data: GatsbyTypes.DiversityPageQuery;
}) {

  const now = new Date();
  const newsItems = getNewsItems(data.news).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });
  const events = data.events.nodes
    .filter((event) =>
      isBeforeOneDayAfterDate(now, new Date(event.eventInformations.endDate))
    )
    .map((event) => {

      return {
      headline: event?.title ?? 'NO HEADLINE SET',
      body: (
        <span
          dangerouslySetInnerHTML={{
            __html: (event?.excerpt ?? '').replace(/<[^>]*>/g, "").substr(0, 250),
          }}
        />
      ),
      date: new Date(event?.eventInformations?.startDate ?? ''),
      url: `/event/${event.slug}/`,
      slug: event.slug,
      image: (        
        <GatsbyImage image={event?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData ?? data?.StudyImage?.childImageSharp?.gatsbyImageData} className="w-full h-auto aspect-[16/9]" alt="" />
      ),
      tags: event?.tags?.nodes?.map(tag => ({title: tag?.name, slug: tag?.slug}))
      
    }})
    ;

    const projectslides =
    [
      {
        /*logo: (
          <GatsbyImage
            image={data.StudyImage.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),
        */
        title: `Little Lab`,
        projectinfo: (
          <p>
            Little Lab setzt sich dafür ein allen Kindern Naturwissenschaften, Technik und Informatik in 
            kreativen, lustigen und praktischen Experimenten nahe zu bringen. Insbesondere spricht
            Little Lab Kinder an, die aus unterschiedlichen Gründen einen weiteren Weg zu guter Bildung 
            haben – mit dem Ziel, dass alle Kinder die MINT-Fächer nicht nur verstehen, sondern auch lieben. 
          </p>  
        ),            
        projectproblems: (
          <ul>
            <li>Die Zielgruppe – Kinder im Kita- und Grundschulalter vor allem aus benachteiligten Milieus – 
              um Jugendliche aus gleichen Milieus erweitern. Sie nehmen kaum offene außerschulische Angebote 
              in ihrer Freizeit wahr.</li>
          </ul>  
        ),
        communityvalue: (
          <ul>
            <li>Kooperationen mit Ganztagsschulen: Schul-AGs, Projekte außerhalb der Schule, aber mit Anmeldung für Gruppen.</li>
            <li>Kooperationen mit Jugendtreffs.</li>
            <li>Leichte Sprache in der Kommunikation der Angebote.</li>
            <li>Angebote und Inhalte, die an die Zielgruppen angepasst sind (selbst machbar, kreativ, alltagsbezogen).</li>
            <li>Dauerhafte Präsenz, Zuverlässigkeit, Offenheit, Beziehungsarbeit.</li>
          </ul>  
        ),
        networklink: `https://community.mint-vernetzt.de/profile/agnieszkaspizewska`,
        projectlink: `https://www.little-lab.de/verein/`,
      }, 
      {
        title: `Schülerforschungszentrum Nordhausen`,
        projectinfo: (
          <p>
            Das Schülerforschungszentrum Nordhausen schafft außerschulische MINT-Bildungsangebote 
            in der Region Nordthüringen. Dabei ist dem Team besonders wichtig, dass alle Kinder 
            und Jugendlichen, die sich für MINT-Themen interessieren, an den Angeboten teilnehmen 
            können. 
          </p>  
        ),            
        projectproblems: (
          <ul>
            <li>Barrierefreie Lernorte und Lernmaterialien.</li>
            <li>Das negative Klischeebild der MINT-Fächer.</li>
            <li>Diverse Vorbilder finden und integrieren.</li>
          </ul>  
        ),
        communityvalue: (
          <ul>
            <li>Überarbeitung von niedrigschwelligen Experimenten im Projekt „Inklusiver Forschernachmittag". 
              Dabei wurde darauf geachtet, dass Anleitungen in einfacher Sprache bebildert sind und 
              Materialien für motorische Einschränkungen sowie barrierefreie Räumlichkeiten bereitgestellt 
              sind.</li>
            <li>Zusammenarbeit mit Studierenden der Heilpädagogik.</li>
            <li>Enge Zusammenarbeit mit dem Inklusionsnetzwerk Nordhausen und der offenen Jugendarbeit. 
              Tipp: Netzwerke und Partner:innen suchen, die unterstützen können und an Kooperationen 
              interessiert sind. </li>
          </ul>  
        ),
        networklink: `https://community.mint-vernetzt.de/profile/josephineroehner`,
        projectlink: `https://www.hs-nordhausen.de/forschung/schuelerforschungszentrum/`,
      },   
      {
        title: `meerMINT`,
        projectinfo: (
          <p>
            meerMINT ist ein Projekt, in dem MINT für Kinder und Jugendlichen zwischen 
            10 und 16 Jahren in Bremen und Bremerhaven erlebbar wird. Es wird gemeinsam 
            getüftelt, programmiert, geforscht, experimentiert und gebastelt. meerMINT 
            ist eins von 53 regionalen MINT-Clustern, die aktuell vom Bundesministerium 
            für Bildung und Forschung (BMBF) gefördert werden.
          </p>  
        ),            
        projectproblems: (
          <ul>
            <li>Erreichbarkeit einer diversen Zielgruppe geht nur langsam voran, bildungsnahe Familien kommen am ehesten.</li>
            <li>Räume sind nicht barrierefrei und schwierig umzubauen.</li>
            <li>Sprachliche Barrieren bleiben, auch wenn bereits einige Mitarbeitende mit verschiedenen 
              Sprachkenntnissen vor Ort arbeiten.</li>
          </ul>  
        ),
        communityvalue: (
          <ul>
            <li>meerMINT geht mit den Angeboten dorthin, wo die jungen Menschen sind, insbesondere 
              Mädchen-/Jugendtreffs und Stadtteilbibliotheken, dies bringt das Projekt näher an die Zielgruppe.</li>
            <li>meerMINT versucht, auch andere Sprachen über die Mitarbeitenden in die Veranstaltungen 
              zu bringen z.B. über internationale Studierende.</li>
          </ul>  
        ),
        networklink: `https://community.mint-vernetzt.de/profile/hanneballhausen`,
        projectlink: `https://www.meermint.de/ `,
      },               
  ];

  return (
    <Layout>
      <SEO
        title="Diversität"
        slug="/topics/diversitaet/"
        description="Themenseite mit Erkenntnissen aus Wissenschaft und Praxis"
        image={data?.HeroImage?.publicURL}
        children=""
      />      
      <section className="bg-lilac-50 relative md:h-[480px] md:flex md:items-center overflow-hidden">
        <div className="container pt-16 pb-12">          
          <div className="-mx-4 flex">          
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-5/12 px-4 md:pr-8">            
              <H1 like="h0" className="font-black">Diversität</H1>
              <p className="font-semibold text-primary text-lg lg:text-3xl lg:leading-snug">
                Themenseite mit Erkenntnissen aus Wissenschaft und Praxis
              </p>            
            </div>
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
        <div className="container flex justify-center">
          <div className="lg:w-10/12">
            <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">MINT und Diversität</H2>
            <p className="text-3xl leading-snug text-primary font-semibold">
              Wir brauchen <span className="bg-lilac-200">mehr Diversität in der MINT-Bildung</span> – aber wie stellen wir das an? 
              Auf dieser Themenseite bündeln wir für Euch Beiträge und Veranstaltungen mit Tipps 
              und Hintergrundwissen, damit sich zukünftig <span className="bg-lilac-200">alle Kinder und Jugendliche von 
              MINT-Bildungsprojekten gleichermaßen angesprochen fühlen.</span>
            </p>  
          </div>  
        </div>   
      </section>      
      
      {data.news.nodes.length > 0 && (
        <section className="bg-lilac-400 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container">            
            <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold text-white">Aktuelle News</H2>            
            <div className="">
              <NewsSwiper
                newsSwiperItemsProps={newsItems}                  
              />              
            </div>            
          </div>   
        </section>     
      )}

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 784 649" className="absolute left-[50%] w-[70%] rotate-[-0deg] aspect-[1.2]">
            <path stroke="currentColor" stroke-width="3" d="M173.132 566.549C-155.751 445.81 42.189-23.058 323.981 3.049 451.258 14.84 428.398 69.097 516.076 125.654c126.1 81.342 397.154 81.342 190.917 387.849-18.394 27.336-83.747 87.752-114.315 106.098-66.069 39.654-146.207 47.296-419.546-53.052Z"/>
          </svg>
        </div>
        <div className="container relative z-20">          
          <div className="md:flex md:items-center md:justify-center -mx-4">
            <div className="md:w-4/12 px-4 mb-8 md:mb-0">
              <H2 className="mb-6 font-bold">Chance Diversität</H2>
              <p className="text-xl leading-snug text-neutral-700">
                In ihrer Keynote "MINT, Diversität und Chancengleichheit" spricht Janina Kugel darüber, was Diversität 
                im eigenen Erleben bedeutet. Und warum wir vielfältige Perspektiven benötigen, um Wohlstand und 
                Innovation in Deutschland zu erhalten.
              </p>
            </div>  
            <div className="md:w-8/12 xl:w-6/12 px-4">              
              <div
                  id={`keynote-container`}
                  className="bg-blue-500 md:aspect-16/9 flex items-center"
                >
                <iframe
                  id={`keynote-embed`}
                  style={{
                    display: "none",
                    border: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  data-src={`https://www.youtube-nocookie.com/embed/K5oReyP1Jx0?autoplay=1`}
                  title="Live Stream"
                  allowfullscreen="true"
                  allow="autoplay"
                ></iframe>
                <div
                  id={`keynote-optin`}
                  className="flex p-8"
                >
                  <div className="text-center">
                    <h3 className="text-white mb-8 font-bold">
                      Diversity Keynote Jahrestagung
                    </h3>
                    <p className="text-white">
                      Mit dem Klick auf den Button wird ein Youtube-Video
                      geöffnet und Ihr willigt ausdrücklich ein, Inhalte von
                      Youtube angezeigt zu bekommen.
                    </p>
                    <p>
                      <button
                        className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-white text-blue-500 my-2"
                        onClick={() => {
                          const embeddiv = document.querySelector(
                            `#keynote-container`
                          ) as HTMLDivElement;

                          const embed = document.querySelector(
                            `#keynote-embed`
                          ) as HTMLDivElement;
                          if (embed) {
                            embed.setAttribute(
                              "src",
                              embed.dataset?.src ?? ""
                            );
                            embed.style.display = "block";

                            const optIn = document.querySelector(
                              `#keynote-optin`
                            ) as HTMLDivElement;
                            if (optIn) {
                              embeddiv.classList.add("aspect-16/9");
                              optIn.style.display = "none";
                            }
                          }
                        }}
                      >
                        Externen Inhalt anzeigen
                      </button>
                    </p>
                    <p className="text-white mb-0">
                      Beim Abspielen des Videos werden Daten an die Server von
                      Youtube übertragen. Weitere Infos dazu findet Ihr in der{" "}
                      <a
                        href="https://www.google.com/intl/de/policies/privacy/"
                        target="_blank"
                        className="underline underline-offset-1 "
                      >
                        Datenschutzerklärung<br />
                        <span className="break-all">(www.google.com/intl/de/policies/privacy/)</span>
                      </a>
                      .
                    </p>
                  </div>
                </div>                
              </div>              
            </div>  
          </div>          
        </div>   
      </section>  

      {events.length > 0 && (
        <section className="bg-yellow-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container">
            <div className="-mx-4 xl:flex xl:justify-center">
              <div className="xl:w-10/12 px-4">
                <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">Aktuelle Events</H2>            
                <EventCards
                    eventCardItemsProps={events}
                    onChipClick={() => {}}
                />         
              </div>   
            </div>  
          </div>
        </section>  
      )}

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="md:flex md:items-center -mx-4">
            <div className="md:w-6/12 px-4 mb-8 md:mb-0 flex justify-center relative">
              <div className="absolute inset-4 md:inset-0 text-salmon-400 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 655 418">
                  <path fill="currentColor" d="M378.948 11.1C237.002 57.323 38.234 97.368 6.514 153.865c-15.86 28.248-2.345 83.864 66.84 150.371C188.6 415.024 265.997 421.811 342.19 416.529c76.193-5.282 362.284-203.55 304.405-312.815C596.837 9.776 463.628-16.476 378.948 11.1Z"/>
                </svg>
              </div>              
              <div className="relative max-w-[180px] md:max-w-[260px] lg:max-w-[360px] my-8">
                <GatsbyImage
                  image={data?.StudyImage?.childImageSharp?.gatsbyImageData}
                  className=""
                  alt=""
                />
                <div className="absolute right-0 bottom-[-1px]">
                  <div className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700 " style={{ writingMode: 'vertical-rl' }}>Unsplash/ John Schaidler</div>
                </div>
              </div>  
            </div> 
            <div className="lg:w-1/12 px-4"> </div>
            <div className="md:w-6/12 lg:w-4/12 px-4">
              <H2 className="mb-6 font-bold">Studie: Mehr Diversität in der MINT-Bildung</H2>
              <p className="text-xl leading-snug text-neutral-700">
                Diese Studie untersucht, welchen Einfluss die Dimension „Soziale Herkunft“ auf die MINT-Bildung von Kindern und 
                Jugendlichen hat. Sie liefert gleichzeitig konkrete Empfehlungen für die Praxis, um mehr Chancengleichheit 
                zu schaffen.  
              </p>  
              <p>
                <a href="/data/daten-fakten#mint-studie-diversitaet" className="btn-primary">Zur Studie</a>
              </p>  
            </div>  
             
          </div>          
        </div>   
      </section> 

      <section className="bg-beige-500 pt-16 pb-28 lg:pt-24 lg:pb-40 relative">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-salmon-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 784 649" className="absolute w-[100%] rotate-[10deg] aspect-[1.2]">
            <path stroke="currentColor" stroke-width="3" d="M173.132 566.549C-155.751 445.81 42.189-23.058 323.981 3.049 451.258 14.84 428.398 69.097 516.076 125.654c126.1 81.342 397.154 81.342 190.917 387.849-18.394 27.336-83.747 87.752-114.315 106.098-66.069 39.654-146.207 47.296-419.546-53.052Z"/>
          </svg>
        </div>
        <div className="container relative z-20">          
          <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">Tipps aus der Projektarbeit</H2> 
          <div className="text-neutral-700">
            <ProjectSwiper items={projectslides} />
          </div>            
        </div>    
      </section>         
      
      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28 -mb-20">
        <div className="container">
          <div className="md:flex md:items-center -mx-4">
            <div className="hidden lg:flex lg:w-1/12 px-4 ">              
            </div>
            <div className="md:w-6/12 lg:w-4/12 px-4 mb-8 md:mb-0">
              <H2 className="mb-6 font-bold">Glossar Diversität</H2>
              <p className="text-xl leading-snug text-neutral-700">
                Ableismus, Intersektionalität und Klassismus – schonmal gehört?! In unserem Glossar findet 
                Ihr wichtige Begriffe zum Thema Diversität zum Nachlesen. 
              </p>  
              <p className="mb-0">
                <Link to="/topics/diversitaet_glossar" className="btn-primary">Zum Glossar</Link>
              </p>  
            </div>
            <div className="hidden lg:flex lg:w-1/12 px-4">              
            </div>
            <div className="md:w-5/12 px-4 flex justify-center relative">                     
              <div className="absolute inset-0 text-salmon-400 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 270 215">
                  <path fill="#FCC433" d="M.788 101.52c5.95-38.838 66.074-68.85 90.186-78.903l.264-.11C119.315 10.799 154.14-3.723 196.675.87c27.153 2.932 83.398 42.996 71.761 110.422-11.637 67.426-96.976 114.331-177.462 101.628C27.48 202.898-5.636 143.45.788 101.52Z"/>
                </svg>                
              </div>              
              <div className="relative max-w-[180px] md:max-w-[260px] lg:max-w-[360px] my-8">
                <GatsbyImage
                  image={data?.GlossarImage?.childImageSharp?.gatsbyImageData}
                  className=""
                  alt=""
                />
                <div className="absolute right-0 bottom-[-1px]">
                  <div className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700 " style={{ writingMode: 'vertical-rl' }}>Unsplash/ Surendran MP</div>
                </div>
              </div>  
            </div>                                        
          </div>          
        </div>   
      </section> 
    </Layout>
  );
}

export default Diversity;

export const pageQuery = graphql`
  query DiversityPage {
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
    news: allWpNewsItem(limit: 9, filter: {tags: {nodes: {elemMatch: {slug: {eq: "diversitaet"}}}}}) {
      nodes {
        title
        slug
        excerpt
        date
        tags {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 640)
              }
            }
          }
        }
      }
    }    
    events: allWpEvent(
      limit: 3
      filter: { parentId: { eq: null }, tags: {nodes: {elemMatch: {slug: {eq: "diversitaet"}}}}}
      sort: { fields: eventInformations___startDate, order: ASC }
    ) {
      nodes {
        excerpt
        eventInformations {
          startTime
          startDate
          endTime
          endDate
        }
        tags {
          nodes {
            name
            slug
          }
        }
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 640, aspectRatio: 1.77777777778)
              }
            }
          }
        }
      }
    }
  }
`;

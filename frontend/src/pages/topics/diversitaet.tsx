import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H4 } from "../../components/Heading/Heading";
import Icon, { IconType } from "../../components/Icon/Icon";
import { isBeforeOneDayAfterDate } from "../../utils/eventFilter";
import { formatDate } from "../../components/EventFeed/utils";
import ProjectSwiper from "../../components/ProjectSwiper";
import { getNewsItems } from "../../utils/dataTransformer";
import NewsSwiper from "../../components/NewsSwiper/NewsSwiper";

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
    .map((event) => ({
      headline: event.title,
      body: (
        <span
          dangerouslySetInnerHTML={{
            __html: event.excerpt.replace(/<[^>]*>/g, "").substr(0, 250),
          }}
        />
      ),
      date: new Date(event.eventInformations.startDate),
      url: `/event/${event.slug}/`,
    }))
    .slice(0, 3);

    const projectslides =
    [
      {
        logo: (
          <GatsbyImage
            image={data.Dossier1TeaserImage.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),

        title: `Schülerforschungszentrum Nordhausen`,
        projectinfo: (
          <p>
            Das Schülerforschungszentrum Nordhausen ist eines von ca. 100 Schülerforschungszentren deutschlandweit. 
            Wir schaffen außerschulische MINT-Bildungsangebote in der Region Nordthüringen, sowohl niedrigschwellig 
            als auch herausfordernder. Dabei ist uns besonders wichtig, dass jedes Kind/jede:r Jugendliche:r, die 
            sich für MINT-Themen interessieren, an unseren Angeboten teilnehmen können.
          </p>  
        ),            
        projectproblems: (
          <ul>
            <li>Barrierefreie Lernorte und Lernmaterialien (Labore, Programmieroberflächen etc.)</li>
            <li>Klischeebild "MINT ist etwas für die Streber/Nerds/Elite"</li>
            <li>Diverse Vorbilder</li>
          </ul>  
        ),
        communityvalue: (
          <ul>
            <li>Projekt "Inklusiver Forschernachmittag": Barrierefreie Überarbeitung von niedrigschwelligen 
              Experimenten (Anleitungen bebildert in einfacher Sprache, Materialien für motorische Einschränkungen, 
              barrierefreie Räumlichkeiten), Zusammenarbeit mit Studierenden der Heilpädagogik</li>
              <li>Starke Zusammenarbeit mit dem Inklusionsnetzwerk Nordhausen und der offenen Jugendarbeit. Tipp: 
                Sucht euch Netzwerke und Partner:innen, die euch unterstützen können! Ihr bringt MINT mit, jemand 
                anderes vielleicht Heilpädagogik. Die beiden Bereiche schließen sich nicht aus, sondern ergänzen sich!</li>
          </ul>  
        ),
        networklink: `https://community.mint-vernetzt.de/profile/josephineroehner`,
        projectlink: `https://www.hs-nordhausen.de/forschung/schuelerforschungszentrum/`,
      }, 
      {
        logo: (
          <GatsbyImage
            image={data.Dossier1TeaserImage.childImageSharp.gatsbyImageData}
            className="w-full h-auto"
            alt="MINT-Stimmungsbarometer 2022"
          />
        ),

        title: `Zweites Projekt`,
        projectinfo: (
          <p>
            Erklärungstext
          </p>  
        ),            
        projectproblems: (
          <ul>
            <li>Punkt 3</li>
            <li>Punkt 2</li>
            <li>Punkt 1</li>
          </ul>  
        ),
        communityvalue: (
          <ul>
            <li>Sehr, sehr langer Punkt 1, der auch mal über mehrere Zeilen geht. Um das zu beweisen wurde 
              der erste und vermutlich acuh der zweite Satz kopiert. Sehr, sehr langer Punkt 1, der auch 
              mal über mehrere Zeilen geht. Um das zu beweisen wurde der erste und vermutlich acuh der 
              Zweite Satz kopiert.</li>
            <li>Sehr, sehr, sehr langer Punkt 2, der auch mal über mehrere Zeilen geht. Um das zu beweisen wurde 
              der erste und vermutlich acuh der zweite Satz kopiert. Sehr, sehr langer Punkt 1, der auch 
              mal über mehrere Zeilen geht. Um das zu beweisen wurde der erste und vermutlich acuh der 
              Zweite Satz kopiert.</li>
          </ul>  
        ),
        networklink: `https://community.mint-vernetzt.de/`,
        projectlink: `https://www.hs-nordhausen.de/forschung/schuelerforschungszentrum/`,
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
          <div className="md:w-1/2">            
            <H1 like="h0">Diversität</H1>
            <p className="font-bold text-primary lg:text-3xl lg:leading-snug">
              Themenseite mit Erkenntnissen aus Wissenschaft und Praxis
            </p>            
          </div>
        </div>

        <div className="hero-image md:absolute md:right-0 md:bottom-0 md:w-1/2">
          {data.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.HeroImage.childImageSharp.gatsbyImageData}
              className=""
              alt="Diversität: Themenseite mit Erkenntnissen aus Wissenschaft und Praxis"
            />
          ) : null}
        </div>    

      </section>

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container flex justify-center">
          <div className="lg:w-10/12">
            <H2 like="h3" className="uppercase text-center mb-8 lg:mb-12 tracking-widest">EINE HEADLINE</H2>
            <p className="text-3xl leading-snug text-primary">
              Wir brauchen <span className="bg-lilac-400">mehr Diversität in der MINT-Bildung</span> – aber wie stellen wir das an? 
              Auf dieser Themenseite bündeln wir für Euch Beiträge und Veranstaltungen mit Tipps 
              und Hintergrundwissen, damit sich zukünftig <span className="bg-lilac-400">alle Kinder und Jugendliche von 
              MINT-Bildungsprojekten gleichermaßen angesprochen fühlen.</span>
            </p>  
          </div>  
        </div>   
      </section>      
      
      {data.news.nodes.length > 0 && (
        <section className="bg-lilac-400 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container">            
            <H2 like="h3" className="uppercase text-center mb-12 tracking-widest text-white">Aktuelle News</H2>            
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
              <H2 className="mb-6">Chance Diversität</H2>
              <p className="text-xl leading-snug text-primary">
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
                  data-src={`https://www.youtube-nocookie.com/embed/ccClwGLoy1Q?autoplay=1`}
                  title="Live Stream"
                  allowfullscreen="true"
                  allow="autoplay"
                ></iframe>
                <div
                  id={`keynote-optin`}
                  className="flex p-8"
                >
                  <div className="text-center">
                    <h3 className="text-white mb-8">
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
          <div className="container xl:flex xl:justify-center">
            <div className="xl:w-10/12">
              <H2 like="h3" className="uppercase text-center mb-12 tracking-widest">Aktuelle Events</H2>            
              <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">            
                {events.map((event, index) => (
                  <div
                    key={`event-${index}`}
                    className="rounded-lg bg-neutral-200 shadow-lg"
                  >
                    <Link to={event.url} className="flex flex-col h-100">
                      <div className="event-teaser-image">

                      </div>
                      <div className="p-8">
                        <div className="text-neutral-800 leading-tight text-xs font-semibold flex items-center mb-2">
                          <Icon type={IconType.Calendar} />{" "}
                          <time className="ml-2">{formatDate(event.date)}</time>
                        </div>
                        <H4 className="lg:leading-snug">{event.headline}</H4>
                        <p className="line-clamp-3">{event.body}</p>
                      </div>  
                    </Link>
                  </div>
                ))}
              </div>           
            </div>   
          </div>
        </section>  
      )}

      <section className="bg-beige-100 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="md:flex md:items-center -mx-4">
            <div className="md:w-6/12 px-4 mb-8 md:mb-0">              
              <GatsbyImage
                image={data?.StudyImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-auto"
                alt=""
              />
            </div> 
            <div className="lg:w-1/12 px-4">              
            </div>
            <div className="md:w-6/12 lg:w-4/12 px-4">
              <H2 className="mb-6">Chance Diversität</H2>
              <p className="text-xl leading-snug text-primary">
                In ihrer Keynote "MINT, Diversität und Chancengleichheit" spricht Janina Kugel darüber, was Diversität 
                im eigenen Erleben bedeutet. Und warum wir vielfältige Perspektiven benötigen, um Wohlstand und 
                Innovation in Deutschland zu erhalten.
              </p>  
              <p>
                <button className="btn-primary">Zur Studie</button>
              </p>  
            </div>  
             
          </div>          
        </div>   
      </section> 

      <section className="bg-beige-500 pt-16 pb-28 lg:pt-24 lg:pb-40 relative">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 784 649" className="absolute w-[100%] rotate-[10deg] aspect-[1.2]">
            <path stroke="#B16FAB" stroke-width="3" d="M173.132 566.549C-155.751 445.81 42.189-23.058 323.981 3.049 451.258 14.84 428.398 69.097 516.076 125.654c126.1 81.342 397.154 81.342 190.917 387.849-18.394 27.336-83.747 87.752-114.315 106.098-66.069 39.654-146.207 47.296-419.546-53.052Z"/>
          </svg>
        </div>
        <div className="container relative z-20">          
          <H2 like="h3" className="uppercase text-center mb-12 tracking-widest">Tipps aus der Projektarbeit</H2> 
          <div className="">
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
              <H2 className="mb-6">Chance Diversität</H2>
              <p className="text-xl leading-snug text-primary">
                In ihrer Keynote "MINT, Diversität und Chancengleichheit" spricht Janina Kugel darüber, was Diversität 
                im eigenen Erleben bedeutet. Und warum wir vielfältige Perspektiven benötigen, um Wohlstand und 
                Innovation in Deutschland zu erhalten.
              </p>  
              <p className="mb-0">
                <button className="btn-primary">Zur Studie</button>
              </p>  
            </div>
            <div className="hidden lg:flex lg:w-1/12 px-4">              
            </div>
            <div className="md:w-5/12 px-4">              
              <GatsbyImage
                image={data?.StudyImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-auto"
                alt=""
              />
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
    HeroImage: file(relativePath: { eq: "topics-diversitaet-hero.png" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    StudyImage: file(
      relativePath: {
        eq: "topic-diversity/example-6col.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    Dossier1TeaserImage: file(
      relativePath: {
        eq: "themenspezial-artikel-maedchen-fuer-programmieren-begeistern.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    Dossier2TeaserImage: file(
      relativePath: { eq: "themenspezial-artikel-maedchen-wettbewerb.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    Dossier3TeaserImage: file(
      relativePath: { eq: "card_abbau-von-geschlechterunterschieden.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    news: allWpNewsItem(limit: 9, filter: {tags: {nodes: {elemMatch: {slug: {eq: "networking"}}}}}) {
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
                gatsbyImageData(width: 1488)
              }
            }
          }
        }
      }
    }    
    events: allWpEvent(
      filter: { parentId: { eq: null }}
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
        title
        slug
      }
    }
  }
`;

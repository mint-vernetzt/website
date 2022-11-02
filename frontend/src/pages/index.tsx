import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  getNewsItems,
  getTeasersData,
} from "../utils/dataTransformer";
import { GatsbyImage } from "gatsby-plugin-image";
import EventTeaser from "../components/EventTeaser/EventTeaser";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import SocialBar from "../components/SocialBar/SocialBar";
import { H2, H4 } from "../components/Heading/Heading";
import HeroCarousel from "../components/HeroCarousel";
import { EventTeaserItemProps } from "../components/EventTeaser/EventTeaserItem";
import { isBeforeOneDayAfterDate } from "../utils/eventFilter";

export function Index({
  data,
  ...otherProps
}: {
  data: GatsbyTypes.LandingPageQuery;
}) {
  const newsItems = getNewsItems(data.newsItems).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });

  const teasers =
    data.teasers.nodes.length > 0
      ? getTeasersData(data)
      : [
          {
            image: (
              <GatsbyImage
                image={data?.HeroImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-3/4 md:h-full"
                alt=""
              />
            ),

            headline: (
              <>
                MINT
                <span className="font-normal block md:inline">vernetzt</span>
              </>
            ),

            excerpt: (
              <>
                die Service- und Anlaufstelle der MINT-
                <br />
                Akteur:innen in Deutschland.
              </>
            ),

            url: (
              <Link to="/about/" className="btn-primary">
                Erfahre mehr
              </Link>
            ),
          },
        ];

  const now = new Date();

  const events: EventTeaserItemProps[] = data.events.nodes
    .filter((event) =>
      isBeforeOneDayAfterDate(now, new Date(event.eventInformations.endDate))
    )
    .map((event) => ({
      headline: event.title,
      body: (
        <span
          dangerouslySetInnerHTML={{
            __html: event.excerpt.replace(/<[^>]*>/g, "").substr(0, 150),
          }}
        />
      ),
      date: new Date(event.eventInformations.startDate),
      url: `/event/${event.slug}/`,
    }))
    .slice(0, 4);

  const linkWrapper = (url: string, children: React.ReactNode) => {
    return <Link to={url}>{children}</Link>;
  };

  return (
    <Layout {...otherProps}>
      <SEO
        title="Willkommen"
        slug="/"
        image=""
        description={""}
        children={""}
      />
      <section className="container relative my-8 md:my-10 lg:my-20">
        <HeroCarousel items={teasers} />
      </section>

      <section className="container z-10 relative flex justify-center">
        <div>
          <SocialBar className="flex flex-col md:flex-row mx-2 pt-4 md:pt-6 md:pb-8 px-6 pb-4 bg-white rounded-2xl lg:rounded-3xl shadow -mt-36 md:-mt-24 lg:-mt-36 lg:px-12 lg:pb-10" />
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-2 lg:-mx-4">
          <div className="w-full pb-8 md:pb-0 md:w-2/3 md:px-2 lg:px-4">
            <div className="flex items-center justify-end no-wrap">
              <H2 like="h1" className="grow">
                <strong>MINT</strong>news
              </H2>
              <Link to="/news/" className="text-sm text-primary mr-4 mb-4">
                Alle ansehen
              </Link>
              <Link
                to="/news-submission/"
                className="text-sm text-primary mb-4"
              >
                News einreichen
              </Link>
            </div>
            <NewsFeed
              body="Wir blicken in die MINT-Welt und darüber hinaus und informieren Euch regelmäßig über Erkenntnisse, Ereignisse und Innovationen, die für Eure tägliche Arbeit interessant sind."
              linkToOverview="/news/"
              newsFeedItemsProps={newsItems}
              onChipClick={(slug) => {
                if (window) {
                  document.location.href = `/news/?tags=${slug}`;
                }
              }}
            />
          </div>
          <div className="event-teaser w-full md:w-1/3 pb-8 md:pb-0 md:px-2 lg:px-4">
            <div className="flex flex-col p-4 pb-15 md:pb-5 py-6 rounded-lg bg-neutral-200 shadow-lg">
              <div className="flex items-center justify-end flex-wrap">
                <H2 className="whitespace-nowrap grow">
                  <strong>MINT</strong>events
                </H2>
                <div className="flex items-center justify-end flex-nowrap mb-4">
                  <Link
                    to="/events/"
                    className="text-sm text-primary whitespace-nowrap mr-4"
                  >
                    Alle ansehen
                  </Link>
                  <Link
                    to="/event-submission/"
                    className="text-sm text-primary whitespace-nowrap"
                  >
                    Event einreichen
                  </Link>
                </div>
              </div>
              <EventTeaser
                linkToOverview="/events/"
                linkWrapper={linkWrapper}
                items={events}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap items-center md:-mx-6 lg:-mx-10">
          <div className="md:px-6 lg:px-10 md:w-1/2">
            <H2 like="h1">Unsere Community-Plattform</H2>
            <p className="text-xl mb-8">
              Die bundesweite MINT-Community lebt davon, sich auszutauschen,
              Wissen zu teilen, von- und miteinander zu lernen. Einer der
              Lösungswege ist unser digitaler Dorfplatz: die
              Community-Plattform, auf der Ihr Euch untereinander und mit
              Organisationen vernetzen könnt. Ihr sucht Inspiration oder
              Expert:innen zu konkreten Themen in Eurer Umgebung? Meldet Euch an
              und vernetzt Euch miteinander!
            </p>
            <p>
              <a
                href="https://community.mint-vernetzt.de/"
                className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-blue-500 text-neutral-200"
                target="_blank"
              >
                Mehr erfahren
              </a>
            </p>
          </div>
          <div className="md:px-6 lg:px-10 md:w-1/2">
            <GatsbyImage
              image={data?.PlattformImage?.childImageSharp?.gatsbyImageData}
              className=""
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Unsere Projekte</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Hier findet Ihr immer einen aktuellen Überblick über spannende
            Auszeichnungen, Projekte oder neue Tools.
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              image: data?.RaketeImage?.childImageSharp?.gatsbyImageData,
              title: `MINTrakete`,
              text: `Die MINTrakete ist eine Auszeichnung für außergewöhnliche Gute-Praxis-Beispiele mit neuen Projektansätzen in der MINT-Bildung.`,
              link: `/projects/mint-raketen/`,
            },
            {
              image: data?.PaktImage?.childImageSharp?.gatsbyImageData,
              title: `Pakt für Frauen`,
              text: `Mit über 300 Mitgliedern unterstützt der Pakt für Frauen in MINT-Berufen dabei, Mädchen und junge Frauen für MINT-Ausbildungen, -Studiengänge und -Berufe zu begeistern.`,
              link: `/projects/mint-pakt/`,
            },
            {
              image: data?.DatalabImage?.childImageSharp?.gatsbyImageData,
              title: `MINT-DataLab`,
              text: `Das MINT-DataLab umfasst statistische Kennzahlen von der nationalen bis zur regionalen Ebene, etwa Schul- und Hochschulstatistiken sowie Daten zum Ausbildungs- und Arbeitsmarkt.`,
              link: `/data/daten-fakten/`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 pb-6 md:p-2 md:pb-6 lg:p-4 lg:pb-6 rounded-lg bg-neutral-200 shadow-lg flex flex-col h-100"
            >
              <div className="rounded-lg overflow-hidden mb-2 lg:mb-4 z-0 flex-initial">
                <Link to={`${teaserbox.link}`}>
                  <GatsbyImage
                    image={teaserbox.image}
                    className="w-full h-auto bg-[#D0AACD]"
                    alt={teaserbox.title}
                  />
                </Link>
              </div>
              <div className="flex-auto pb-4">
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </div>
              {teaserbox.link !== undefined && (
                <div className="flex-initial">
                  <p className="lg:mx-2">
                    <Link
                      to={`${teaserbox.link}`}
                      className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-blue-500 text-neutral-200"
                    >
                      Mehr erfahren
                    </Link>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query LandingPage {
    HeroImage: file(relativePath: { eq: "home_hero_large.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    RaketeImage: file(relativePath: { eq: "teaser_mintrakete.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    PaktImage: file(relativePath: { eq: "teaser_pakt.png" }) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    DatalabImage: file(relativePath: { eq: "teaser_datalab.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    PlattformImage: file(relativePath: { eq: "mockup_plattform.png" }) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    newsItems: allWpNewsItem(sort: { fields: [date], order: DESC }, limit: 3) {
      nodes {
        title
        excerpt
        slug
        date
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
    events: allWpEvent(
      filter: { parentId: { eq: null } }
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
    teasers: allWpTeaser(sort: { fields: date, order: DESC }) {
      nodes {
        title
        excerpt
        teaserInformations {
          buttonText
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1488)
              }
            }
          }
          pagePath
          post {
            __typename
            ... on WpEvent {
              id
              slug
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
            ... on WpNewsItem {
              id
              slug
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
        }
      }
    }
  }
`;

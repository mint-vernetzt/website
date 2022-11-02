import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H3, H4 } from "../../components/Heading/Heading";
import { ReactComponent as BadgeRocket } from "../../images/Badge_02Rocket.svg";
import Icon, { IconType } from "../../components/Icon/Icon";
import { isBeforeOneDayAfterDate } from "../../utils/eventFilter";
import { formatDate } from "../../components/EventFeed/utils";

export function MintPlus({
  data,
}: {
  data: GatsbyTypes.MintPlusPageQuery;
}) {
  const now = new Date();

  const events = data.events.nodes
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
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title="MINT+"
        slug="/topics/mint-plus/"
        description="Themenseite mit Erkenntnissen aus Wissenschaft und Praxis"
        image={data?.HeroImage?.publicURL}
        children=""
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {data.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.HeroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="MINTnews: Informieren, inspirieren und Emotionen wecken mit MINT"
            />
          ) : null}

          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">MINT+</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Themenseite mit Erkenntnissen aus Wissenschaft und Praxis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">
            Die Öffnung des <span className="font-bold">MINT</span>-Begriffs
          </H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            In unterschiedlichen Beiträgen bereiten wir Forschungserkenntnisse
            praxisorientiert auf und teilen Erfahrungen miteinander. Wichtig
            dabei zu wissen: Wir beleuchten je nach Perspektive einen anderen
            Aspekt von MINT+. Dies kann bedeuten MINT-Lernen mit Kreativität und
            Kunst zu kombinieren oder aber größer gefasst, MINT-Themen in
            gesellschaftsrelevante Kontexte zu setzen oder mit lebensnahen
            Alltagsfragen zu verbinden.
          </p>
        </header>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              image:
                data?.TellerrandArtikelImage?.childImageSharp?.gatsbyImageData,
              title: `MINT+ oder warum wir den Blick über den Tellerrand wagen sollten`,
              text: `Was ist MINT+ und inwieweit kann das „plus“ – die Erweiterung von MINT – hilfreich für Euch und Eure Projekte sein? Mit diesem Blogbeitrag bekommt Ihr einen ersten Einblick in das Thema - viel Spaß beim Lesen!`,
              link: `/news/mint-oder-warum-wir-den-blick-uber-den-tellerrand-wagen-sollten/`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
            >
              <Link to={`${teaserbox.link}`} className="flex flex-col h-100">
                <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                  <GatsbyImage
                    image={teaserbox.image}
                    className="w-full h-auto"
                    alt={teaserbox.title}
                  />
                </div>
                <H2 like="h4" className="lg:leading-snug lg:mx-2">
                  {teaserbox.title}
                </H2>
                <p className="lg:mx-2">{teaserbox.text}</p>
                <p>
                  <button className="btn-primary">Jetzt lesen</button>
                </p>
              </Link>
            </div>
          ))}
          <div className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg flex flex-col h-100">
            <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
              <GatsbyImage
                image={data.LernenArtikelImage.childImageSharp.gatsbyImageData}
                className="w-full h-auto"
                alt="Lernen im Kontext – ein wichtiger Baustein für MINT+"
              />
            </div>
            <H2 like="h4" className="lg:leading-snug lg:mx-2">
              Lernen im Kontext – ein wichtiger Baustein für MINT+
            </H2>
            <p className="lg:mx-2">
              Was gibt es für Konzepte von „Kontextualisiertem Lernen“, welche
              Methoden wurden von der Forschung begleitet und als wirksam
              erkannt und wo gibt es trotzdem noch Herausforderungen in der
              schulischen und außerschulischen Praxis? Ein Überblick aus der
              Bildungsforschung.
            </p>
          </div>
        </div>
      </section>

      {events.length > 0 && (
        <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
          <header>
            <H2 like="h1">Unsere Events zum Thema MINT+</H2>
            <p className="text-xl md:px-8 lg:px-20 ">
              Wir möchten in Vernetzungsformaten darüber in Austausch kommen,
              wie wir als MINT-Community Mädchen und junge Frauen in diesem
              Bereich stärken können. Dafür gibt es Events wie das MINTcafé
              Gender. Schaut mal rein!
            </p>
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={`event-${index}`}
                className="p-4 rounded-lg bg-neutral-200 shadow-lg"
              >
                <Link to={event.url} className="flex flex-col h-100">
                  <div className="text-neutral-800 leading-tight text-xs font-semibold flex items-center mb-2 lg:mx-2">
                    <Icon type={IconType.Calendar} />{" "}
                    <time className="ml-2">{formatDate(event.date)}</time>
                  </div>
                  <H4 className="lg:leading-snug lg:mx-2">{event.headline}</H4>
                  <p className="line-clamp-3 lg:mx-2">{event.body}</p>
                </Link>
              </div>
            ))}
          </div>
          <p className="md:text-center">
            <Link to="/events/?tags=didactics" className="btn-primary mt-8">
              Zur Eventübersicht
            </Link>
          </p>
        </section>
      )}

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-stretch md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <div className="h-full bg-[#EFE8E6] py-24 flex items-center rounded-lg">
              <BadgeRocket className="w-64 h-64 mx-auto" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H3 like="h1">
                <span className="font-bold">MINT</span>raketen
              </H3>
              <p>
                Die MINTrakete ist eine Auszeichnung für außergewöhnliche
                Praxis-Projekte in der MINT-Bildung. Zweimal im Jahr werden
                Projekte, die innovative Ansätze nutzen und die Kinder und
                Jugendliche im und für den MINT-Bereich motivieren,
                ausgezeichnet.
              </p>
              <p>
                Bewerben können sich außerschulische Anbieter:innen von
                MINT-Bildungsangeboten, die sich entweder an Kinder und
                Jugendliche oder an weitere MINT-Anbieter:innen richten. Eine
                interdisziplinäre Jury bewertet anhand ausgewählter Kriterien
                die Projekte!
              </p>
              <p>
                <Link to="/projects/mint-raketen/" className="btn-primary">
                  Jetzt entdecken
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {data.news.nodes.length > 0 && (
        <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
          <header>
            <H2 like="h1">
              Blogbeiträge zum Thema <span className="font-bold">MINT</span>+
            </H2>
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data.news.nodes.map((news, index) => (
              <div
                key={`teaserbox-${index}`}
                className="p-4 rounded-lg bg-neutral-200 shadow-lg"
              >
                <Link to={`/news/${news.slug}`} className="flex flex-col h-100">
                  <H4 className="lg:leading-snug lg:mx-2">{news.title}</H4>
                  <div
                    className="line-clamp-3 lg:mx-2"
                    dangerouslySetInnerHTML={{
                      __html: news.excerpt as string,
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
          <p className="md:text-center">
            <Link to="/news/?tags=steam" className="btn-primary mt-8">
              Zur Newsübersicht
            </Link>
          </p>
        </section>
      )}
    </Layout>
  );
}

export default MintPlus;

export const pageQuery = graphql`
  query MintPlusPage {
    HeroImage: file(relativePath: { eq: "hero_mint_plus.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    LernenArtikelImage: file(relativePath: { eq: "Mint_Plus_Lernen_Artikel.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    TellerrandArtikelImage: file(relativePath: { eq: "Mint_plus_Artikel_Tellerand.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }    
    news: allWpNewsItem(
      limit: 3
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "steam" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
      }
    }
    events: allWpEvent(
      filter: { parentId: { eq: null }, tags: { nodes: { elemMatch: { slug: { eq: "steam" } } } } }
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


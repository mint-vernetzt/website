import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H3, H4 } from "../../components/Heading/Heading";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { isBeforeOneDayAfterDate } from "../../utils/eventFilter";

export function GenderSensibleMintBildung({
  data,
}: {
  data: GatsbyTypes.GenderSensibleMintBildungPageQuery;
}) {
  const now = new Date();

  console.log("events.nodes", data.events.nodes);

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

  console.log("events", events);

  return (
    <Layout>
      <SEO
        title="Gendersensible MINT-Bildung"
        slug="/topics/gender-sensible-mint-bildung/"
        description="Erkenntnisse aus der Forschung, Gute-Praxis-Beispiele und Austauschformate für Eure Praxis"
        image={data?.heroImage?.publicURL}
        children=""
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          <GatsbyImage
            image={data.heroImageBright?.childImageSharp?.gatsbyImageData}
            className="w-full h-full"
            alt="Gendersensible MINT-Bildung"
          />
          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">Gendersensible MINT-Bildung</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Erkenntnisse aus der Forschung, Gute-Praxis-Beispiele und
                Austauschformate für Eure Praxis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-8 lg:px-16 mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1" className="mb-8 text-left lg:text-center">
            Gendersensibles Lehren und Lernen
          </H2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
            <p className="text-xl text-left">
              Mädchen können kein MINT? Doch natürlich! Aber warum gibt es im
              MINT-Bereich so starke Unterschiede in der Verteilung der
              Geschlechter? Das wollen wir ändern! Daher setzen wir bei
              MINTvernetzt einen besonderen Schwerpunkt auf die
              Gendersensibilisierung. Mit unseren Formaten unterstützen wir Euch
              dabei, mehr Mädchen und junge Frauen für MINT zu begeistern. Wir
              bieten Euch die Möglichkeit, Euch untereinander auszutauschen,
              über Erkenntnisse aus Wissenschaft und Praxis zu informieren und
              von- und miteinander zu lernen.
            </p>
            <p className="text-xl text-left">
              Hier findet Ihr unsere Blogbeitragserie, in der wir spannende
              Erkenntnisse aus der Forschung aufbereiten, Gute-Praxis-Beispiele
              zeigen, eine jährliche Befragung der MINT-Akteur:innen
              veröffentlichen sowie Austausch- und Vernetzungsmöglichkeiten zum
              Thema Gender für Eure MINT-Bildungspraxis zur Verfügung stellen.
              Seid dabei und macht mit!
            </p>
          </div>
        </header>
      </section>
      {data.news.nodes.length > 0 && (
        <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
          <header>
            <H2 like="h1">Unsere Blogbeiträge zum Thema Gender</H2>
            <p className="text-xl md:px-8 lg:px-20 ">
              In unserer Auswahl von Blogbeiträgen findet Ihr konkrete Tipps,
              wissenschaftliche Hintergründe und spannende Projekte zum
              Reinlesen.
            </p>
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data.news.nodes.map((news, index) => (
              <div
                key={`news-${index}`}
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
            <Link to="/news/?tags=gender" className="btn-primary mt-8">
              Zur Beitragsübersicht
            </Link>
          </p>
        </section>
      )}

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <div className="rounded-lg overflow-hidden">
              <GatsbyImage
                image={
                  data.bildungsforschungImage?.childImageSharp?.gatsbyImageData
                }
                className="w-full h-full"
                alt="Gendersensible MINT-Bildung"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H3 like="h1">
                <span className="font-bold">MINT</span>-Bildungsforschung:
                Gendersensible Didaktik
              </H3>
              <p>
                Mädchen und junge Frauen fehlen in sämtlichen MINT-Bereichen.
                Deshalb zeigen wir Euch in diesem Themenschwerpunkt, welche
                didaktischen Maßnahmen dabei helfen können, Mädchen für einzelne
                MINT-Disziplinen zu begeistern und sie zur Teilnahme an
                Projekten zu motivieren. Wir gehen auf konkrete
                Handlungsmöglichkeiten ein, die dazu beitragen sollen,
                Geschlechterklischees in der Praxis aufzubrechen. Darüber hinaus
                zeigen wir auf, inwieweit Formate der Begabtenförderung immer
                noch von Stereotypen beeinflusst werden.
              </p>
              <p>
                <Link to="/topics/didaktik/" className="btn-primary">
                  Mehr erfahren
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {events.length > 0 && (
        <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
          <header>
            <H2 like="h1">Unsere Events zum Thema Gender</H2>
            <p className="text-xl md:px-8 lg:px-20 ">
              Kommt mit uns in den Austausch, informiert und vernetzt Euch mit
              anderen MINT-Akteur:innen in unseren Veranstaltungen zum Thema
              Frauen und Mädchen in MINT.
            </p>
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={`event-${index}`}
                className="p-4 rounded-lg bg-neutral-200 shadow-lg"
              >
                <Link to={event.url} className="flex flex-col h-100">
                  <H4 className="lg:leading-snug lg:mx-2">{event.headline}</H4>
                  <div className="line-clamp-3 lg:mx-2">{event.body}</div>
                </Link>
              </div>
            ))}
          </div>
          <p className="md:text-center">
            <Link to="/events/?tags=gender" className="btn-primary mt-8">
              Zur Eventübersicht
            </Link>
          </p>
        </section>
      )}

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <div className="overflow-hidden rounded-lg">
              <GatsbyImage
                image={data.paktImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full"
                alt="Gendersensible MINT-Bildung"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H3 like="h1">
                Nationaler Pakt für Frauen in{" "}
                <span className="font-bold">MINT</span>-Berufen
              </H3>
              <p>
                Der weiterhin niedrige Anteil weiblicher Beschäftigter in
                MINT-Berufen hat vielfältige Ursachen. Deshalb braucht es ein
                breites Netzwerk, um mit vereinten Kräften, Mädchen und Frauen
                stärker für MINT-Ausbildungen, -Studiengänge und -Berufe zu
                interessieren und zu ermutigen sowie die Nachwuchs- und
                Fachkräfte in ihrem beruflichen MINT-Werdegang zu unterstützen.
                Aus diesem Grund gibt es den Pakt für Frauen in MINT-Berufen:
                Mit über 300 Mitgliedern unterstützt der Pakt dabei, diese
                Anliegen umzusetzen. Durch regelmäßigen Austausch und
                Netzwerkformate stärkt der Pakt die MINT-Bildung und aktiviert
                MINT-Talente, um den Innovations- und Wirtschaftsstandort
                Deutschland zu sichern.
              </p>
              <p>
                <Link to="/projects/mint-pakt" className="btn-primary">
                  Mehr erfahren
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">
            Was macht <span className="font-bold">MINT</span>vernetzt im Bereich
            Gender
          </H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Mädchen und junge Frauen sind im MINT-Bereich deutlich
            unterrepräsentiert. Das möchten wir gemeinsam mit Euch ändern!
            Deshalb gibt es unseren Themenschwerpunkt Gender, der sich in drei
            Säulen teilt, zu denen wir arbeiten, recherchieren und Angebote
            schaffen.
          </p>
        </header>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: data?.befragungImage?.childImageSharp?.gatsbyImageData,
              title: `Befragung`,
              text: `Um Informationen zu erhalten, inwieweit MINT-Bildungsangebote in Deutschland bereits Genderaspekte berücksichtigen, findet eine jährliche Befragung statt. Gemeinsam mit Euch, Euren Erfahrungen und Eurer Expertise möchten wir zur Verbesserung der MINT-Bildung beitragen.`,
            },
            {
              image: data?.vernetzungImage?.childImageSharp?.gatsbyImageData,
              title: `Vernetzung und Austausch`,
              text: `Um Euch mit Euren Angeboten stärker zu vernetzen, findet regelmäßig das "MINTcafé Gender" statt - eine digitale Veranstaltungsreihe, in der Forschungserkenntnisse und Praxiserfahrungen im Fokus stehen. Zudem gibt es eine regelmäßige Sprechstunde und Austauschformate für die Mitglieder des Nationalen Paktes für Frauen in MINT-Berufen.`,
            },
            {
              image: data?.transferImage?.childImageSharp?.gatsbyImageData,
              title: `Forschungstransfer`,
              text: `Um Euch praxisrelevante Erkenntnisse aus Wissenschaft und Forschung zugänglich zu machen, werden diese in Blogbeiträgen und Themendossiers aufbereitet und veröffentlicht.`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
            >
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
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default GenderSensibleMintBildung;

export const pageQuery = graphql`
  query GenderSensibleMintBildungPage {
    heroImage: file(relativePath: { eq: "hero_gender.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 600)
      }
    }
    heroImageBright: file(relativePath: { eq: "hero_gender_bright.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    bildungsforschungImage: file(
      relativePath: { eq: "mint-bildungsforschung.jpg" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    paktImage: file(relativePath: { eq: "teaser_pakt.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    befragungImage: file(relativePath: { eq: "gender_befragung.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    vernetzungImage: file(relativePath: { eq: "gender_vernetzung.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    transferImage: file(relativePath: { eq: "gender_transfer.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    news: allWpNewsItem(
      limit: 3
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "gender" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
      }
    }
    events: allWpEvent(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "gender" } } } } }
      sort: { fields: eventInformations___startDate, order: ASC }
    ) {
      nodes {
        excerpt
        slug
        title
        eventInformations {
          startTime
          startDate
          endTime
          endDate
        }
      }
    }
  }
`;

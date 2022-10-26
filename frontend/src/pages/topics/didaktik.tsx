import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H3, H4 } from "../../components/Heading/Heading";
import { ReactComponent as BadgeRocket } from "../../images/Badge_02Rocket.svg";
import Icon, { IconType } from "../../components/Icon/Icon";
import { isBeforeOneDayAfterDate } from "../../utils/eventFilter";
import { formatDate } from "../../components/EventFeed/utils";

export function Didaktik({
  data,
}: {
  data: GatsbyTypes.DidaktikPageQuery;
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
        title="Didaktik"
        slug="/topics/didaktik/"
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
              alt="Didaktik: Themenseite mit Erkenntnissen aus Wissenschaft und Praxis"
            />
          ) : null}

          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">Didaktik</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Themenseite mit Erkenntnissen aus Wissenschaft und Praxis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Bildungsforschung mit Praxisbezug</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Es gibt bereits einige Studien, wissenschaftliche Publikationen und Erfahrungen 
            aus der Bildungspraxis, die sich mit Geschlechterunterschieden in der MINT-Bildung 
            und didaktischen Maßnahmen befassen. Wir bereiten diese Erkenntnisse in 
            unterschiedlichen Beiträgen mit einem Praxisbezug sowie dem Fokus auf Gender für 
            Euch auf. Das Ziel ist, mithilfe diesen Wissens eine breitere Zielgruppe mit Euren 
            MINT-Angeboten zu erreichen.
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              image:
                data?.Dossier1TeaserImage?.childImageSharp?.gatsbyImageData,
              title: `Wie können Mädchen für Informatik begeistert werden?`,
              text: `Welche didaktischen Maßnahmen sind besonders wirksam, um das Interesse von Mädchen an Informatik, Programmieren und Computern nachhaltig zu fördern? Der folgende Artikel bietet Euch konkrete Handlungsempfehlungen aus der Forschung.`,
              link: `/mint-bildungsforschung/themenspezial-artikel-maedchen-fuer-programmieren-begeistern/`,
            },
            {
              image:
                data?.Dossier2TeaserImage?.childImageSharp?.gatsbyImageData,
              title: `Wettbewerbe sind für Mädchen weniger attraktiv als für Jungen – über Stereotype und Strukturen`,
              text: `Mathematik- und Wissenschaftsolympiaden sind für die Teilnehmenden oft ein Sprungbrett für die Zulassung zu Spitzenuniversitäten und für künftige Karrieren im MINT-Bereich. Wie Geschlechterstereotype die Teilnahme von Mädchen beeinflussen und warum man als Anbieter:in die eigenen Wettbewerbsstrukturen kritisch reflektieren sollte, lest Ihr hier.`,
              link: `/mint-bildungsforschung/themenspezial-artikel-maedchen-wettbewerb/`,
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
                    alt=""
                  />
                </div>
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:mx-2">{teaserbox.text}</p>
                <p>
                  <button className="btn-primary">Jetzt lesen</button>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

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
                Die MINTrakete ist eine Auszeichnung für außergewöhnliche Praxis-Projekte in der MINT-Bildung. Zweimal 
                im Jahr werden Projekte, die innovative Ansätze nutzen und die Kinder und Jugendliche im und für den 
                MINT-Bereich motivieren, ausgezeichnet. Die zweite Ausschreibungsrunde lief unter dem Oberthema "MINT 
                trifft Kunst und Kreativität". 
              </p>
              <p>
                Bewerben können sich außerschulische Anbieter:innen von MINT-Bildungsangeboten, die sich entweder an 
                Kinder und Jugendliche oder an weitere MINT-Anbieter:innen richten. Eine interdisziplinäre Jury 
                bewertet anhand ausgewählter Kriterien die Projekte!
              </p>
              <p>
              <Link to="/projects/mint-raketen/" className="btn-primary">Jetzt entdecken</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Interviews</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Wir sprechen mit unterschiedlichen Akteur:innen aus Wissenschaft,
            Praxis und Zivilgesellschaft und wollen in verschiedenen
            Perspektiven Gemeinsamkeiten aufzeigen – immer mit der Idee,
            Inspiration für die Berufspraxis von MINT-Akteur:innen zu geben.
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              title: `„Es geht darum, Mädchen in der Informatik zu sehen“`,
              text: `Wie kann man Mädchen und Frauen für MINT-Fächer – insbesondere Informatik – begeistern, und das möglichst nachhaltig? Professor Ingo Wagner hat mit Kolleg:innen dazu eine Übersichtsarbeit erstellt, in der Erkenntnisse aus über 800 Studien zusammengeführt wurden. Über die Kernelemente und was sowohl MINT-Akteur:innen als auch Eltern richtig machen können, sprach er mit uns im Interview`,
              link: `/mint-bildungsforschung/themenspezial-interview-ingo-wagner`,
            },
            {
              title: `Eine offene Werkstatt für alle`,
              text: `Auf dem Campus der Hochschule Flensburg gibt es einen außerschulischen Lernort der in verschiedenen Angeboten dazu ermächtigt, eigene Ideen umzusetzen. Das FabLab IDEENREICH versteht sich als offene Werkstatt für alle. Wie das geht und besonders Mädchen erreicht werden, lest ihr im Interview.`,
              link: `/mint-bildungsforschung/themenspezial-interview-fablab`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 rounded-lg bg-neutral-200 shadow-lg"
            >
              <Link to={`${teaserbox.link}`} className="flex flex-col h-100">
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:mx-2">{teaserbox.text}</p>
                <p>
                  <button className="btn-primary">Jetzt lesen</button>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {events.length > 0 && (
        <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
          <header>
            <H2 like="h1">Unsere Events zum Thema Didaktik</H2>
            <p className="text-xl md:px-8 lg:px-20 ">
              Wir möchten in Vernetzungsformaten darüber in Austausch kommen, wie wir als MINT-Community 
              Mädchen und junge Frauen in diesem Bereich stärken können. Dafür gibt es Events wie das 
              MINTcafé Gender. Schaut mal rein!
            </p>
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={`event-${index}`}
                className="p-4 rounded-lg bg-neutral-200 shadow-lg"
              >
                <Link
                  to={event.url}
                  className="flex flex-col h-100"
                >
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

      {data.news.nodes.length > 0 && (
        <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
          <header>
            <H2 like="h1">Unsere Newsbeiträge zum Thema Didaktik</H2>            
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data.news.nodes.map((news, index) => (
              <div
                key={`news-${index}`}
                className="p-4 rounded-lg bg-neutral-200 shadow-lg"
              >
                <Link
                  to={`/news/${news.slug}`}
                  className="flex flex-col h-100"
                >
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
            <Link to="/news/?tags=didactics" className="btn-primary mt-8">
              Zur Newsübersicht
            </Link>
          </p>
        </section>
      )}
    </Layout>
  );
}

export default Didaktik;

export const pageQuery = graphql`
  query DidaktikPage {
    HeroImage: file(relativePath: { eq: "mint-bildungsforschung.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
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
    news: allWpNewsItem(
      limit: 3
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "didactics" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
      }
    }
    events: allWpEvent(
      filter: { parentId: { eq: null }, tags: { nodes: { elemMatch: { slug: { eq: "didactics" } } } } }
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

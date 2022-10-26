import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2 } from "../../components/Heading/Heading";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export function GenderSensibleMintBildung(
  data: GatsbyTypes.GenderSensibleMintBildungPageQuery
) {
  // Why are they undefined?
  console.log(data.heroImage?.childImageSharp?.gatsbyImageData);
  console.log(data.bildungsforschungImage?.childImageSharp?.gatsbyImageData);
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
          {data.heroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.heroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="Gendersensible MINT-Bildung"
            />
          ) : null}

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
              Mädchen können kein MINT oder warum gibt es im MINT-Bereich so
              starke Unterschiede in der Verteilung der Geschlechter? Das zu
              ändern, sich auszutauschen und zu informieren und dadurch eine
              breitere Zielgruppe für MINT zu begeistern ist das Ziel von
              MINTvernetzt. Der Schwerpunkt unserer Arbeit liegt auf der
              Gendersensibilisierung. Wir wollen MINT-Akteur:innen die
              besonderen Bedarfe von Mädchen und jungen Frauen bewusst machen.
            </p>
            <p className="text-xl text-left">
              Hier findet Ihr unsere Blogbeitragserie, in der wir spannende
              Erkenntnisse aus der Forschung aufbereiten, Gute-Praxis-Beispiele,
              eine jährliche Befragung der MINT-Akteur:innen sowie Austausch-
              und Vernetzungsmöglichkeiten zum Thema Gender für Eure
              MINT-Bildungspraxis. Macht mit, tauscht Euch aus und lernt
              voneinander!
            </p>
          </div>
        </header>
      </section>

      {/* <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
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
                ausgezeichnet. Die zweite Ausschreibungsrunde lief unter dem
                Oberthema "MINT trifft Kunst und Kreativität".
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

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">
            Blogbeiträge und Events zum Thema{" "}
            <span className="font-bold">MINT</span>+
          </H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Wir möchten in Vernetzungsformaten darüber in Austausch kommen, wie
            wir als MINT-Community Mädchen und junge Frauen in diesem Bereich
            stärken können. Dafür gibt es Events wie das MINTcafé Gender, aber
            auch immer wieder Blogartikel über neue Erkenntnisse und
            Praxisperspektiven. Schaut mal rein!
          </p>
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
      </section> */}
    </Layout>
  );
}

export default GenderSensibleMintBildung;

export const pageQuery = graphql`
  query GenderSensibleMintBildungPage {
    heroImage: file(relativePath: { eq: "hero_gender.jpg" }) {
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
      limit: 3
      filter: { tags: { nodes: { elemMatch: { slug: { eq: "gender" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        excerpt
        slug
        title
        date
      }
    }
  }
`;

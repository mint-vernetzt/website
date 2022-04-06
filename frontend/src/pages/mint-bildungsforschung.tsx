import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H4 } from "../components/Heading/Heading";

export function MintForschung({
  data,
}: {
  data: GatsbyTypes.MintForschungPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="MINT-Bildungsforschung"
        slug="/mint-bildungsforschung"
        description="Wissenschaftliche Untersuchungen und aktuelle Erkenntnisse, die die Bildungsarbeit konkret unterstützen."
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
              <H1 like="h0">MINT-Bildungsforschung</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Wissenschaftliche Untersuchungen und aktuelle Erkenntnisse, die
                die Bildungsarbeit konkret unterstützen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Gendersensibles Lehren und Lernen</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            In unterschiedlichen Beiträgen bereiten wir Forschungserkenntnisse
            praxisorientiert auf und teilen Wissen miteinander. In diesem
            Themenschwerpunkt zeigen wir, mit welchen didaktischen Maßnahmen man
            Mädchen für einzelne MINT-Disziplinen begeistern kann und wie
            wichtige Formate der Begabtenförderung immer noch von Stereotypen
            beeinflusst werden. Diese Themenseiten sind ein stetig wachsender
            Wissensschatz, der sich immer wieder um weitere Artikel und
            Interviews erweitern wird.
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

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <H2 like="h1">Blogbeiträge und Events zum Thema</H2>
          <p className="text-xl md:px-8 lg:px-20 ">
            Wir möchten in Vernetzungsformaten darüber in Austausch kommen, wie
            wir als MINT-Community Mädchen und junge Frauen in diesem Bereich
            stärken können. Dafür gibt es Events wie das MINTcafé Gender, aber
            auch immer wieder Blogartikel über neue Erkenntnisse und
            Praxisperspektiven. Schaut mal rein!
          </p>
        </header>

        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              title: `Mädchen und Frauen in MINT – wie geht es von hier aus weiter?`,
              text: `Zwar gab es in den letzten Jahrzehnten einige positive Tendenzen – dennoch sind Mädchen und Frauen in MINT nach wie vor deutlich unterrepräsentiert. Wir werfen einen Blick auf die Ausgangssituation und entsprechende Zahlen.`,
              link: `/news/maedchen-und-frauen-in-mint-wie-geht-es-von-hier-aus-weiter`,
            },
            {
              title: `So begeistern diese Expert:innen Mädchen und Frauen von MINT entlang der Bildungskette`,
              text: `Drei Initiativen, drei Erfolgsgeschichten: wie die Ansprache von Mädchen und jungen Frauen den Funken der Begeisterung für MINT(-Berufe) entfachen kann.`,
              link: `/news/so-begeistern-diese-expertinnen-maedchen-und-frauen-von-mint-entlang-der-bildungskette`,
            },
            {
              title: `MINTcafé Gender`,
              text: `Wir möchten Euch herzlich zum „MINTcafé Gender“ einladen! Hier könnt Ihr Euch zum Thema „Mädchen und Frauen in MINT“ informieren und austauschen, vernetzen und Synergien entstehen lassen.`,
              link: `/event/mintvernetzt-mintcafe-gender`,
            },
          ].map((teaserbox, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 rounded-lg bg-neutral-200 shadow-lg"
            >
              <Link to={`${teaserbox.link}`} className="flex flex-col h-100">
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default MintForschung;

export const pageQuery = graphql`
  query MintForschungPage {
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
    MintvernetztImage: file(
      relativePath: { eq: "landingpage_mintvernetzt.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    MintcommunityImage: file(
      relativePath: { eq: "landingpage_mintcommunity.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
  }
`;

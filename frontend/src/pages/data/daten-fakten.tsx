import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H3, H4 } from "../../components/Heading/Heading";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Mood2022 from "../../components/MoodCarousel/Mood2022";
import Mood2023 from "../../components/MoodCarousel/Mood2023";
import Icon, { IconType } from "../../components/Icon/Icon";

export function Datenfakten({
  data,
}: {
  data: GatsbyTypes.DatenfaktenPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="Daten und Fakten"
        slug="/data/daten-fakten/"
        description="Das MINT-DataLab ist eine interaktive Plattform, die MINT-Daten zu Schule, Studium, Ausbildung und Beruf darstellt, z. B. Statistiken zu Frauen in MINT oder regionalen und ausländischen Fachkräften."
        image={data?.heroImage?.publicURL}
        children="" keywords={""}        
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          <GatsbyImage
            image={data.heroImage?.childImageSharp?.gatsbyImageData}
            className="w-full h-full"
            alt="MINTvernetzt Plattform"
          />

          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">Daten und Fakten</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Analysen, Statistiken und Studien rund um MINT
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <p className="text-xl md:px-8 lg:px-20 ">
            Auf dieser Seite lassen wir Fakten sprechen: Wir sammeln für Euch
            von A wie Analysen bis Z wie Zahlen – alles, was mit MINT zu tun
            hat. Ihr findet im MINT-DataLab statistische Kennzahlen, in unseren
            Auftragsstudien Rechercheergebnisse zu ausgewählten Themen und im
            MINT-Stimmungsbarometer ein aktuelles Stimmungsbild zur MINT-Bildung
            in Deutschland.
          </p>
        </header>
      </section>

      <section className="container mt-8 md:mt-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <GatsbyImage
              image={data.dataLabImage?.childImageSharp?.gatsbyImageData}
              className="w-full h-auto"
              alt="MINT-DataLab (Betaversion)"
            />
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H2 like="h1" className="font-bold">
                MINT-DataLab (Betaversion)
              </H2>
              <p>
                Die Betaversion des MINT-DataLabs ist online! Das MINT-DataLab
                umfasst statistische Kennzahlen von der nationalen bis zur
                regionalen Ebene, etwa Schul- und Hochschulstatistiken sowie
                Daten zum Ausbildungs- und Arbeitsmarkt. Es stehen stets zwei
                Fragen im Vordergrund: Wie hoch ist der MINT-Anteil in den
                unterschiedlichen Bereichen? Und wie hoch ist der jeweilige
                Frauenanteil? Je nach Verfügbarkeit der Daten kann z. B. nach
                einzelnen MINT-Fächern und Bereichen gefiltert werden. In der
                Regel können die Daten für den Zeitraum vom Jahr 2000 bis heute
                abgerufen werden.
              </p>
              <p className="-m-2">
                <a
                  href="https://mint-vernetzt.shinyapps.io/datalab/"
                  target="_blank"
                  className="btn-primary btn-icon m-2"
                >
                  <Icon type={IconType.ExternalLink} />
                  Zum MINT-DataLab
                </a>
                <a
                  href="https://survey.lamapoll.de/MINT-DataLab_Feedback/"
                  target="_blank"
                  className="btn-outline-primary m-2 btn-icon"
                >
                  <Icon type={IconType.ExternalLink} />
                  Feedback geben
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20"
        id="mint-studien"
      >
        <H2 like="h1" className="text-center mb-14">
          <span className="font-bold">MINT</span>vernetzt-Studien
        </H2>
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 md:order-2">
            <div className="overflow-hidden rounded-lg">
              <GatsbyImage
                image={data.didaktikImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
                alt="Didaktik an außerschulischen Lernorten (MINTvernetzt/ Boris Loehrer)"
              />
            </div>
            <p className="text-xs">MINTvernetzt / Boris Loehrer</p>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center md:order-1">
            <div>
              <H3 like="h2" className="mb-6 font-bold">
                Didaktik an außerschulischen Lernorten
              </H3>
              <p>
                Lehrende haben oft fachliche Expertise und praktische Erfahrung,
                aber nicht zwingend einen pädagogischen Hintergrund.
                Entsprechend selten kommen didaktische Konzepte zum Einsatz. Die
                Studie zeigt die Besonderheiten außerschulischer Lernorte auf
                und ermittelt konkrete Bedarfe an didaktischer Weiterbildung.
                Eine Langfassung wird in Kürze verfügbar sein.
              </p>
              <p className="mb-2">
                <a
                  href={data.PdfDidaktik?.publicURL}
                  target="_blank"
                  className="btn-primary btn-icon"
                >
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />
                  <span>Download Kurzfassung</span>
                </a>
              </p>
              <p className="text-xs">PDF, ca. 235KB</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div
          className="flex flex-wrap content-center items-center md:-mx-4"
          id="mint-studie-diversitaet"
        >
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <div className="overflow-hidden rounded-lg">
              <GatsbyImage
                image={data.diversityImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
                alt="Diversität in der MINT-Bildung (Unsplash / John Schaidler)"
              />
            </div>
            <p className="text-xs">Unsplash / John Schaidler</p>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center md:order-1">
            <div>
              <H3 like="h2" className="font-bold mb-6">
                Diversität in der MINT-Bildung
              </H3>
              <p>
                Diese Studie untersucht, welchen Einfluss die Dimension „Soziale
                Herkunft“ auf die MINT-Bildung von Kindern und Jugendlichen hat.
                Sie liefert gleichzeitig konkrete Empfehlungen für die Praxis,
                um mehr Chancengleichheit zu schaffen und so die Diversität in
                MINT-Berufen zu verbessern.
              </p>
              <div className="flex flex-row justify-start flex-wrap">
                <div className="my-2 ml-0 mr-4">
                  <a
                    href={data.PdfDiversitaet?.publicURL}
                    target="_blank"
                    className="btn-primary btn-icon mb-2"
                  >
                    <Icon type={IconType.DownloadIcon} width="12" height="15" />
                    <span>Download Kurzfassung</span>
                  </a>
                  <p className="mb-2 text-xs">PDF, ca. 260KB</p>
                </div>
                <div className="m-2 ml-0">
                  <a
                    href={data.PdfDiversitaetLong?.publicURL}
                    target="_blank"
                    className="btn-outline-primary btn-icon mb-2"
                  >
                    <Icon type={IconType.DownloadIcon} width="12" height="15" />
                    <span>Download Langfassung</span>
                  </a>
                  <p className="mb-2 text-xs">PDF, ca. 580KB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-10 lg:mt-10 mb-12 lg:mb-16 relative">
        <header className="max-w-4xl mx-auto">
          <H3 id="MINTstimmungsbarometer-2023" like="h2" className="font-bold">
            MINT-Stimmungsbarometer
          </H3>
          <p className="">
            Das MINT-Stimmungsbarometer ist eine jährliche Befragung von
            MINTvernetzt, bei der Vertreter:innen aus Bildung, Wissenschaft und
            Wirtschaft zu ihren persönlichen Einschätzungen und Eindrücken zur
            MINT-Bildung in Deutschland befragt werden.
          </p>
        </header>
      </section>
      <section className="container lg:mt-10 mb-16">
        <H4 className="mb-4 md:text-center font-semibold">
          Stimmungsbarometer 2023
        </H4>
        <div className="max-w-4xl mx-auto relative mb-20">
          <Mood2023 />
        </div>
        <div className="max-w-4xl mx-auto md:relative mb-20">
          <p className="md:text-center">
            Hier können die Ergebnisse des MINT-Stimmungsbarometers als PDF oder
            Einzelgrafiken heruntergeladen werden.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
            <div>
              <p className="mb-2">
                <a
                  href={data.PdfStimmung2023?.publicURL}
                  target="_blank"
                  className="btn-primary btn-icon"
                >
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />
                  <span>Download Ergebnisse</span>
                </a>
              </p>
              <p className="text-xs mb-0">PDF, ca. 1,7MB</p>
            </div>
            <div>
              <p className="mb-2">
                <a
                  href={data.Stimmung2023Zip?.publicURL}
                  target="_blank"
                  className="btn-outline-primary btn-icon mb-2"
                >
                  <Icon type={IconType.DownloadIcon} width="12" height="15" />
                  <span>Download Grafiken</span>
                </a>
              </p>
              <p className="text-xs">ZIP, ca. 11,9MB</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20 relative">
        <H4 className="mb-4 md:text-center font-semibold">
          Stimmungsbarometer 2022
        </H4>
        <div className="max-w-4xl mx-auto relative">
          <Mood2022 />
        </div>
      </section>
    </Layout>
  );
}

export default Datenfakten;

export const pageQuery = graphql`
  query DatenfaktenPage {
    heroImage: file(relativePath: { eq: "daten_fakten_hero.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488, placeholder: BLURRED)
      }
    }
    dataLabImage: file(
      relativePath: { eq: "daten_und_fakten_mockup_datalab.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 744, placeholder: BLURRED)
      }
    }
    didaktikImage: file(relativePath: { eq: "daten-fakten_didaktik.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744, placeholder: BLURRED)
      }
    }
    diversityImage: file(relativePath: { eq: "daten-fakten_diversity.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744, placeholder: BLURRED)
      }
    }
    PdfDidaktik: file(
      relativePath: { eq: "Kurzfassung_Studie_Didaktik-an-MINT-Lernorten.pdf" }
    ) {
      publicURL
    }
    PdfDiversitaet: file(
      relativePath: {
        eq: "Kurzfassung_Studie_Diversitaet-in-der-MINT-Bildung.pdf"
      }
    ) {
      publicURL
    }
    PdfDiversitaetLong: file(
      relativePath: {
        eq: "Langfassung_Studie_Diversitaet-in-der-MINT-Bildung.pdf"
      }
    ) {
      publicURL
    }
    PdfStimmung2023: file(
      relativePath: { eq: "MINT_Simmungsbarometer2023.pdf" }
    ) {
      publicURL
    }
    Stimmung2023Zip: file(
      relativePath: { eq: "MINT_Simmungsbarometer2023_Grafiken.zip" }
    ) {
      publicURL
    }
  }
`;

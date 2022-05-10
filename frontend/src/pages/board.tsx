import { H1, H2, H3, H4 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export function Board({ data }) {
  return (
    <Layout>
      <SEO title="Gremien" slug="/board" description="" image="" children="" />

      <section className="container mt-8">
        <header>
          <H1 like="h0">Unsere Gremien</H1>
          <p className="text-neutral-600 lg:text-3xl font-bold">
            Gemeinsam mit Expert:innen stark für nachhaltige MINT-Bildung
          </p>
          <H2 like="h2" className="mt-8 md:mt-16">
            Der Strategiekreis
          </H2>
          <p className="text-neutral-600 lg:text-xl lg:px-10">
            Der Strategiekreis von MINTvernetzt ist das strategische
            Steuerungsinstrument des Gesamtverbundes MINTvernetzt. Jeder
            Verbundpartner stellt dabei ein Mitglied – zusätzlich kommt
            Stephanie Kowitz-Harms als Leitung der Vernetzungsstelle hinzu. Die
            Mitglieder tagen mindestens einmal im Quartal, um offene Fragen zu
            diskutieren, bestehende Strukturen zu schärfen und die Ziele im
            Blick zu behalten.
          </p>
        </header>
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {data?.heroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.heroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="Unsere Gremien."
            />
          ) : null}
        </div>
        <p className="text-xs">
          Von links nach rechts: Arne Klauke (matrix gGmbH), Julia Saalmann
          (Nationales MINT Forum), Julia André (Körber-Stiftung), Dr. Stephanie
          Kowitz-Harms (Körber-Stiftung), Dr. Pascal Hetze (Stifterverband),
          Prof. Dr. Heidrun Stöger (Universität Regensburg)
        </p>
      </section>
    </Layout>
  );
}

export default Board;

export const pageQuery = graphql`
  query BoardPage {
    heroImage: file(
      relativePath: { eq: "themenspezial-artikel-maedchen-wettbewerb.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
  }
`;

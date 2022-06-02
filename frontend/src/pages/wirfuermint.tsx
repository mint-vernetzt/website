import { H1, H2, H3, H4 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

export function WirFuerMint({
  data,
}: {
  data: GatsbyTypes.WirFuerMintPageQuery;
}) {
  return (
    <Layout>
      <SEO
        title="WirfuerMINT"
        slug="/wirfuermint"
        description=""
        image=""
        children=""
      />

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {data?.heroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.heroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="#WirfuerMINT"
            />
          ) : null}
          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">
                #<span className="font-normal">Wirfuer</span>MINT
              </H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Eine Social-Media-Kampagne für mehr Sichtbarkeit für Eure
                Projekte!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 lg:mt-16 text-neutral-600 lg:text-xl">
        <p>
          Das ist Eure Seite! Hier findet Ihr alle Postings, die Ihr unter dem
          Hashtag #WirfuerMINT veröffentlicht habt. Im Zeitraum vom 2. bis zum
          15. Juni laufen hier live Eure Postings in der Social Wall ein und
          zeigen, wer alles hinter #WirfuerMINT steckt. Wir freuen uns, dass Ihr
          dabei seid!
        </p>
        <p>
          Für alle unter Euch, die gerade das erste Mal von der
          Social-Media-Kampagne lesen, gibt es hier ein paar
          Hintergrundinformationen: Unter dem Hashtag #WirfuerMINT findet im
          Juni unsere erste Social-Media-Kampagne statt, in der es um die
          Sichtbarkeit der MINT-Community geht. Wir wollen gemeinsam für eine
          größere Wahrnehmung und mehr Vernetzung sorgen und mit der Nutzung des
          Hashtags #WirfuerMINT Aufmerksamkeit generieren. Wie wir das machen
          und was das genau bedeutet, könnt Ihr
          <Link
            to="news/wirfuermint/"
            className="text-lilac-500 font-bold hover:underline pl-1"
          >
            hier
          </Link>{" "}
          nachlesen.
        </p>
        <p>
          Die Social Wall macht leider kein Einbinden Eurer LinkedIn Beiträge
          möglich. Diese teilen wir aber natürlich auf unserer LinkedIn Seite.
        </p>
      </section>

      <section className="container mt-8 lg:mt-16">
        <header>
          <H3 like="h1" className="md:text-center">
            <span className="font-bold">#</span>Wirfuer
            <span className="font-bold">MINT</span> - alle Postings im Überblick
          </H3>
        </header>
        <iframe
          allowFullScreen={true}
          id="wallsio-iframe"
          src="https://my.walls.io/n6375?nobackground=1&amp;show_header=0"
          className="w-full h-screen"
          loading="lazy"
          title="#WirfuerMInt"
        ></iframe>
      </section>
    </Layout>
  );
}

export default WirFuerMint;

export const pageQuery = graphql`
  query WirFuerMintPage {
    heroImage: file(
      relativePath: { eq: "wirfuermint_social_media_hero_image.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
  }
`;

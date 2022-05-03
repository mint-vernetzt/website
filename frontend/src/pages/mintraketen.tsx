import { H1 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";

export function Mintraketen() {
  return (
    <Layout>
      <SEO
        title="MINTraketen"
        slug="/mintraketen"
        description=""
        image=""
        children=""
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {//data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={undefined}
              className="w-full h-full"
              alt="Konkrete Gute-Praxis-Beispiele von MINT- Bildungsanbieter:innen."
            />
          /*) : null*/}
          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">
                MINT<span className="font-normal">raketen</span>
              </H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Konkrete Gute-Praxis-Beispiele von MINT-Bildungsanbieter:innen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintraketen;

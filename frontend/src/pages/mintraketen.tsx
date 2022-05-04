import { H1, H4 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
          {/*data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            Question: Do we need this condition?
            null assignment leads to runtime error
            an undefined image property of the GatsbyImage does not (gray image instead)*/
            <GatsbyImage
              image={undefined /* TODO */}
              className="w-full h-full"
              alt="Konkrete Gute-Praxis-Beispiele von MINT- Bildungsanbieter:innen."
            />
          /*) : null*/}
          {/* TODO: Text style is not equal to the MINTraketen.pdf template */}
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
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <p className="text-base md:px-8 lg:px-20 ">{/* TODO: Text style is not equal to the MINTraketen.pdf template */}
          Die MINTrakete ist eine Auszeichnung für außergewöhnliche Gute-Praxis-Beispiele 
          in der MINT-Bildung. Mithilfe regelmäßiger Ausschreibungen rufen wir zu wechselnden 
          Themen zur Bewerbung auf und bieten so verschiedenen Bildungsangeboten eine Bühne. 
          Es können sich also alle außerschulischen Lernorte bewerben, 
          die ein gutes Umsetzungsbeispiel zum aktuellen Ausschreibungsthema präsentieren können. 
          Die Gewinnerprojekte stellen wir Euch nach jeder Ausschreibung vor: Schaut gerne vorbei. 
          Also lernt andere und neue Projektansätze kennen und tauscht Euch in verschiedenen 
          Community-Formaten darüber aus. Im Fokus steht das gemeinschaftliche Von- und Miteinanderlernen.
          </p>
        </header>
      </section>
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              image: undefined, // TODO
              title: `Aktuelle Ausschreibung`,
              text: `Erfahrt hier alles zur aktuellen Ausschreibung und zu den Teilnahmebedingungen. Wir sind gespannt auf Eure Projekte.`,
              link: `/mintmachen/`, // TODO
            },
            {
              image: undefined, // TODO
              title: `Vergangene Ausschreibungen`,
              text: `Ihr interessiert Euch für die letzten Ausschreibungen, die Themen und Projekte, nach denen wir gesucht haben? Dann hier entlang!`,
              link: `/mintvernetzt/`, // TODO
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
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Mintraketen;

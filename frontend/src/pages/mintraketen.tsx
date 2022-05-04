import { H1, H2, H4 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ReactComponent as BadgeRocket } from "../images/Badge_02Rocket.svg";
import { Chip } from "../components/Chip/Chip";

// TODO: Get rocket data from cms
function getTemporaryRocketData() {
  let tempRocketData = [];

  for (let i=0; i < 9; i++) {
    tempRocketData[i] = {
      image: undefined, // TODO
      subimage: undefined, // TODO
      title: `Aus die Maus`,
      subtitle: 'Noctalis - Welt der Fledermäuse',
      text: `Ihr interessiert Euch für die letzten Ausschreibungen, die Themen und Projekte, nach denen wir gesucht ...`,
      link: `/mintvernetzt/`, // TODO
      externalLink: 'www.noctalis.de',
    }
  }

  return tempRocketData;
}

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

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {/*data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            Question: Do we need this condition?
            null assignment leads to runtime error,
            an undefined image property of the GatsbyImage does not (gray image instead)*/
            <GatsbyImage
              image={undefined /* TODO */}
              className="w-full h-full"
              alt="Konkrete Gute-Praxis-Beispiele von MINT- Bildungsanbieter:innen."
            />
          /*) : null*/}
          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0"> {/* Question: Why can't we use H0 here instead of H1 like="h0" */}
                MINT<span className="font-normal">raketen</span>
              </H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Konkrete Gute-Praxis-Beispiele von MINT-Bildungsanbieter:innen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <header>
          <p className="text-base md:px-8 lg:px-20 ">
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

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
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

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 pb-6 md:pb-0 md:flex-1/3 lg:flex-1/4 md:px-6 lg:px-10">
            <BadgeRocket />
            {/* <img
              className="w-full h-auto"
              src="/images/Badge_02Rocket.svg"
              alt="MINTrakete"
            /> */}
          </div>
          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Lerne hier unsere MINTraketen näher kennen
            </p>
            <H2 like="h1">
              <strong>Ausgezeichnete MINT</strong>raketen
            </H2>
            <p>
            Es gibt schon viele Gute-Praxis-Beispiele in der MINT-Bildung. 
            Die MINTraketen gehören dazu und laden zur Inspiration ein.
            </p>
          </div>
        </div>
      </section>

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="grid gap-4 lg:gap-8 grid-cols-3 md:grid-cols-3">
          { // TODO: Build array with cms data
          getTemporaryRocketData().map((teaserbox, index) => (
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
                {/* TODO: Positioning the subimage */}
                <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                  <GatsbyImage
                    image={teaserbox.subimage}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <H4 className="lg:leading-snug lg:mx-2">{teaserbox.title}</H4>
                <p className="lg:leading-snug lg:mx-2">{teaserbox.subtitle}</p>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </Link>
              {/* TODO: Styling the link element */}
              <a href={teaserbox.externalLink} className="lg:leading-snug lg:mx-2">{teaserbox.externalLink}</a>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <H2 like="h1">
          <strong>MINT</strong>news
        </H2>
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          { // TODO: Get data from cms
          [
            {
              image: undefined,
              title: `Gesucht und gefunden:`,
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.`,
              link: `/mintmachen/`, // TODO
              tags: [
                {
                  title: 'Didaktik',
                  slug: '',
                },
                {
                  title: 'MINTrakete',
                  slug: '',
                }
              ],
            },
            {
              image: undefined,
              title: `MINTrakete „Didaktik als Schlüssel“`,
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.`,
              link: `/mintvernetzt/`, // TODO
              tags: [
                {
                  title: 'Chip',
                  slug: '',
                },
                {
                  title: 'Chip',
                  slug: '',
                }
              ],
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
                <ul className="lg:mx-2 flex flex-wrap md:order-4 z-10">
                  {/* TODO: Get tags from cms */}
                  {teaserbox.tags.map((tag, index) => {
                    return (
                      <li key={`tag-${index}`}>
                        <Chip {...tag} onClick={function(){}} />
                      </li>
                    );
                  })}
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Text style and spacing is not equal to the MINTraketen.pdf template in this <section> */}
      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <H2>
          Wissenschaftliche Forschungserkenntnisse
        </H2>
        <p>
          Ihr habt Interesse an theoretischen Erkenntnissen zu Gute-Praxis-Beispielen?<br></br>
          Dann findet Ihr auf unserer Seite MINT-Bildungsforschung weitere spannende Einblicke.
        </p>
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          <div
            key={`teaserbox-0`}
            className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
          >
            <Link to={`/mint-bildungsforschung/`} className="flex flex-col h-100">
              <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                <GatsbyImage
                  image={undefined} // TODO
                  className="w-full h-auto"
                  alt=""
                />
              </div>
              <H4 className="lg:leading-snug lg:mx-2">Gendersensible MINT-Didaktik</H4>
              <p className="lg:mx-2">
                Erfahrt hier, mit welchen didaktischen Maßnahmen man Mädchen für einzelne MINT- Disziplinen 
                begeistern kann und wie wichtige Formate der Begabtenförderung immer noch von Stereotypen beeinflusst werden.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintraketen;

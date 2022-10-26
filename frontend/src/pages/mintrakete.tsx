import { H1, H2, H3, H4 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { ReactComponent as BadgeRocket } from "../images/Badge_02Rocket.svg";
import { Chip } from "../components/Chip/Chip";
import { getHostnameFromURL } from "../utils/dataTransformer";

export function Mintrakete({ data }) {
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
          {data?.heroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.heroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="Konkrete Gute-Praxis-Beispiele von MINT- Bildungsanbieter:innen."
            />
          ) : null}
          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">
                {" "}
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
          <p className="lg:text-xl md:px-8 lg:px-20 ">
            Die MINTrakete ist eine Auszeichnung für außergewöhnliche
            Gute-Praxis-Beispiele in der MINT-Bildung. Mithilfe regelmäßiger
            Ausschreibungen rufen wir zu wechselnden Themen zur Bewerbung auf
            und bieten so verschiedenen Bildungsangeboten eine Bühne. Es können
            sich also alle außerschulischen Lernorte bewerben, die ein gutes
            Umsetzungsbeispiel zum aktuellen Ausschreibungsthema präsentieren
            können. Die Gewinnerprojekte stellen wir Euch nach jeder
            Ausschreibung vor: Schaut gerne vorbei. Also lernt andere und neue
            Projektansätze kennen und tauscht Euch in verschiedenen
            Community-Formaten darüber aus. Im Fokus steht das gemeinschaftliche
            Von- und Miteinanderlernen.
          </p>
        </header>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              image:
                data.currentTender.nodes[0].featuredImage.node.localFile
                  .childImageSharp.gatsbyImageData,
              altText: data.currentTender.nodes[0].featuredImage.node.altText,
              title: data.currentTender.nodes[0].title,
              text: `Erfahrt hier alles zur aktuellen Ausschreibung und zu den Teilnahmebedingungen. Wir sind gespannt auf Eure Projekte.`,
              link: `/news/${data.currentTender.nodes[0].slug}`,
            },
            {
              image:
                data.previousTender.nodes[0].featuredImage.node.localFile
                  .childImageSharp.gatsbyImageData,
              altText: data.previousTender.nodes[0].featuredImage.node.altText,
              title: data.previousTender.nodes[0].title,
              text: `Ihr interessiert Euch für die letzten Ausschreibungen, die Themen und Projekte, nach denen wir gesucht haben? Dann hier entlang!`,
              link: `/news/${data.previousTender.nodes[0].slug}`,
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
                    alt={teaserbox.altText}
                  />
                </div>
                <H2 like="h4" className="lg:leading-snug lg:mx-2">
                  {teaserbox.title}
                </H2>
                <p className="lg:mx-2">{teaserbox.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-1/4 pb-6 md:pb-0 md:flex-1/3 lg:flex-1/4 md:px-6 lg:px-10">
            <BadgeRocket />
            {/* <img
              className="w-full h-auto"
              src="/images/Badge_02Rocket.svg"
              alt="MINTrakete"
            /> */}
          </div>
          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Lerne hier unsere MINT
              <span className="font-light">raketen</span> näher kennen
            </p>
            <H3 like="h1">
              <strong>Ausgezeichnete MINT</strong>raketen
            </H3>
            <p>
              Es gibt schon viele Gute-Praxis-Beispiele in der MINT-Bildung.
              <br></br>
              Die MINTraketen gehören dazu und laden zur Inspiration ein.
            </p>
          </div>
        </div>
      </section>
      {data.calls.nodes.map((call) => {
        const projects = data.projects.nodes.filter((project) =>
          project.calls.nodes.some(
            (projectCall) => projectCall.slug === call.slug
          )
        );

        return projects.length > 0 ? (
          <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
            <H2>{call.name}</H2>
            <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => {
                let projectHostname = getHostnameFromURL(
                  project.projectInformations.projectWebsite
                );
                return (
                  <div
                    key={`teaserbox-${index}`}
                    className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
                  >
                    <Link
                      to={`/project/${project.slug}`}
                      className="flex flex-col h-100"
                    >
                      <div className="flex flex-nowrap content-center items-center">
                        <div className="flex-1/4 overflow-hidden mb-2 lg:mb-4 lg:leading-snug lg:mx-2">
                          <GatsbyImage
                            image={
                              project.projectInformations.projectLogo.localFile
                                .childImageSharp.gatsbyImageData
                            }
                            className="w-fit h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex-3/4 mb-4">
                          <H3
                            like="h5"
                            className="line-clamp-2 lg:leading-snug lg:mx-2"
                          >
                            {project.title}
                          </H3>
                          <p className="lg:leading-snug lg:mx-2 text-xs">
                            <strong>
                              {project.projectInformations.institution}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div
                        className="line-clamp-2 lg:mx-2"
                        dangerouslySetInnerHTML={{
                          __html: project.excerpt as string,
                        }}
                      />
                    </Link>
                    <div className="mt-2">
                      <a
                        href={project.projectInformations.projectWebsite}
                        className="lg:leading-snug lg:mx-2 text-lilac-500 font-bold hover:underline"
                      >
                        {projectHostname === null
                          ? project.projectInformations.projectWebsite
                          : projectHostname}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : null;
      })}

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <H2 like="h1">
          <strong>MINT</strong>news
        </H2>
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {data.news.nodes.map((news, index) => (
            <div
              key={`teaserbox-${index}`}
              className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
            >
              <Link to={`/news/${news.slug}`} className="flex flex-col h-100">
                <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                  <GatsbyImage
                    image={
                      news.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    className="w-full h-auto"
                    alt={news.featuredImage.node.altText}
                  />
                </div>
                <H4 className="lg:leading-snug lg:mx-2">{news.title}</H4>
                <div
                  className="line-clamp-2 lg:mx-2"
                  dangerouslySetInnerHTML={{
                    __html: news.excerpt as string,
                  }}
                />
              </Link>
              <ul className="lg:mx-2 flex flex-wrap md:order-4 z-10">
                {news.tags.nodes.map((tag, index) => {
                  return (
                    <li key={`tag-${index}`}>
                      <Chip
                        title={tag.name}
                        slug={tag.slug}
                        onClick={() =>
                          (document.location.href = `/news/?tags=${tag.slug}`)
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <H2>Erkenntnisse aus der MINT-Bildungsforschung</H2>
        <p>
          Ihr habt Interesse an wissenschaftlichen Erkenntnissen zu
          Gute-Praxis-Beispielen und mehr Informationen aus der Forschung zu
          gelingender MINT-Bildung? Dann findet ihr auf dieser Seite weitere
          spannende Einblicke.
        </p>
        <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2">
          <div
            key={`teaserbox-0`}
            className="p-4 pb-8 md:p-2 md:pb-8 lg:p-4 lg:pb-8 rounded-lg bg-neutral-200 shadow-lg"
          >
            <Link
              to={`/mint-bildungsforschung/`}
              className="flex flex-col h-100"
            >
              <div className="rounded-lg overflow-hidden mb-2 lg:mb-4">
                <GatsbyImage
                  image={
                    data?.mintBildungsforschungImage?.childImageSharp
                      ?.gatsbyImageData
                  }
                  className="w-full h-auto"
                  alt="MINT-Bildungsforschung"
                />
              </div>
              <H4 className="lg:leading-snug lg:mx-2">
                Gendersensible MINT-Didaktik
              </H4>
              <p className="lg:mx-2">
                Erfahrt hier, mit welchen didaktischen Maßnahmen man Mädchen für
                einzelne MINT-Disziplinen begeistern kann und wie wichtige
                Formate der Begabtenförderung immer noch von Stereotypen
                beeinflusst werden.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintrakete;

export const pageQuery = graphql`
  query MintraketePage {
    heroImage: file(
      relativePath: { eq: "themenspezial-artikel-maedchen-wettbewerb.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
    mintBildungsforschungImage: file(
      relativePath: { eq: "mint-bildungsforschung.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    projects: allWpProject(sort: { fields: [title], order: ASC }) {
      nodes {
        title
        projectInformations {
          institution
          projectWebsite
          projectLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 80, quality: 100)
              }
            }
          }
        }
        excerpt
        slug
        calls {
          nodes {
            slug
          }
        }
      }
    }
    calls: allWpCall(sort: { fields: [id], order: DESC }) {
      nodes {
        name
        slug
      }
    }
    news: allWpNewsItem(
      filter: { tags: { nodes: { elemMatch: { name: { eq: "MINTrakete" } } } } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        tags {
          nodes {
            slug
            name
          }
        }
        title
        slug
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100)
              }
            }
          }
        }
      }
    }
    currentTender: allWpNewsItem(
      filter: {
        title: { eq: "MINTrakete – MINT trifft Kunst und Kreativität" }
      }
    ) {
      nodes {
        slug
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100)
              }
            }
          }
        }
      }
    }
    previousTender: allWpNewsItem(
      filter: { title: { eq: "MINTrakete „Didaktik als Schlüssel“" } }
    ) {
      nodes {
        slug
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 700, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`;

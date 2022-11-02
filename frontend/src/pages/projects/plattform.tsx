import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { H1, H2, H3, H4 } from "../../components/Heading/Heading";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { ReactComponent as BadgeRocket } from "../../images/Badge_02Rocket.svg";
import ContactCard from "../../components/ContactCard/ContactCard";
import Icon, { IconType } from "../../components/Icon/Icon";

export function Plattform({
  data,
}: {
  data: GatsbyTypes.PlattformPageQuery;
}) {
  const contactKlauke = data.contactKlauke?.contactInformations;
  const contactLeffers = data.contactLeffers?.contactInformations;

  return (
    <Layout>
      <SEO
        title="MINTvernetzt Plattform"
        slug="/projects/plattform/"
        description="Austausch, Vernetzung und Inspiration aus der Community für Eure MINT-Praxis."
        image={data?.heroImage?.publicURL}
        children=""
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
              <H1 like="h0">MINTvernetzt Plattform</H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Austausch, Vernetzung und Inspiration aus der Community für Eure
                MINT-Praxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap items-center md:-mx-6 lg:-mx-10">
          <div className="mb-6 md:mb-0 md:px-6 lg:px-10 md:w-1/2">
            <H2 like="h1">Entdecken und Vernetzen</H2>
            <p className="text-xl mb-8">
              Die bundesweite MINT-Community lebt davon, sich auszutauschen,
              Wissen zu teilen, von- und miteinander zu lernen. Einer der
              Lösungswege ist unser digitaler Dorfplatz: die
              Community-Plattform, auf der Ihr Euch untereinander und mit
              Organisationen vernetzen könnt. Ihr sucht Inspiration oder
              Expert:innen zu konkreten Themen in Eurer Umgebung? Meldet Euch an
              und vernetzt Euch miteinander!
            </p>
            <p>
              <a
                href="https://community.mint-vernetzt.de/explore/profiles"
                className="btn-primary"
                target="_blank"
              >
                Jetzt anmelden
              </a>
            </p>
          </div>
          <div className="md:px-6 lg:px-10 md:w-1/2">
            <GatsbyImage
              image={data?.PlattformImage?.childImageSharp?.gatsbyImageData}
              className=""
              alt="Entdecken und Vernetzen"
            />
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 md:order-2">
            <div className="h-full bg-[#EFE8E6] flex items-center rounded-3xl aspect-4/3">
              <BadgeRocket className="w-1/2 h-1/2 mx-auto" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center md:order-1">
            <div>
              <H3 like="h1">
                Wissen teilen und Inspirationen finden – Gute-Praxis-Projekte
              </H3>
              <p>
                Niemand weiß besser, wie man junge Menschen für MINT begeistert,
                als die MINT-Community selbst. Auf der Community-Plattform
                findet Ihr deswegen in Kürze Gute-Praxis- Projekte aus anderen
                Regionen und von anderen Akteur:innen. Neben Inspirationen und
                der Möglichkeit Rückfragen zu den Angeboten zu stellen, könnt
                Ihr aber auch Eure eigenen Angebote einstellen und mit der
                Gemeinschaft teilen. Die Projekte könnt Ihr nach Schwerpunkten
                filtern und suchen. Besonders ausgezeichnete Gute
                Praxis-Projekte findet Ihr mit der Kennzeichnung der
                MINT-Rakete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 aspect-4/3 flex items-center">
            <GatsbyImage
              image={data.plattformEventImage?.childImageSharp?.gatsbyImageData}
              className="w-full h-auto"
              alt="Die Community treffen und voneinander lernen"
            />
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H3 like="h1">Die Community treffen und voneinander lernen</H3>
              <p>
                Ihr wollt Euch über spannende Veranstaltungen informieren? Hier
                könnt Ihr Euch direkt für unsere Veranstaltungsformate anmelden
                und Euch im Anschluss mit anderen Teilnehmenden vernetzen. In
                Kürze habt Ihr die Möglichkeit, eigene Netzwerk- und
                Austauschveranstaltungen für die MINT-Community sowie
                Interessierte aus der MINT-Bildung einzustellen.
              </p>
              <p>
                <a
                  href="https://community.mint-vernetzt.de/explore/events"
                  target="_blank"
                  className="btn-primary"
                >
                  Veranstaltungen entdecken
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 md:order-2">
            <div className="overflow-hidden rounded-3xl aspect-4/3">
              <GatsbyImage
                image={data.hackathonImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
                alt="Die Entstehung der Community-Plattform: Co-Kreativ und partizipativ"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center md:order-1">
            <div>
              <H3 like="h1">
                Die Entstehung der Community-Plattform: Co-Kreativ und
                partizipativ
              </H3>
              <p>
                Damit die Funktionen des Community-Bereichs genau da ansetzen,
                wo sie benötigt werden, setzen wir in der Entwicklung auf
                Partizipation und Co-Kreation auf zwei Ebenen: MINT-Akteur:innen
                wirken aktiv auf die Tools und das Design ein. Ihre Bedarfe
                stehen im Fokus, sodass Programmierer:innen aus der Community
                passende Features entwickeln, die durch das MINTvernetzt-Webteam
                geprüft und in die Entwicklung eingebunden werden. Ein Format
                dafür ist unser MINTvernetzt-Hackathon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 md:mb-10 lg:mb-20">
        <div className="flex flex-wrap content-center items-center md:-mx-4">
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4">
            <div className="overflow-hidden rounded-3xl aspect-4/3">
              <GatsbyImage
                image={data.activeImage?.childImageSharp?.gatsbyImageData}
                className="w-full h-full object-cover"
                alt="Die Entstehung der Community-Plattform: Co-Kreativ und partizipativ"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-initial mb-6 md:mb-0 md:px-4 flex items-center">
            <div>
              <H3 like="h1">Jetzt aktiv mitgestalten</H3>
              <p>
                Du bist MINT-Akteur:in, Designer:in oder Programmierer:in und
                möchtest die Plattform aktiv mitgestalten? Melde dich bei Arne
                Klauke und Inga Leffersoder tritt mit uns über{" "}
                <a
                  href="mailto:community@mint-vernetzt.de"
                  className="text-lilac-500 whitespace-nowrap"
                >
                  community@mint-vernetzt.de
                </a>{" "}
                in Kontakt.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="grid gap-y-8 lg:-mx-8 grid-cols-1 md:grid-cols-2 pt-8 flex-initial">
            <div className="">
              <ContactCard
                headline=""
                name={`${contactKlauke.firstName} ${contactKlauke.lastName}`}
                position={contactKlauke.position}
                phone={contactKlauke.phone}
                email={contactKlauke.email}
                avatar={{
                  src: contactKlauke?.photo?.localFile?.childImageSharp
                    ?.gatsbyImageData,
                  alt: `${contactKlauke.firstName} ${contactKlauke.lastName}`,
                }}
              />
            </div>
            <div className="">
              <ContactCard
                headline=""
                name={`${contactLeffers.firstName} ${contactLeffers.lastName}`}
                position={contactLeffers.position}
                phone={contactLeffers.phone}
                email={contactLeffers.email}
                avatar={{
                  src: contactLeffers?.photo?.localFile?.childImageSharp
                    ?.gatsbyImageData,
                  alt: `${contactLeffers.firstName} ${contactLeffers.lastName}`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Plattform;

export const pageQuery = graphql`
  query PlattformPage {
    heroImage: file(relativePath: { eq: "hero_plattform.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1488)
      }
    }
    PlattformImage: file(relativePath: { eq: "mockup_plattform.png" }) {
      childImageSharp {
        gatsbyImageData(width: 560)
      }
    }
    plattformEventImage: file(relativePath: { eq: "plattform_event.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    hackathonImage: file(relativePath: { eq: "plattform_hackathon.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 744)
      }
    }
    activeImage: file(relativePath: { eq: "plattform_aktiv.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 496)
      }
    }
    contactKlauke: wpContact(
      contactInformations: { lastName: { eq: "Klauke" } }
    ) {
      contactInformations {
        firstName
        lastName
        position
        email
        phone
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 144)
            }
          }
        }
      }
    }
    contactLeffers: wpContact(
      contactInformations: { lastName: { eq: "Leffers" } }
    ) {
      contactInformations {
        firstName
        lastName
        position
        email
        phone
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 144)
            }
          }
        }
      }
    }
  }
`;


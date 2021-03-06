import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { ReactComponent as Header } from "../images/mintvernetzt_header.svg";
import { H1, H2 } from "../components/Heading/Heading";
import Icon, { IconType } from "../components/Icon/Icon";
import ContactCard from "../components/ContactCard/ContactCard";

export function Mintvernetzt({
  data,
}: {
  data: GatsbyTypes.MintvernetztPageQuery;
}) {
  const pageContact = data.PageContact.contactInformations;

  return (
    <Layout>
      <SEO
        title="MINTvernetzt informiert"
        slug="/mintvernetzt"
        description=""
        image=""
        children=""
      />

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4">
          <div className="flex-100 md:flex-5/12 md:px-4">
            <Header />
            {/* <img
              src="../images/mintvernetzt_header.svg"
              className="w-full h-auto"
              alt="MINTvernetzt informiert"
            /> */}
          </div>
          <div className="flex-100 md:flex-7/12 md:px-4 md: self-center">
            <H1 like="h0">
              MINT<span className="font-normal">vernetzt</span> informiert
            </H1>

            <p className="lg:text-xl">
              Mit Wissensaustausch zu besserer MINT-Bildung: Um Euch stets über
              Neuigkeiten, Ideen und Innovationen zu informieren und Euch
              Möglichkeiten zu geben, Eure Erkenntnisse untereinander zu teilen,
              haben wir verschiedene Kanäle aufgebaut, auf denen Ihr aktuelle
              Informationen aus der MINT-Welt findet.
            </p>
            <div className="lg:-mx-8">
              <ContactCard
                headline=""
                name={`${pageContact.firstName} ${pageContact.lastName}`}
                position={pageContact.position}
                phone={pageContact.phone}
                email={pageContact.email}
                avatar={{
                  src: pageContact?.photo?.localFile?.childImageSharp
                    ?.gatsbyImageData,
                  alt: `${pageContact.firstName} ${pageContact.lastName}`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4 lg:-mx-20">
          <div className="flex-100 pb-8 md:pb-0 md:flex-1/2 md:px-4 lg:px-20">
            {data.NewsImage?.childImageSharp?.gatsbyImageData !== undefined ? (
              <GatsbyImage
                image={data.NewsImage.childImageSharp.gatsbyImageData}
                className="w-full h-auto rounded-2xl shadow-md mb-6"
                alt="null"
              />
            ) : null}

            <H2 like="h1">MINTnews</H2>
            <p className="lg:text-3xl font-bold mb-2">Der MINTvernetzt-Blog</p>
            <p className="lg:text-xl">
              Informieren, inspirieren, Emotionen wecken: Wir geben Euch
              Einblicke in die MINT-Welt und schauen auch über den Tellerrand,
              stellen Euch interessante Persönlichkeiten vor und Erkenntnisse
              aus der Forschung. Immer mit dem Fokus, einen Mehrwert für Eure
              Arbeit zu schaffen.
            </p>
            <p>
              <Link to="/news/" className="text-lilac-500 font-bold">
                Zu den Neuigkeiten
              </Link>
            </p>
          </div>

          <div className="flex-100 md:flex-1/2 md:px-4 lg:px-20">
            {data.BlogImage?.childImageSharp?.gatsbyImageData !== undefined ? (
              <GatsbyImage
                image={data.BlogImage.childImageSharp.gatsbyImageData}
                className="w-full h-auto rounded-2xl shadow-md mb-6"
                alt="null"
              />
            ) : null}

            <H2 like="h1">Community Blog</H2>
            <p className="lg:text-3xl font-bold mb-2">
              Infos von Euch für Euch
            </p>
            <p className="lg:text-xl">
              Auf der MINTvernetzt-Plattform entsteht ein Blog von
              MINT-Akteur:innen für die MINT-Akteur:innen! Wir teilen gemeinsam
              mit Euch spannende Gute Praxis-Beispiele, erarbeiten innovative
              Inhalte und sorgen so für ganz viel Wissenstransfer.
            </p>
            <p>Weitere Infos folgen In Kürze.</p>
          </div>
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap md:-mx-4 lg:-mx-20">
          <div className="flex-100 pb-8 md:pb-0 md:flex-1/2 md:px-4 lg:px-20">
            {data.SocialmediaImage?.childImageSharp?.gatsbyImageData !==
            undefined ? (
              <GatsbyImage
                image={data.SocialmediaImage.childImageSharp.gatsbyImageData}
                className="w-full h-auto rounded-2xl shadow-md mb-6"
                alt="null"
              />
            ) : null}

            <H2 like="h1">#SocialMedia</H2>
            <p className="lg:text-xl">
              Teilen, liken, verlinken: gemeinsam mit Euch wollen wir die
              MINT-Bildung besser machen. Also folgt uns auf unsere Social Media
              Kanälen und teilt Eure Projekte, Ideen und Tipps mit uns!
            </p>
            <p className="lg:text-xl">Folgt uns in den sozialen Medien.</p>
            <div className="flex">
              <div className="icon w-12 h-12 mb-2 border border-secondary-500 rounded-full mr-2">
                <a href="https://twitter.com/mintvernetzt" target="_blank">
                  <Icon
                    type={IconType.Twitter}
                    width="48"
                    height="48"
                    scaleFactor={0.67}
                  />
                </a>
              </div>
              <div className="icon w-12 h-12 mb-2 border border-secondary-500 rounded-full mr-2">
                <a
                  href="https://www.instagram.com/mintvernetzt/"
                  target="_blank"
                >
                  <Icon
                    type={IconType.Instagram}
                    width="48"
                    height="48"
                    scaleFactor={0.67}
                  />
                </a>
              </div>
              <div className="icon w-12 h-12 mb-2 border border-secondary-500 rounded-full mr-2">
                <a
                  href="https://www.linkedin.com/company/mintvernetzt"
                  target="_blank"
                >
                  <Icon
                    type={IconType.LinkedIn}
                    width="48"
                    height="48"
                    scaleFactor={0.67}
                  />
                </a>
              </div>
              <div className="icon w-12 h-12 mb-2 border border-secondary-500 rounded-full">
                <a
                  href="https://www.youtube.com/channel/UCVQSAkscPmmPmjYWDVuvQYg"
                  target="_blank"
                >
                  <Icon
                    type={IconType.Youtube}
                    width="48"
                    height="48"
                    scaleFactor={0.67}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            id="newsletter"
            className="flex-100 md:flex-1/2 md:px-4 lg:px-20"
          >
            {data.NewsletterImage?.childImageSharp?.gatsbyImageData !==
            undefined ? (
              <GatsbyImage
                image={data.NewsletterImage.childImageSharp.gatsbyImageData}
                className="w-full h-auto rounded-2xl shadow-md mb-6"
                alt="null"
              />
            ) : null}

            <H2 like="h1">#Newsletter</H2>
            <p className="lg:text-xl">
              Alle acht Wochen schicken wir Euch digitale Grüße mit Einblicken
              in die Community, Hinweisen zu Neuigkeiten und Veranstaltungen,
              die Euch interessieren.
            </p>
            <div className="">
              <iframe
                loading="lazy"
                width="100%"
                height="700px"
                src="https://ce0c4c32.sibforms.com/serve/MUIEADIw3mjL_TRpeKjMOqlVzfZeBFxOlaMblMiGnRTPjm2qdRgiZ1_Ot8EiKwf77H3Pe7c8sTq2BcYsphUq4BtTdaILzAONTZrS1F0zJx7hdFaexKl84ZxgoGoUFDMvhFTM9DRmjJW2a6Y1YS7-DhkWJrby6GmL7KDuegzukDXFhwkB_hftIUGRSSI3Ka4aU4i_LNUPdgFosFmp"
                frameBorder="0"
                scrolling="auto"
                allowFullScreen={true}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  maxHeight: "3234px",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mintvernetzt;

export const pageQuery = graphql`
  query MintvernetztPage {
    PageContact: wpContact(
      contactInformations: { lastName: { eq: "Kellner" } }
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
    NewsImage: file(relativePath: { eq: "mood_news.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 664)
      }
    }
    BlogImage: file(relativePath: { eq: "mood_wuerfel.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 664)
      }
    }
    SocialmediaImage: file(relativePath: { eq: "mood_social-media.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 664)
      }
    }
    NewsletterImage: file(relativePath: { eq: "mood_newsletter.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 664)
      }
    }
  }
`;

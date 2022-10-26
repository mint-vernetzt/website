import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Icon, { IconType } from "../../components/Icon/Icon";
import UserCardContainer from "../../components/UserCard/UserCardContainer";
import { ReactComponent as Logo } from "../../images/logo-mint-vernetzt.svg";
import { getUserCardsProps } from "../../utils/dataTransformer";
import { H1, H2, H3 } from "../../components/Heading/Heading";
import { getOrganizationsData } from "../../utils/dataTransformer";
import { OrganizationBoxContainer } from "../../components/OrganizationBox/OrganizationBoxContainer";

export function WerIst({ data }: { data: GatsbyTypes.WerIstPageQuery }) {
  const userCardsProps = getUserCardsProps(data.usersData);

  const organisations = getOrganizationsData(data.organizationsData);

  const caseInsensitiveSortedOrganization = organisations.sort((a, b) => {
    return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
  });
  
  return (
    <Layout>
      <SEO title="Wer ist MINTvernetzt?" slug="/about/wer-ist/" description="" image="" children="" />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="flex flex-wrap content-center items-center md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-6 lg:px-10">
            <Logo />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10">
            <H1 like="h0">
              <span className="font-normal">Wer ist</span>
              <br />
              MINT<span className="font-normal">vernetzt</span>?
            </H1>

            <p className="lg:text-3xl text-neutral-600 mb-4 font-bold">
              Die Service- und Anlaufstelle für MINT-Akteur:innen in Deutschland
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Die MINT-Vernetzungsstelle, kurz MINTvernetzt, ist das Dach für
              die außerschulische MINT-Bildung in Deutschland. MINTvernetzt wird
              vom Bundesministerium für Bildung und Forschung gefördert und von
              Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, dem
              Nationalen MINTForum e.V., dem Stifterverband und der Universität
              Regensburg als Verbund gemeinsam umgesetzt.
            </p>
          </div>
        </div>
      </section>

      <section
        className="container my-8 md:my-10 lg:my-20"
        id="contact-details"
      >
        <header>
          <H2 like="h1">Für jede Frage die richtige Adresse</H2>
          <p className="lead">
            Ihr habt eine Frage, sucht Informationen oder möchtet eine Idee mit
            uns teilen?<br />Wir sind als Ansprechpartner:innen von MINTvernetzt
            gerne für Euch da.
          </p>
        </header>

        <div
          data-testid="grid"
          className="flex flex-wrap justify-center lg:mx-3 items-stretch"
        >
          {[
            {
              title: `Leitung`,
              text: `Stephanie Kowitz-Harms ist der strategische Kopf bei MINTvernetzt. Für Anfragen als Speakerin oder die Umsetzung gemeinsamer Bildungsvisionen im MINT-Bereich erreicht Ihr sie auf diesen Kanälen.`,
              phone: `040 808192152`,
              mail: `stephanie.kowitz-harms@mint-vernetzt.de`,
            },
            {
              title: `Service-Hotline`,
              text: `Ihr habt allgemeine Fragen, Informationen oder Ideen? Dann richtet sie gerne an Ina Liebmann, unser Gesicht hinter der Service-Hotline.`,
              phone: `040 88215690`,
              mail: `info@mint-vernetzt.de`,
            },
            {
              title: `Community`,
              text: `Erste Ansprechperson für alle Belange rund um unsere digitale Community-Plattform ist Inga Leffers. Ihr erreicht sie auf diesem Wege:`,
              phone: `0211 75707314`,
              mail: `inga.leffers@mint-vernetzt.de`,
            },
            {
              title: `Veranstaltungen`,
              text: `Julia Novik erweckt unsere Veranstaltungen zum Leben und freut sich über Eure Fragen und Tipps.`,
              phone: `0160 94406027 `,
              mail: `julia.novik@mint-vernetzt.de`,
            },
            {
              title: `Kommunikation`,
              text: `Den Blick nach außen hat bei uns Anna Kellner. Für Presse- und Öffentlichkeitsarbeit, Kooperationen und Kampagnen ist sie die richtige Adresse.`,
              phone: `0175 8411669`,
              mail: `anna.kellner@mint-vernetzt.de`,
            },
          ].map((contactbox, index) => (
            <div
              key={`contactbox-${index}`}
              data-testid="gridcell"
              className="flex-100 md:flex-1/2 lg:flex-1/3 px-2 lg:px-3 mb-6"
            >
              <div className="flex flex-wrap content-between items-stretch px-4 pt-4 pb-8 rounded-3xl shadow h-full">
                <div className="mb-4">
                  <H3 like="h4">{contactbox.title}</H3>
                  <p className="text-neutral-600 mb-3 md:mb-6">
                    {contactbox.text}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-800 font-semibold mb-4">
                    <a
                      href={`tel:${contactbox.phone}`}
                      className="flex items-center"
                    >
                      <span className="icon w-4 h-4 mr-2">
                        <Icon type={IconType.Telephone} />
                      </span>
                      <span>{contactbox.phone}</span>
                    </a>
                  </p>
                  <p className="text-xs text-neutral-800 font-semibold">
                    <a
                      href={`mailto:${contactbox.mail}`}
                      className="flex items-center"
                    >
                      <span className="icon w-4 h-4 mr-2 ">
                        <Icon type={IconType.Envelope} />
                      </span>
                      <span>{contactbox.mail}</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <UserCardContainer
          headline={<H2 like="h1">Das Team</H2>}
          body="Wir sind MINTvernetzt – ein junges, engagiertes Team mit unterschiedlichen Erfahrungen, Kompetenzen und Hintergründen. Hier findet Ihr alle Teammitglieder mit ihren Aufgaben. Wir freuen uns auf den Austausch mit Euch."
          userCardsProps={userCardsProps}
        />
      </section>

      <section className="container my-8 md:my-10 lg:my-20">
        <OrganizationBoxContainer
          headline="Der Verbund"
          body="Herausforderungen lösen wir gemeinsam. MINT-Potenziale heben wir im Team. MINTvernetzt ist ein Verbundprojekt, das gemeinsam von Mitarbeitenden der Körber-Stiftung, der matrix gGmbH, des Nationalen MINTForums e.V., des Stifterverbands und der Universität Regensburg umgesetzt wird. Zusammen blicken wir auf viel Erfahrung in der MINT-Bildung, die wir bei MINTvernetzt bündeln und weiterentwickeln wollen. Hier findet Ihr die unterschiedlichen Zuständigkeiten der Verbundpartner bei MINTvernetzt."
          organisations={caseInsensitiveSortedOrganization}
        />
      </section>
    </Layout>  
  )
}

export default WerIst;

export const pageQuery = graphql`
  query WerIstPage {
    usersData: allWpContact(
      sort: { fields: contactInformations___lastName, order: ASC }
    ) {
      nodes {
        contactInformations {
          firstName
          lastName
          email
          title
          position
          organization {
            ... on WpOrganization {
              id
              title
              organizationInformations {
                url
                logo {
                  altText
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
          phone
          photo {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
            altText
          }
        }
      }
    }
    organizationsData: allWpOrganization(
      sort: { fields: organizationInformations___name, order: ASC }
    ) {
      nodes {
        organizationInformations {
          name
          description
          url
          logo {
            altText
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`;

import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { ReactComponent as PaktOverview } from "../../images/project_pakt.svg";

import {
  getPaktDataByCategory,
  PaktDataByCategory,
} from "../../utils/dataTransformer";
import { H1 } from "../../components/Heading/Heading";
import ContactCard from "../../components/ContactCard/ContactCard";
import Icon, { IconType } from "../../components/Icon/Icon";

/* eslint-disable-next-line */
export interface MintPaktProps {}

const getCategorySlugFromMember = (slug: string) => {
  return slug.split("/")[0] ?? "no-category";
};

export function MintPakt({ data }) {
  const paktDataByCategory: PaktDataByCategory = getPaktDataByCategory(
    data.paktData.edges
  );
  const categories = Object.keys(paktDataByCategory);

  React.useEffect(() => {
    // accordeon toggle
    document.querySelectorAll(".pakt-category").forEach(($category) => {
      $category.addEventListener("click", (event) => {
        // event.preventDefault();
        document
          .querySelectorAll(".pakt-category.active")
          .forEach(($active) => {
            if ($category !== $active) {
              $active.classList.remove("active");
            }
          });
        $category.classList.toggle("active");
        setTimeout(() => {
          $category.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 500);
      });
    });
  }, []);

  return (
    <Layout>
      <SEO
        title={`Bündnis für Frauen`}
        slug={`/projects/mint-buendnis/`}
        description={""}
        image={""}
        children={""}
      />
      <section className="container mt-8 md:mt-10 lg:mt-20">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 lg:flex-1/3 lg:order-2 pb-4 lg:pb-0 lg:px-10">
            <PaktOverview />

            <ContactCard
              classes="contact-card my-10"
              headline="Ansprechpartner:in"
              name={`${data.wpContact.contactInformations.title || ""} ${
                data.wpContact.contactInformations.firstName
              } ${data.wpContact.contactInformations.lastName}`.trim()}
              position={data.wpContact.contactInformations.position}
              phone={data.wpContact.contactInformations.phone}
              email={data.wpContact.contactInformations.email}
              avatar={{
                src: data.wpContact.contactInformations.photo.localFile
                  .childImageSharp.gatsbyImageData,
                alt: `${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}`,
              }}
            />

            <ul className="document-list">
              <li className="mb-2">
                <a
                  href="https://cms.mint-vernetzt.de/app/uploads/2023/02/230208_Leitbild_Buendnis_fuer_Frauen.pdf"
                  target="_blank"
                  className="flex item-center bg-beige-300 border border-neutral-400 rounded-lg mb-2"
                >
                  <span className="icon w-8 h-8 mb-2 m-4 mr-0">
                    <Icon type={IconType.FilePDF} width="32" height="32" />
                  </span>
                  <div className="my-3 mx-4">
                    <span className="block text-xs text-neutral-600 uppercase">
                      PDF 0,2 MB
                    </span>
                    <div>
                      <p>Leitbild Bündnis für Frauen</p>
                    </div>
                  </div>
                  <div className="icon w-8 h-8 mb-2 m-4 ml-auto">
                    <Icon type={IconType.Download} width="32" height="32" />
                  </div>
                </a>
                <a
                  href="https://cms.mint-vernetzt.de/app/uploads/2023/02/empowerMINT_Kommunikationskit.pdf"
                  target="_blank"
                  className="flex item-center bg-beige-300 border border-neutral-400 rounded-lg"
                >
                  <span className="icon w-8 h-8 mb-2 m-4 mr-0">
                    <Icon type={IconType.FilePDF} width="32" height="32" />
                  </span>
                  <div className="my-3 mx-4">
                    <span className="block text-xs text-neutral-600 uppercase">
                      PDF 0,2 MB
                    </span>
                    <div>
                      <p>#empowerMINT Kommunikationskit</p>
                    </div>
                  </div>
                  <div className="icon w-8 h-8 mb-2 m-4 ml-auto">
                    <Icon type={IconType.Download} width="32" height="32" />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-100 lg:flex-2/3 lg:px-10 lg:order-1">
            <H1 like="h0">Bündnis für Frauen in MINT-Berufen</H1>
            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              #empowerMINT #FrauenInMINT
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Das Bündnis für Frauen in MINT-Berufen hat es sich in einem
              gemeinsamen Leitbild zum Ziel gesetzt, Mädchen und junge Frauen
              für MINT-Ausbildungen, -Studiengänge und -Berufe zu begeistern und
              in ihrem Werdegang zu unterstützen. So trägt das Bündnis zu mehr
              Teilhabe in der Gesellschaft, zur Sicherung des Innovations- und
              Wirtschaftsstandorts Deutschland und zur Lösung globaler
              Herausforderungen bei.
            </p>
            <p className="lg:text-xl text-neutral-600 mb-16">
              Das Bündnis wurde 2008 vom Bundesministerium für Bildung und
              Forschung initiiert und wird seit September 2021 von der
              Kompetenz- und Vernetzungsstelle MINTvernetzt koordiniert. Über
              300 Mitglieder aus rund 260 verschiedenen Institutionen aus
              Wirtschaft, Bildung und Wissenschaft, Medien und Politik haben
              sich seither im Bündnis zusammengeschlossen, um gemeinsam einen
              Beitrag dafür zu leisten, Mädchen und Frauen stärker für
              MINT-Ausbildungen, -Studiengänge und -Berufe zu begeistern.
            </p>
            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              #empowerMINT-Kampagne 2023
            </p>
            <p className="lg:text-xl text-neutral-600 mb-4">
              Zusammen mit den Mitgliedern des Bündnisses möchten wir auf das
              Engagement für Frauen in MINT-Berufen aufmerksam machen - und das
              in einer möglichst breiten Öffentlichkeit. Denn noch immer
              entscheiden sich zu wenige Frauen für eine MINT-Ausbildung oder
              ein -Studium. Das wollen wir ändern! Zum Weltfrauentag am 8. März
              2023 starten wir daher eine zweiwöchige Social-Media-Offensive
              unter dem gemeinsamen Hashtag #empowerMINT. Wir wollen zeigen,
              welche Unternehmen und Organisationen bereits aktiv sind, was sie
              antreibt und wie sie sich konkret engagieren. Wir freuen uns,
              gemeinsam laut zu werden!
            </p>
            <p className="lg:text-xl text-neutral-600 mb-16">
              Um die Aufmerksamkeit und Sichtbarkeit zu erhöhen, haben wir
              passend zum Hashtag #empowerMINT eine gemeinsame Bildsprache
              entwickelt. Dafür haben wir ein Kommunikations-Kit erstellt, das
              wir Ihnen gerne zusenden. Ein Infosheet zur #empowerMINT-Kampagne
              finden Sie zudem an der Seite zum Download bereit. Bei Fragen
              melden Sie sich bei{" "}
              <a
                className="text-lilac-500 hover:underline"
                href="mailto:nele.gerkens@mint-vernetzt.de"
              >
                Dr. Nele Gerkens
              </a>{" "}
              – wir unterstützen Sie gerne auch bei der Umsetzung.
            </p>

            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              Liste der aktuellen Mitglieder im Bündnis für Frauen in
              MINT-Berufen:
            </p>

            <ul className="pakt-list">
              {categories.map((category, index) => {
                const categorySlug = getCategorySlugFromMember(
                  paktDataByCategory[category][0].slug
                );

                return (
                  <li
                    key={category}
                    id={categorySlug}
                    className="pakt-category relative overflow-hidden"
                  >
                    <a
                      href={`#${categorySlug}`}
                      className="block font-bold text-blue-500 md:text-3xl md:leading-snug py-3 flex item-center"
                    >
                      {category}
                    </a>
                    <ul className="pakt-member max-h-0 overflow-hidden transition-all ease-in-out duration-300 px-6 md:px-8">
                      {paktDataByCategory[category].map((member) => (
                        <li key={member.slug} className="py-2">
                          <Link
                            to={`/pakt/${member.slug}`}
                            className="block md:text-2xl"
                          >
                            {member.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <p className="lg:text-3xl mb-2 lg:mb-4 font-bold">
              Interesse an Mitgliedschaft
            </p>
            <p className="lg:text-xl text-neutral-600 mb-16">
              Sie und Ihre Organisation unterstützen die Vorhaben des Bündnis
              und möchten sich als Mitglied engagieren? Dann schicken Sie bitte
              eine{" "}
              <a
                href={`mailto:${data.wpContact.contactInformations.email}`}
                className="text-lilac-500 hover:underline"
              >
                E-Mail
              </a>{" "}
              an{" "}
              {`${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}`}
              . Wir melden uns persönlich bei Ihnen zurück. Bitte lesen Sie
              vorher das Leitbild und melden Sie sich gerne bei Fragen bei uns.
              Die Mitgliedschaft ist kostenfrei. Ihr Beitritt zum Bündnis für
              Frauen in MINT-Berufen wird erst mit der schriftlichen Bestätigung
              durch MINTvernetzt wirksam.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MintPakt;

export const pageQuery = graphql`
  query MintPaktPage {
    paktData: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/pakt/"}}
      sort: { fields: [frontmatter___category, frontmatter___slug], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
            category
          }
        }
      }
    }

    wpContact(contactInformations: { lastName: { eq: "Gerkens" } }) {
      id
      contactInformations {
        phone
        firstName
        lastName
        email
        position
        title
        photo {
          altText
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

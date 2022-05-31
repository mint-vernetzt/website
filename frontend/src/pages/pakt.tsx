import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { ReactComponent as PaktOverview } from "../images/project_pakt.svg";

import {
  getPaktDataByCategory,
  PaktDataByCategory,
} from "../utils/dataTransformer";
import { H1 } from "../components/Heading/Heading";
import ContactCard from "../components/ContactCard/ContactCard";

/* eslint-disable-next-line */
export interface PaktProps {}

const getCategorySlugFromMember = (slug: string) => {
  return slug.split("/")[0] ?? "no-category";
};

export function Pakt({ data }) {
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
        title={`Pakt für Frauen`}
        slug={`/pakt/`}
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
              name={`${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}`}
              position={data.wpContact.contactInformations.position}
              phone={data.wpContact.contactInformations.phone}
              email={data.wpContact.contactInformations.email}
              avatar={{
                src: data.wpContact.contactInformations.photo.localFile
                  .childImageSharp.gatsbyImageData,
                alt: `${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}`,
              }}
            />
          </div>

          <div className="flex-100 lg:flex-2/3 lg:px-10 lg:order-1">
            <H1 like="h0">
              MINT<span className="font-normal">pakt</span>
            </H1>
            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              #empowerMINT #FrauenInMINT
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Der Pakt für Frauen in MINT-Berufen hat es sich zum Ziel gesetzt,
              Mädchen und junge Frauen für MINT-Ausbildungen, -Studiengänge und
              -Berufe zu begeistern und in ihrem Werdegang zu unterstützen. So
              trägt der Pakt zu mehr Teilhabe in der Gesellschaft, zur Sicherung
              des Innovations- und Wirtschaftsstandorts Deutschland und zur
              Lösung globaler Herausforderungen bei.
            </p>
            <p className="lg:text-xl text-neutral-600 mb-4">
              Das Bündnis wurde 2008 vom Bundesministerium für Bildung und
              Forschung initiiert und wird seit September 2021 von der
              Kompetenz- und Vernetzungsstelle MINTvernetzt koordiniert. Über
              300 Mitglieder aus   rund 270 verschiedenen Institutionen aus
              Wirtschaft, Bildung und Wissenschaft, Medien und Politik haben
              sich seither im Pakt zusammengeschlossen, um gemeinsam einen
              Beitrag dafür zu leisten, Mädchen und Frauen stärker für
              MINT-Ausbildungen, -Studiengänge und -Berufe zu begeistern. Dies
              ist eine Übersicht der aktuellen Mitglieder im Pakt für Frauen in
              MINT-Berufen, die für die gemeinsamen Ziele eintreten:
            </p>
          </div>
        </div>
      </section>
      <section className="container my-4 md:my-6 lg:my-10">
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
      </section>
    </Layout>
  );
}

export default Pakt;

export const pageQuery = graphql`
  query PaktPage {
    paktData: allMarkdownRemark(
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
    
    wpContact(contactInformations: {lastName: {eq: "Linhoff"}}) {
      id
      contactInformations {
        phone
        firstName
        lastName
        email
        position
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

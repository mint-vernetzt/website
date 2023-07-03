import React from "react";
import { graphql, Link, navigate } from "gatsby";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import Icon, { IconType } from "../../../components/Icon/Icon";
import { H1, H2 } from "../../../components/Heading/Heading";
import { Selector } from "../../../components/Pakt/Selector";
import { search } from "../../../components/Pakt/search";
import { NoResult } from "../../../components/Pakt/NoResult";
import queryString from "query-string";
import { Input } from "../../../components/Pakt/Input";

/* eslint-disable-next-line */
export interface MintPaktProps {}

export function MintPaktList({
  data,
}: {
  data: GatsbyTypes.MintPaktListQuery;
}) {
  const qs: queryString.ParsedQuery = queryString.parse(
    typeof document !== "undefined" ? document.location.search : ""
  );
  const [q, setQ] = React.useState(typeof qs.q === "string" ? qs.q : "");
  const [state, setState] = React.useState(
    typeof qs.state === "string" ? qs.state : ""
  );
  const [institutionType, setInstitutionType] = React.useState(
    typeof qs.institutionType === "string" ? qs.institutionType : ""
  );

  React.useEffect(() => {
    navigate(
      "?" + new URLSearchParams({ q, state, institutionType }).toString(),
      { state: { noScrollRestauration: true } }
    );
  }, [q, state, institutionType]);

  React.useEffect(() => {
    if (
      typeof document !== "undefined" &&
      window.previousPath.includes("/projects/mint-buendnis/")
    ) {
      const $partner = document.querySelector(`[href='${window.previousPath}'`);
      if ($partner) {
        setTimeout(() => {
          $partner.scrollIntoView({ behavior: "instant", block: "center" });
        }, 50);
      }
    }
  }, []);

  const states = data.states.nodes.map((state) => ({
    id: state.slug ?? "",
    name: state.name ?? "",
  }));

  const institutionsTypes = data.institutionTypes.nodes.map(
    (institutionType) => ({
      id: institutionType.slug ?? "",
      name: institutionType.name ?? "",
    })
  );

  type Lookup = {
    [key: string]: GatsbyTypes.WpPartner;
  };
  const filteredPartners = search(data.partners, q, state, institutionType);
  const filteredPartnersLookup: Lookup = filteredPartners.reduce(
    (acc, cur) => ({ ...acc, [cur.slug ?? ""]: cur }),
    {}
  );

  const reset = () => {
    setInstitutionType("");
    setQ("");
    setState("");
  };

  return (
    <Layout>
      <SEO
        title={`Bündnis für Frauen`}
        slug={`/projects/mint-buendnis/list`}
        description={""}
        image={""}
        children={""}
      />
      <section className="bg-lilac-50 relative overflow-hidden">
        <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center text-lilac-400">
          <svg
            width="809"
            height="695"
            viewBox="0 0 809 695"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute mt-[60%] md:mt-0 left-[5%] md:left-[42%] w-[90%] md:w-[60%] h-[80%] md:h-[110%] xl:h-[150%] rotate-[-0deg]"
          >
            <path
              d="M637.862 91.3002C973.1 223.765 753.674 722.111 463.915 691.176C333.039 677.203 358.384 619.535 269.807 558.208C142.414 470.005 -137.123 467.055 85.5645 142.115C105.425 113.135 174.794 49.354 206.917 30.1026C276.347 -11.5078 359.242 -18.7927 637.862 91.3002Z"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="container pt-8 pb-4 md:pb-12 relative z-20">
          <div className="">
            <a
              className="inline-block border border-primary py-2 px-4 text-primary font-semibold rounded-lg text-sm leading-[22px]"
              href="/projects/mint-buendnis/"
            >
              <span className="flex items-center">
                <span className="mr-2">
                  <Icon type={IconType.ChevronLeft} />
                </span>
                zur Übersicht
              </span>
            </a>
          </div>
          
          <div className="-mx-4 mt-8 md:-mt-6 md:flex md:items-center">
            <div className="hidden lg:flex lg:w-1/12 px-4"></div>
            <div className="md:w-1/2 lg:w-5/12 px-4 pb-12 md:py-10">
              <H1 like="h1" className="font-black leading-1">
                Aktuelle Bündnis-Mitglieder
              </H1>
              <p className="font-semibold text-primary lg:text-3xl lg:leading-snug">
                Gemeinsam stark und laut für mehr Mädchen und Frauen in MINT
              </p>
            </div>

            {data.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
              <div className="hero-image md:w-1/2 px-4">
                <div className="relative">
                  <GatsbyImage
                    image={data.HeroImage.childImageSharp.gatsbyImageData}
                    className="w-full h-auto aspect-[16/9]"
                    alt="Aktuelle Bündnis-Mitglieder (Unsplash / Omar Flores)"
                  />
                  <div className="absolute right-0 bottom-0">
                    <div
                      className="transform rotate-180 text-center px-1 py-2 bg-neutral-200/80 text-xs font-semibold text-neutral-700"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      Unsplash / Omar Flores
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-primary pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="container">
          <div className="lg:w-1/2 mx-auto">
            <p className="mb-0 text-white text-3xl leading-snug">
              Mehr als 300 Mitglieder aus den Bereichen Wirtschaft, Bildung und Wissenschaft 
              sowie Medien und Politik haben sich bereits dem Leitbild des Bündnisses für 
              Frauen in MINT-Berufen verpflichtet. Hier stellen sich die Institutionen vor 
              und geben einen Einblick, in welchen Bereichen sie Mädchen und Frauen in MINT 
              konkret fördern und unterstützen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige-500 py-12 md:py-16 border-b-2 border-b-white">
        <div className="container flex justify-center mintpaktlist-filter">
          <div className="lg:w-10/12">
            <form>
              <div className="flex flex-wrap -mx-4">
                <div className="flex-100 lg:flex-1/2 px-4">
                  <Selector
                    name="state"
                    options={states}
                    value={state}
                    label="Bundesland"
                    placeholder="Bitte wählen"
                    onChange={(e) => setState(e.currentTarget.value)}
                    handleReset={() => setState("")}
                  />
                </div>
                <div className="flex-100 lg:flex-1/2 px-4">
                  <Selector
                    name="institutionType"
                    options={institutionsTypes}
                    label="Institutsform"
                    placeholder="Bitte wählen"
                    onChange={(e) => setInstitutionType(e.currentTarget.value)}
                    value={institutionType}
                    handleReset={() => setInstitutionType("")}
                  />
                </div>
              </div>
              <div className="flex-100">
                <fieldset>
                  <Input
                    name="q"
                    label="Suche"
                    value={q}
                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
                      setQ(e.currentTarget.value)
                    }
                    handleReset={() => setQ("")}
                  />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-beige-500 pt-12 lg:pt-16 pb-20 lg:pb-28">
        <div className="container flex justify-center">
          <div className="lg:w-10/12">
            {filteredPartners.length === 0 ? (
              <NoResult handleReset={() => reset()} />
            ) : (
              <ul>
                {data.partners.nodes.map((partner) => {
                  const isFiltered =
                    filteredPartnersLookup[partner.slug ?? ""] !== undefined;
                  return (
                    <li
                      key={partner.title}
                      className={`mb-8 ${
                        isFiltered ? "animate-slideUpAndFade" : "hidden"
                      }`}
                    >
                      <Link
                        to={`/projects/mint-buendnis/${partner.slug ?? ""}`}
                        className="font-semibold text-primary md:leading-7 py-4 px-8 flex flex-col md:flex-row md:items-center md:justify-between bg-neutral-200 w-full rounded-lg transition-all ease-in-out duration-0 delay-0 hover:bg-primary hover:text-white shadow-sm"
                      >
                        <span className="text-lg lg:text-3xl mb-4 md:mb-0">
                          {partner.title}
                        </span>
                        <span className="flex md:ml-8 items-center gap-4 flex-nowrap whitespace-nowrap">
                          <span className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2 h-3"
                              viewBox="0 0 8 12"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7.3 6a.626.626 0 0 0-.23-.49L1.93.9a.722.722 0 0 0-.24-.14.857.857 0 0 0-.27-.05c-.09 0-.18.02-.27.05C1.06.79.98.84.91.9c-.07.06-.13.14-.16.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22L5.5 6 .91 10.12c-.07.06-.13.14-.17.22a.626.626 0 0 0 0 .54c.04.09.1.16.16.22.07.06.15.11.23.14.09.03.18.05.27.05.09 0 .18-.02.27-.05.09-.03.17-.08.23-.14l5.14-4.61c.07-.06.13-.14.17-.22A.66.66 0 0 0 7.27 6h.03Z"
                              />
                            </svg>
                          </span>
                          <span>mehr erfahren</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 pt-16 pb-20 lg:pt-24 lg:pb-28 -mb-20">
        <div className="container">
          <div className="-mx-4 xl:flex xl:justify-center">
            <div className="xl:w-10/12 px-4">
              <H2 className="all-small-caps text-center mb-8 lg:mb-12 text-4xl md:text-5xl tracking-widest font-semibold">
                Ansprechpartnerin
              </H2>

              <div className="rounded-lg bg-neutral-50 shadow-sm p-8">
                <div className="flex gap-8 md:gap-16 flex-col md:flex-row md:items-center">
                  <div className="flex justify-center">
                    {data.wpContact?.contactInformations?.photo?.localFile
                      ?.childImageSharp?.gatsbyImageData !== undefined && (
                      <GatsbyImage
                        image={
                          data.wpContact.contactInformations.photo.localFile
                            .childImageSharp?.gatsbyImageData
                        }
                        className="rounded-full w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                        alt="${data.wpContact.contactInformations.firstName} ${data.wpContact.contactInformations.lastName}"
                      />
                    )}
                  </div>
                  <div className="flex-auto">
                    <p className="font-semibold text-primary mb-2 md:text-3xl">
                      {`${data.wpContact?.contactInformations?.title ?? ""} ${
                        data.wpContact?.contactInformations?.firstName ?? ""
                      } ${
                        data.wpContact?.contactInformations?.lastName ?? ""
                      }`.trim()}
                    </p>
                    <p className="text-base md:text-lg text-primary">
                      {data.wpContact?.contactInformations?.position ?? ""}
                    </p>
                    <p className="text-base md:text-lg">
                      <a
                        href={`mailto:${
                          data.wpContact?.contactInformations?.email ?? ""
                        }`}
                        className="w-full flex items-center rounded-lg bg-neutral-100 p-4 text-primary"
                      >
                        <span className="icon w-4 h-4 mr-2 ">
                          <Icon type={IconType.Mail} />
                        </span>
                        <span>
                          {data.wpContact?.contactInformations?.email ?? ""}
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MintPaktList;

export const pageQuery = graphql`
  query MintPaktList {
    HeroImage: file(
      relativePath: { eq: "buendnis/Mitglieder-Datenbank_Stage_1280x720.jpg" }
    ) {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 1280)
      }
    }
    states: allWpState {
      nodes {
        slug
        name
      }
    }
    institutionTypes: allWpInstitutionsType {
      nodes {
        slug
        name
      }
    }
    partners: allWpPartner(sort: { fields: [slug], order: ASC }) {
      nodes {
        title
        slug
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
        partnerInformations {
          citeauthor
          citequote
          citeauthorfunction
          institutiontype {
            name
            slug
          }
          state {
            name
            slug
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
              gatsbyImageData(width: 320)
            }
          }
        }
      }
    }
  }
`;

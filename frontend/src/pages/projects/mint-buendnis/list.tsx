import React from "react";
import { graphql, Link, navigate } from "gatsby";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
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
      "?" + new URLSearchParams({ q, state, institutionType }).toString()
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
        }, 5);
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
      <section className="container mt-8 md:mt-10 lg:mt-20">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 lg:flex-1/3 lg:order-2 pb-4 lg:pb-0 lg:px-10">
            <form>
              <Selector
                name="state"
                options={states}
                value={state}
                placeholder="Bundesland"
                onChange={(e) => setState(e.currentTarget.value)}
                handleReset={() => setState("")}
              />
              <Selector
                name="institutionType"
                options={institutionsTypes}
                placeholder="Institutsform"
                onChange={(e) => setInstitutionType(e.currentTarget.value)}
                value={institutionType}
                handleReset={() => setInstitutionType("")}
              />
              <fieldset>
                <Input
                  name="q"
                  value={q}
                  onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
                    setQ(e.currentTarget.value)
                  }
                  handleReset={() => setQ("")}
                />
              </fieldset>
            </form>

            {filteredPartners.length === 0 ? (
              <NoResult handleReset={() => reset()} />
            ) : (
              <ul className="w-max">
                {data.partners.nodes.map((partner) => {
                  const isFiltered =
                    filteredPartnersLookup[partner.slug ?? ""] !== undefined;
                  return (
                    <li
                      key={partner.title}
                      className={`p-3 border w-auto mb-2 ${
                        isFiltered ? "animate-slideUpAndFade" : "hidden"
                      }`}
                    >
                      <Link
                        to={`/projects/mint-buendnis/${partner.slug ?? ""}`}
                      >
                        {partner.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MintPaktList;

export const pageQuery = graphql`
  query MintPaktList {
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
    partners: allWpPartner(sort: { fields: [title], order: ASC }) {
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
  }
`;

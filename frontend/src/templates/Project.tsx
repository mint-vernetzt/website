import { graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { H1, H3, H4, H5 } from "../components/Heading/Heading";
import Icon, { IconType } from "../components/Icon/Icon";
import Layout from "../components/Layout";
import Link from "../components/Link";
import SEO from "../components/SEO";

function Project({ data }: { data: GatsbyTypes.ProjectQuery }) {
  const { project } = data;

  return (
    <Layout>
      <SEO
        title={`${project.title}`}
        slug={`/project/${project.slug}`}
        description=""
        children=""
      />

      <section className="container my-4 md:my-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-4 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/"
          onClick={(e) => {
            // if (
            //   typeof window !== "undefined" &&
            //   window.previousPath === "/mintrakete/"
            // ) {
            e.preventDefault();
            navigate("/mintrakete/");
            // }
          }}
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            Zur Übersicht
          </span>
        </Link>
      </section>

      <section className="container mt-8 md:mb-10 lg:mt-10 mb-8 lg:mb-20">
        <div className="flex flex-wrap md:flex-nowrap md:-mx-4 my-10">
          <div className="flex-100 md:flex-1/2 lg:flex-1/3 pb-8 md:pb-0 md:px-4">
            <div className="p-8 rounded-lg bg-neutral-200 shadow-lg">
              <div className="contact-card">
                <div className="flex items-center flex-col text-center">
                  <div>
                    <Link
                      to={project.projectInformations.projectWebsite}
                      isExternal
                    >
                      <GatsbyImage
                        image={
                          project.projectInformations.projectLogo.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt={`${project.title}`}
                      />
                    </Link>
                  </div>
                  <h3 className="font-bold mb-2 mt-4">{project.title}</h3>
                  <p className="font-bold text-sm">
                    {project.projectInformations.institution}
                  </p>
                  {project.projectInformations.initiative !== null ? (
                    <p className="font-bold text-sm">
                      {project.projectInformations.initiative}
                    </p>
                  ) : null}
                </div>

                <H5 className="font-bold mt-8 mb-6">
                  {project.projectInformations.contactPersonFullName}
                </H5>
                <div className="">
                  <p className="text-mb text-neutral-800 mb-2">
                    <a
                      href={`mailto:${project.projectInformations.email}`}
                      className="flex items-center px-4 py-3 bg-neutral-300  hover:bg-neutral-400"
                    >
                      <span className="icon w-4 h-4 mr-3">
                        <Icon type={IconType.Envelope} />
                      </span>
                      <span>{project.projectInformations.email}</span>
                    </a>
                  </p>
                  {project.projectInformations.phone !== null ? (
                    <p className="text-md text-neutral-800 mb-2">
                      <a
                        href={`tel:${project.projectInformations.phone}`}
                        className="flex items-center px-4 py-3 bg-neutral-300 hover:bg-neutral-400"
                      >
                        <span className="icon w-4 h-4 mr-3">
                          <Icon type={IconType.Telephone} />
                        </span>
                        <span>{project.projectInformations.phone}</span>
                      </a>
                    </p>
                  ) : null}
                  <p className="text-md text-neutral-800 mb-2">
                    <Link
                      to={project.projectInformations.projectWebsite}
                      isExternal
                      className="flex items-center px-4 py-3 bg-neutral-300 hover:bg-neutral-400"
                    >
                      <span className="icon w-4 h-4 mr-3">
                        <Icon
                          type={IconType.Website}
                          width="20"
                          height="20"
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="break-all">
                        {project.projectInformations.projectWebsite}
                      </span>
                    </Link>
                  </p>

                  {project.projectInformations.address !== null ? (
                    <>
                      <H5 className="font-semibold mb-6 mt-8">Anschrift</H5>
                      <p className="text-md text-neutral-600 mb-2 flex px-4 py-3 bg-neutral-300 rounded-lg text-neutral-600">
                        <span className="icon w-4 h-4 mr-3 mt-1">
                          <Icon
                            type={IconType.Location}
                            width="12"
                            height="20"
                          />
                        </span>
                        <span className="text-ellipsis">
                          {project.projectInformations.address}
                        </span>
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-100 pb-8 md:pb-0 md:flex-1/2 lg:flex-2/3 md:px-4">
            <H1>{project.title}</H1>
            <div
              className="italic mb-6"
              dangerouslySetInnerHTML={{
                __html: project.excerpt,
              }}
            ></div>

            {project.targetGroups.nodes.length > 0 ? (
              <div className="flex mb-6 font-semibold flex-col lg:flex-row">
                <div className="lg:flex-label text-xs lg:text-sm leading-4 lg:leading-6 mb-2 lg:mb-0">
                  Zielgruppe
                </div>
                <div className="lg:flex-auto">
                  {project.targetGroups.nodes.map((node, index) => {
                    return (
                      <>
                        {index > 0 ? ", " : ""}{" "}
                        <span key={`targetGroup${index}`}>{node.name}</span>
                      </>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {project.disciplines.nodes.length > 0 ? (
              <div className="flex mb-6 font-semibold flex-col lg:flex-row">
                <div className="lg:flex-label text-xs lg:text-sm leading-4 lg:leading-6 mb-2 lg:mb-0">
                  Disziplin
                </div>
                <div className="lg:flex-auto">
                  {project.disciplines.nodes.map((node, index) => {
                    return (
                      <>
                        {index > 0 ? ", " : ""}{" "}
                        <span key={`targetGroup${index}`}>{node.name}</span>
                      </>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: project.content,
              }}
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Project;

export const query = graphql`
  query Project($id: String!) {
    project: wpProject(id: { eq: $id }) {
      id
      title
      content
      excerpt
      slug
      projectInformations {
        projectLogo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        projectWebsite
        institution
        initiative
        contactPersonFullName
        email
        phone
        address
      }
      targetGroups {
        nodes {
          name
        }
      }
      disciplines {
        nodes {
          name
        }
      }
    }
  }
`;

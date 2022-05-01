import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { H1, H4 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import Link from "../components/Link";
import SEO from "../components/SEO";

function Project({ data }: { data: GatsbyTypes.ProjectQuery }) {
  const { project } = data;

  return (
    <Layout>
      <SEO
        title={`${project.title}`}
        slug={`/event/${project.slug}`}
        description=""
        children=""
      />

      <section className="container my-4 md:my-8">
        <H1>{project.title}</H1>
        <div className="flex-100 md:flex-1/3 pb-8 md:pb-0 md:px-4 lg:px-6 md:order-2">
          <Link to={project.projectInformations.projectWebsite} isExternal>
            <GatsbyImage
              image={
                project.projectInformations.projectLogo.localFile
                  .childImageSharp.gatsbyImageData
              }
              alt=""
            />
          </Link>
          <ul>
            <li>{project.projectInformations.institution}</li>
            {project.projectInformations.initiative !== null ? (
              <li>{project.projectInformations.initiative}</li>
            ) : null}
          </ul>
          <ul>
            <li>{project.projectInformations.contactPersonFullName}</li>
            <li>{project.projectInformations.email}</li>
            {project.projectInformations.phone !== null ? (
              <li>{project.projectInformations.phone}</li>
            ) : null}
            <li>{project.projectInformations.address}</li>
          </ul>
          <H4>Zielgruppe</H4>
          {project.targetGroups.nodes.length > 0 ? (
            <ul>
              {project.targetGroups.nodes.map((node, index) => {
                return <li key={`targetGroup${index}`}>{node.name}</li>;
              })}
            </ul>
          ) : null}
          <H4>Disziplin</H4>
          {project.disciplines.nodes.length > 0 ? (
            <ul>
              {project.disciplines.nodes.map((node, index) => {
                return <li key={`targetGroup${index}`}>{node.name}</li>;
              })}
            </ul>
          ) : null}

          <p
            className="italic"
            dangerouslySetInnerHTML={{
              __html: project.excerpt,
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: project.content,
            }}
          ></p>
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

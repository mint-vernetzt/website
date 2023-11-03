import { graphql, Link, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Chip from "../components/Chip/Chip";
import ContactCard from "../components/ContactCard/ContactCard";
import EventNavigation from "../components/EventNavigation/EventNavigation";
import { H1, H2, H3 } from "../components/Heading/Heading";
import Icon, { IconType } from "../components/Icon/Icon";
import Layout from "../components/Layout";
import { formatDate } from "../components/NewsFeed/utils";
import SEO from "../components/SEO";
import { getRelatedEvents } from "../utils/dataTransformer";

const getImage = (data: GatsbyTypes.EventQuery) => {
  if (data.event.parent === null) {
    return (
      data.event.featuredImage?.node?.localFile?.childImageSharp
        ?.gatsbyImageData ?? null
    );
  } else {
    return (
      data.event.parent?.node?.featuredImage?.node?.localFile?.childImageSharp
        ?.gatsbyImageData ?? null
    );
  }
};

const getOgImage = (data: GatsbyTypes.EventQuery) => {
  if (data.event.parent === null) {
    return data.event.featuredImage?.node?.localFile?.publicURL ?? null;
  } else {
    return (
      data.event.parent?.node?.featuredImage?.node?.localFile?.publicURL ?? null
    );
  }
};

const getContactPerson = (
  data: GatsbyTypes.EventQuery
): GatsbyTypes.EventQuery["event"]["eventInformations"]["contactPerson"] => {
  return data.event.parent?.node?.eventInformations?.contactPerson?.length
    ? data.event.parent?.node?.eventInformations?.contactPerson
    : data.event.eventInformations.contactPerson;
};

function EventHeader(event: GatsbyTypes.EventQuery["event"]) {
  const parentEvent = event.parent === null ? event : event.parent.node;
  const date = new Date(event.eventInformations.startDate);
  const formattedDate = formatDate(date);
  return (
    <div className="flex flex-wrap mb-8">
      <div className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 font-semibold uppercase text-neutral-800 text-xs flex-100 md:order-2">
        <p className="text-xs text-neutral-800 font-semibold mb-4 flex items-center">
          <span className="icon w-4 h-4 mr-2">
            <Icon type={IconType.Calendar} />
          </span>
          <span>
            <time
              data-testid="date"
              dateTime={date.toISOString()}
              className="uppercase font-semibold text-neutral-800 text-xs mr-4"
            >
              {formattedDate}
            </time>
          </span>
        </p>
        {/* <div className="inline-block icon mr-2 w-3 h-3 bg-red-600"></div>{" "}
        {formatDate(new Date(parentEvent.date))}
        {parentEvent.eventCategories.nodes.map((category) => (
          <>
            <div className="inline-block icon ml-3 mr-2 w-3 h-3 bg-red-600"></div>{" "}
            <div className="inline-block">{category.name}</div>
          </>
        ))} */}
      </div>

      {event.parent ? (
        <H2 like="h1">{parentEvent.title}</H2>
      ) : (
        <H1 like="h0">{parentEvent.title}</H1>
      )}

      {parentEvent.tags && (
        <ul className="flex flex-wrap md:order-3">
          {parentEvent.tags.nodes.map((tag, index) => (
            <li key={`${tag.slug}-${index}`}>
              <Chip
                title={tag.name}
                slug={tag.slug}
                onClick={() =>
                  (document.location.href = `/news/?tags=${tag.slug}`)
                }
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Event({ data }: { data: GatsbyTypes.EventQuery }) {
  const { event } = data;
  const image = getImage(data);
  const ogimage = getOgImage(data);
  const relatedEvents = getRelatedEvents(data);
  const contactPerson = getContactPerson(data);

  return (
    <Layout>
      <SEO
        title={`${event.title}`}
        slug={`/event/${event.slug}`}
        description=""
        image={ogimage ? ogimage : ""}
        children=""
      />

      <section className="container my-4 md:my-8">
        <Link
          className="inline-block border border-neutral-400 py-3 px-4 mb-4 text-neutral-800 text-semibold uppercase rounded-lg"
          to="/events"
          onClick={(e) => {
            if (
              typeof window !== "undefined" &&
              window.previousPath === "/events/"
            ) {
              e.preventDefault();
              navigate(-1);
            }
          }}
        >
          <span className="flex items-center">
            <span className="mr-2">
              <Icon type={IconType.ChevronLeft} />
            </span>
            Zur Veranstaltungsübersicht
          </span>
        </Link>

        {EventHeader(event)}

        {image !== null && (
          <GatsbyImage
            image={image}
            className="rounded-3xl w-100 h-auto lg:mb-20"
            alt=""
          />
        )}

        {event.parent && (
          <div className="mt-6 md:mt-8 lg:mt-20">
            <Link
              to={`/event/${event.parent.node.slug}`}
              className="inline-block text-bold text-lilac-500"
            >
              <span className="flex items-center font-bold text-lg">
                <span className="mr-2">
                  <Icon type={IconType.ChevronLeft} />
                </span>
                Zurück zur Übersicht
              </span>
            </Link>
          </div>
        )}

        <div className="flex flex-wrap mt-6 md:mt-8 lg:mt-10 mb-8 md:-mx-2 lg:-mx-6 ">
          <div className="flex-100 md:flex-2/3 pb-8 md:pb-0 md:px-2 lg:px-6">
            {event.parent && <H1 like="h0">{event.title}</H1>}

            {event.id === "cG9zdDoxODg3" &&
              ["RDTV-g0XG9E", "ccClwGLoy1Q"].map((code, index) => (
                <div
                  id={`livestream-container${index}`}
                  className="mb-8 bg-blue-500 md:aspect-16/9 flex items-center"
                  key={code}
                >
                  <iframe
                    id={`livestream-embed${index}`}
                    style={{
                      display: "none",
                      border: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    data-src={`https://www.youtube-nocookie.com/embed/${code}?autoplay=1`}
                    title="Live Stream"
                    allowfullscreen="true"
                    allow="autoplay"
                  ></iframe>
                  <div
                    id={`livestream-optin${index}`}
                    className="flex p-8 lg:px-16"
                  >
                    <div className="text-center">
                      <h2 className="text-white mb-1">
                        Stream der Jahrestagung
                        <br />
                      </h2>
                      <h4 className="text-white mb-8">Tag {index + 1}</h4>

                      <p className="text-white">
                        Mit dem Klick auf den Button wird ein Youtube-Video
                        geöffnet und Ihr willigt ausdrücklich ein, Inhalte von
                        Youtube angezeigt zu bekommen.
                      </p>
                      <p>
                        <button
                          className="inline-block py-2 px-6 rounded-lg text-sm leading-6 bg-white text-blue-500 my-2"
                          onClick={() => {
                            const embeddiv = document.querySelector(
                              `#livestream-container${index}`
                            ) as HTMLDivElement;

                            const embed = document.querySelector(
                              `#livestream-embed${index}`
                            ) as HTMLDivElement;
                            if (embed) {
                              embed.setAttribute(
                                "src",
                                embed.dataset?.src ?? ""
                              );
                              embed.style.display = "block";

                              const optIn = document.querySelector(
                                `#livestream-optin${index}`
                              ) as HTMLDivElement;
                              if (optIn) {
                                embeddiv.classList.add("aspect-16/9");
                                optIn.style.display = "none";
                              }
                            }
                          }}
                        >
                          Externen Inhalt anzeigen
                        </button>
                      </p>
                      <p className="text-white mb-0">
                        Beim Abspielen des Videos werden Daten an die Server von
                        Youtube übertragen. Weitere Infos dazu findet Ihr in der{" "}
                        <a
                          href="https://www.google.com/intl/de/policies/privacy/"
                          target="_blank"
                          className="underline underline-offset-1"
                        >
                          Datenschutzerklärung
                          (www.google.com/intl/de/policies/privacy/)
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            <div
              className="event-description"
              dangerouslySetInnerHTML={{
                __html: event.content,
              }}
            />

            {event.allChildren && (
              <ul>
                {event.allChildren.nodes
                  .sort((a, b) => {
                    const aDate = new Date(a.eventInformations.startDate);
                    const bDate = new Date(b.eventInformations.startDate);
                    if (aDate < bDate) return -1;
                    if (aDate > bDate) return 1;
                    return 0;
                  })
                  .map((childEvent) => (
                    <li
                      key={childEvent.id}
                      className="border-b border-neutral-400 last:border-b-0 pt-4 pb-6"
                    >
                      <time
                        data-testid="date"
                        dateTime={childEvent.eventInformations.startDate}
                        className="mb-2 md:mb-0 md:mr-2 md:py-2 md:pr-3 uppercase font-bold text-neutral-800 text-xs flex-100 md:flex-none md:order-3"
                      >
                        {formatDate(
                          new Date(childEvent.eventInformations.startDate)
                        )}
                      </time>
                      <H3>
                        <Link
                          to={`/event/${childEvent.slug}`}
                          className="cursor-pointer hover:underline"
                        >
                          {childEvent.title}
                        </Link>
                      </H3>
                      <p
                        data-testid="body"
                        className="line-clamp-5 mb-4 md:line-clamp-none flex-100 md:order-2"
                      >
                        {childEvent.excerpt.replace(/<[^>]*>/g, "")}
                      </p>
                      <Link
                        to={`/event/${childEvent.slug}`}
                        className="font-semibold text-secondary hover:underline"
                      >
                        Mehr Informationen
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <div className="flex-100 md:flex-1/3 md:px-2 lg:px-6">
            {relatedEvents.length > 0 && (
              <EventNavigation
                headline="Veranstaltungstage"
                items={relatedEvents}
                currentUrl={`/event/${event.slug}`}
                linkWrapper={(url, children) => (
                  <Link to={url}>{children}</Link>
                )}
              />
            )}

            {contactPerson && contactPerson[0] && (
              <ContactCard
                headline="Ansprechpartner:in"
                name={`${contactPerson[0].contactInformations.firstName} ${contactPerson[0].contactInformations.lastName}`}
                position={contactPerson[0].contactInformations.position}
                phone={contactPerson[0].contactInformations.phone}
                email={contactPerson[0].contactInformations.email}
                avatar={{
                  src: contactPerson[0].contactInformations.photo.localFile
                    .childImageSharp.gatsbyImageData,
                  alt: `${contactPerson[0].contactInformations.firstName} ${contactPerson[0].contactInformations.lastName}`,
                }}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Event;

export const query = graphql`
  query Event($id: String!) {
    event: wpEvent(id: { eq: $id }) {
      id
      title
      content
      excerpt
      slug
      eventInformations {
        startDate
        startTime
        endDate
        endTime
      }
      tags {
        nodes {
          name
          slug
        }
      }
      eventCategories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1488, height: 400)
            }
            publicURL
          }
          altText
        }
      }
      parent: wpParent {
        node {
          ... on WpEvent {
            id
            title
            slug
            tags {
              nodes {
                name
                slug
              }
            }
            eventCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1200, height: 250)
                  }
                  publicURL
                }
                altText
              }
            }
            eventInformations {
              startDate
              startTime
              endDate
              endTime
              contactPerson {
                ... on WpContact {
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
            }
          }
        }
      }
      allChildren: wpChildren {
        nodes {
          ... on WpEvent {
            id
            title
            excerpt
            slug
            eventInformations {
              startDate
              startTime
              endDate
              endTime
            }
          }
        }
      }
      allSiblings: wpParent {
        node {
          ... on WpEvent {
            wpChildren {
              nodes {
                ... on WpEvent {
                  id
                  title
                  excerpt
                  slug
                  eventInformations {
                    startDate
                    startTime
                    endDate
                    endTime
                  }
                }
              }
            }
          }
        }
      }
      eventInformations {
        contactPerson {
          ... on WpContact {
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
      }
    }
  }
`;

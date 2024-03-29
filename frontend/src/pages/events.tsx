import { graphql, Link } from "gatsby";
import React from "react";
import Affix from "../components/Affix";
import ChipFilter from "../components/ChipFilter/ChipFilter";
import EventFeed from "../components/EventFeed/EventFeed";
import { H1 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useTagFilter } from "../hooks/useTagFilter";
import { ReactComponent as EventsOverview } from "../images/events_overview.svg";
import { getParentEventItems } from "../utils/dataTransformer";
import { isBeforeOneDayAfterDate } from "../utils/eventFilter";
import { getUniqueTags } from "../utils/tagUtils";

export function Events({ data }: { data: GatsbyTypes.EventFeedQuery }) {
  let [filterTags, filterClickHandler, addTagClickHandler, removeInvalidTags] =
    useTagFilter("tags");
  let scrollToRef = React.useRef<HTMLElement>(null);

  let now = new Date();
  let currentAndFutureEvents = data.events.nodes.filter((event) =>
    isBeforeOneDayAfterDate(now, new Date(event.eventInformations.endDate))
  );
  let events = getParentEventItems(currentAndFutureEvents).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });

  let allowedTags = getUniqueTags(
    events.map((event) => event.tags.map((tag) => tag))
  );
  let allowedTagSlugs = allowedTags.map((tag) => tag.slug);

  removeInvalidTags(allowedTagSlugs);

  let afterTagClick = () => {
    if (scrollToRef.current) {
      setTimeout(function () {
        scrollToRef.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 200);
    }
  };

  let filteredEvents =
    filterTags.length === 0
      ? events
      : events.filter((event) => {
          return filterTags.every(
            (slug) => event.tags.filter((it) => it.slug === slug).length > 0
          );
        });

  let possibleTags = getUniqueTags(filteredEvents.map((event) => event.tags));

  return (
    <Layout>
      <SEO
        title="Veranstaltungen"
        slug="/events"
        children=""
        image=""
        description=""
      />

      <section className="container mt-8 md:mt-10 lg:mt-20 mb-3 md:mb-4 lg:mb-8">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-10">
          <div className="flex-100 md:flex-1/3 md:order-2 pb-4 md:pb-0 md:px-6 lg:px-10">
            <EventsOverview />
          </div>

          <div className="flex-100 md:flex-2/3 md:px-6 lg:px-10 md:order-1">
            <H1 like="h0">
              MINT<span className="font-normal">events</span>
            </H1>

            <p className="lg:text-3xl lg:leading-snug text-neutral-600 mb-4 font-bold">
              Gemeinsam die bunte Vielfalt der MINT-Bildungswelt zeigen.{" "}
            </p>

            <p className="lg:text-xl text-neutral-600 mb-4">
              Dafür entwickeln wir bedarfsorientiert analoge und digitale
              Veranstaltungsformate. Um Euch besser kennenzulernen, legen wir,
              so es die Umstände erlauben, einen besonderen Schwerpunkt auf
              Kontakte vor Ort und Präsenzveranstaltungen, die von digitalen
              Formaten (z. B. virtuellen Stammtischen und Dialogformaten)
              flankiert werden.
            </p>
            <p className="lg:text-xl text-neutral-600 mb-4">
              Die hier abgebildeten Veranstaltungen sind ausschließlich für und
              von der MINT-Community sowie Interessierte der MINT-Bildung.
              Angebote, die sich an Kinder und Jugendliche richten, können wir
              hier leider nicht abbilden.
            </p>
          </div>
        </div>
      </section>
      <section className="container flex justify-end">
        <Link
          to="/event-submission/"
          className="inline-block border border-primary hover:bg-primary py-2 px-4 text-primary hover:text-white text-semibold font-sm rounded-lg"          
        >
          Event einreichen
        </Link>
      </section>
      <section
        ref={scrollToRef}
        className="container event-list mb-8 md:mb-10 lg:mb-20 mt-3 md:mt-4 lg:mt-8"
      >
        <div style={{ height: "50px" }} className="mb-2">
          <Affix top={0} className="z-50">
            <ChipFilter
              chips={allowedTags}
              possibleTags={possibleTags}
              selectedChips={allowedTags.filter(
                (tag) => filterTags.indexOf(tag.slug) !== -1
              )}
              onChipClick={(slug) => {
                filterClickHandler(slug, allowedTagSlugs);
                afterTagClick();
              }}
            />
          </Affix>
        </div>
        <EventFeed
          eventFeedItemsProps={filteredEvents}
          onChipClick={(slug) =>
            addTagClickHandler(slug, allowedTagSlugs, afterTagClick)
          }
        />
      </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query EventFeed {
    events: allWpEvent(
      filter: { parentId: { eq: null } }
      sort: { fields: eventInformations___startDate, order: ASC }
    ) {
      nodes {
        excerpt
        content
        eventInformations {
          startTime
          startDate
          endTime
          endDate
        }
        eventCategories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        title
        slug
      }
    }
  }
`;

export default Events;

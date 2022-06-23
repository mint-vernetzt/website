import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Affix from "../components/Affix";
import ChipFilter from "../components/ChipFilter/ChipFilter";
import { H1 } from "../components/Heading/Heading";
import Layout from "../components/Layout";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import SEO from "../components/SEO";
import { useTagFilter } from "../hooks/useTagFilter";
import { getNewsItems } from "../utils/dataTransformer";
import { getUniqueTags } from "../utils/tagUtils";

export function News({ data }: { data: GatsbyTypes.NewsFeedQuery }) {
  let [filterTags, filterClickHandler, addTagClickHandler, removeInvalidTags] =
    useTagFilter("tags");
  let scrollToRef = React.useRef<HTMLHeadingElement>(null);

  let allNewsItems = getNewsItems(data.allItems).map((item) => {
    item.body = (
      <span dangerouslySetInnerHTML={{ __html: item.body as string }} />
    );
    return item;
  });

  let allowedTags = getUniqueTags(
    allNewsItems.map((item) => item.tags.map((tag) => tag))
  );
  let allowedTagSlugs = allowedTags.map((tag) => tag.slug);

  removeInvalidTags(allowedTagSlugs);

  const filteredNewsItems =
    filterTags.length === 0
      ? allNewsItems
      : allNewsItems.filter((item) => {
          return filterTags.every(
            (slug) => item.tags.filter((it) => it.slug === slug).length > 0
          );
        });

  let possibleTags = getUniqueTags(
    filteredNewsItems.map((item) => item.tags.map((tag) => tag))
  );

  let afterTagClick = () => {
    if (scrollToRef.current) {
      // setTimeout(function () {
      scrollToRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      // }, 200);
    }
  };

  return (
    <Layout>
      <SEO
        title="Neuigkeiten"
        slug="/news/"
        children=""
        description=""
        image=""
      />
      <section className="container my-8 md:my-10 lg:my-20">
        <div className="hero hero-news flex items-end rounded-3xl relative overflow-hidden">
          {data?.HeroImage?.childImageSharp?.gatsbyImageData !== undefined ? (
            <GatsbyImage
              image={data.HeroImage.childImageSharp.gatsbyImageData}
              className="w-full h-full"
              alt="MINTnews: Informieren, inspirieren und Emotionen wecken mit MINT"
            />
          ) : null}
          <div className="hero-text absolute top-0 left-0 h-full right-0 pt-12 px-4 md:px-12 md:flex md:items-center lg:px-20">
            <div className="md:flex-100">
              <H1 like="h0">
                MINT<span className="font-normal">news</span>
              </H1>
              <p className="font-bold md:max-w-1/2 lg:text-3xl lg:leading-snug">
                Informieren, inspirieren und Emotionen wecken mit MINT
              </p>
            </div>
          </div>
        </div>
        <Link
          to="/news-submission/"
          className="text-sm text-primary float-right mt-4 lg:mt-8"
        >
          News einreichen
        </Link>
      </section>
      <section className="container my-8 md:my-10 lg:my-20" ref={scrollToRef}>
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

        <NewsFeed
          newsFeedItemsProps={filteredNewsItems}
          onChipClick={(slug) => {
            addTagClickHandler(slug, allowedTagSlugs, afterTagClick);
          }}
        />
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NewsFeed {
    HeroImage: file(relativePath: { eq: "news_overview_large.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1488, quality: 80)
      }
    }
    allItems: allWpNewsItem(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        excerpt
        slug
        date
        tags {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, quality: 80)
              }
            }
          }
        }
      }
    }
  }
`;

export default News;

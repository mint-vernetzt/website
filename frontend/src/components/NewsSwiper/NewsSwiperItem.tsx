import { Chip, ChipClickHandler, ChipProps } from "../Chip/Chip";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { H4 } from "../Heading/Heading";
import { type Image as ImageType } from "../types";
import { formatDate } from "./utils";
import Image from "../Image";

export interface NewsSwiperItemProps {
  headline: string;
  body: string | Element | React.ReactElement;
  date: Date;
  slug: string;
  tags?: ChipProps[];
  onChipClick?: ChipClickHandler;
  image?: ImageType;
}

export function NewsSwiperItem({
  headline,
  body,
  date,
  slug,
  tags = [],
  image,
  onChipClick,
}: NewsSwiperItemProps) {
  const formattedDate = formatDate(date);

  return (
    <>
    <div
      className="rounded-lg bg-neutral-200 shadow-sm overflow-hidden h-full"
    >
      <a href={slug} className="flex flex-col">        
        {image !== undefined ? (
          <div className="news-teaser-image">
            <Image
              src={image.src as unknown as IGatsbyImageData}
              alt={image.alt}
              className="w-full h-auto aspect-[16/9]"
            />
          </div>
        ) : null}        
        <div className="p-8 pb-4">
          <H4 className="lg:leading-snug mb-4">{headline}</H4>
          <div className="line-clamp-3 mb-8">
            {body}
          </div>
          <div className="border-t border-neutral-400 pt-4">
            <time
              data-testid="date"
              dateTime={date.toISOString()}
              className="mb-4 font-semibold text-xs"
            >
              {formattedDate}
            </time>
            <ul className="flex flex-nowrap w-full overflow-auto">
              {tags.map((tag, index) => {
                return (
                  <li key={`tag-${index}`}>
                    <Chip {...tag} onClick={onChipClick} />
                  </li>
                );
              })}
            </ul>
          </div>  
        </div>                      
      </a>
    </div>    
    </>
  );
}

export default NewsSwiperItem;

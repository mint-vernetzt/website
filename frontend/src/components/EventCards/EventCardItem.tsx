import Chip, { ChipClickHandler, ChipProps } from "../Chip/Chip";
import { H3 } from "../Heading/Heading";
import { Icon, IconType } from "../Icon/Icon";
import { formatDate } from "./utils";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { type Image as ImageType } from "../types";
import Image from "../Image";

export interface EventCardItemProps {
  headline: string;
  body: string | Element | React.ReactElement;
  slug: string;
  date: Date;
  tags: ChipProps[];
  onChipClick?: ChipClickHandler;
  image?: ImageType;
}

export function EventCardItem({
  headline,
  body,
  slug,
  date,
  tags = [],
  image,
  onChipClick,
}: EventCardItemProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="rounded-lg bg-neutral-200 shadow-sm h-full overflow-hidden">
      <a href={slug} className="flex flex-col h-full">
        <div className="event-teaser-image">
          {image}       
        </div>
        <div className="p-8 pb-2">
          <div className="text-neutral-800 leading-tight text-xs font-semibold flex items-center mb-2">
            <Icon type={IconType.Calendar} />{" "}
            <time className="ml-2">{formattedDate}</time>
          </div>
          <H3 className="lg:leading-snug mb-4 font-bold">{headline}</H3>
          <div className="line-clamp-3 mb-8 lg:text-lg">{body}</div>
          <div className="border-t border-neutral-400 pt-4">
            <ul className="flex flex-wrap -mt-2">
              {tags.map((tag, index) => (
                <li key={`event-taglist-${index}-${tag.slug}`}>                
                  <Chip title={tag.title} slug={tag.slug} onClick={onChipClick} />
                </li>
              ))}
            </ul>
          </div>  
        </div>  
      </a>
    </div>    
  );
}

export default EventCardItem;

import Chip, { ChipClickHandler, ChipProps } from "../Chip/Chip";
import { H4 } from "../Heading/Heading";
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
    <div className="rounded-lg bg-neutral-200 shadow-sm h-full">
      <a href={slug} className="flex flex-col h-full">
        <div className="event-teaser-image">
          {image}       
        </div>
        <div className="p-8">
          <div className="text-neutral-800 leading-tight text-xs font-semibold flex items-center mb-2">
            <Icon type={IconType.Calendar} />{" "}
            <time className="ml-2">{formattedDate}</time>
          </div>
          <H4 className="lg:leading-snug">{headline}</H4>
          <p className="line-clamp-3 text-neutral-700">{body}</p>
          <ul className="flex flex-nowrap w-full overflow-auto -my-2">
            {tags.map((tag, index) => (
              <li key={`event-taglist-${index}-${tag.slug}`}>                
                <Chip title={tag.title} slug={tag.slug} onClick={onChipClick} />
              </li>
            ))}
          </ul>
        </div>  
      </a>
    </div>    
  );
}

export default EventCardItem;

import { EventCardItem, EventCardItemProps } from "./EventCardItem";
import { ChipClickHandler } from "../Chip/Chip";

export interface EventCardsProps {
  eventCardItemsProps?: EventCardItemProps[];
  onChipClick?: ChipClickHandler;
}

export function EventCards({
  eventCardItemsProps = [],
  onChipClick,
}: EventCardsProps) {
  return (
    <>
      <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">            
        
        {eventCardItemsProps.map((eventCardItemProps, index) => {
          return (
            <div
              key={`event-card-item-${index}`}
              className="event-item"
            >
              <EventCardItem
                {...eventCardItemProps}
                onChipClick={onChipClick}
              />
            </div>
          );
        })}        
      </div>
    </>
  );
}

export default EventCards;

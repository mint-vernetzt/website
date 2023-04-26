import { ChipClickHandler, ChipProps } from "../Chip/Chip";
import React from "react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { H2, H5 } from "../Heading/Heading";
import NewsSwiperItem, { NewsSwiperItemProps } from "./NewsSwiperItem";

export interface NewsSwiperProps {
  newsSwiperItemsProps?: NewsSwiperItemProps[];  
  selectedChips?: ChipProps[];
  onChipClick?: ChipClickHandler;
}

export function NewsSwiper({
  newsSwiperItemsProps = [],  
  onChipClick,
}: NewsSwiperProps) {
  return (
    <>      
      <div className="flex items-stretch -mx-4">
        <div className="xl:w-1/12 relative px-4 hidden xl:flex">
          {newsSwiperItemsProps?.length > 3 && (
            <div className="prev-slide absolute inset-0 flex items-center justify-end z-10 lg:pr-4 pb-16 text-white hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="48"
                viewBox="0 0 18 33"
              >
                <path d="M17.143.86a1.214 1.214 0 0 1 0 1.718L3.433 16.284l13.71 13.708a1.216 1.216 0 1 1-1.719 1.72L.857 17.142a1.214 1.214 0 0 1 0-1.719L15.424.857a1.214 1.214 0 0 1 1.72 0v.002Z" />
              </svg>
            </div>
          )}  
        </div>
        <div className="w-full xl:w-10/12 relative">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            effect="slide"
            spaceBetween={32}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="card-swiper"
            navigation={{
              nextEl: ".next-slide",
              prevEl: ".prev-slide",
            }}
            //autoplay={{ delay: 5000 }}
            loop={true}
            pagination={{
              clickable: true,
              // el: 'swiper-pagination',
              type: "bullets",
              bulletElement: "span",
              bulletClass: "swiper-pagination-bullet bg-white border border-primary opacity-100",
              bulletActiveClass: "swiper-pagination-bullet-active bg-primary",
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '" role="button" aria-label="Gehe zu Slide ' +
                  (index + 1) +
                  '"></span>'
                );
              },
            }}
          >
            {newsSwiperItemsProps.map((newsSwiperItemProps, index) => {
              return (
                <SwiperSlide key={`slide-${index}`}>
                  <NewsSwiperItem {...newsSwiperItemProps} onChipClick={onChipClick} />
                </SwiperSlide>
              );
            })}            
          </Swiper>
        </div>  
        <div className="hidden xl:flex xl:w-1/12 relative">
          {newsSwiperItemsProps?.length > 3 && (
            <div className="next-slide absolute inset-0 flex items-center justify-start z-10 lg:pl-4 pb-16 text-white hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="48"
                viewBox="0 0 18 33"
              >
                <path d="M.857 31.707a1.214 1.214 0 0 1 0-1.72l13.71-13.705L.857 2.574A1.216 1.216 0 1 1 2.576.854l14.567 14.569a1.214 1.214 0 0 1 0 1.719L2.576 31.709a1.214 1.214 0 0 1-1.72 0v-.002Z" />
              </svg>
            </div>
          )}  
        </div>
      </div>        
    </>    
  );
}

export default NewsSwiper;

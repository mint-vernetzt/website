import React from "react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

/* eslint-disable-next-line */
export interface MoodCarouselItemProps {
  headline: React.ReactNode;
  excerpt: React.ReactNode;
  image: React.ReactNode;
}

export function MoodCarouselItem(props: MoodCarouselItemProps) {
  const { headline, excerpt, image } = props;

  return (
    <div className="mood-carousel-item flex flex-col h-full">
      {image}
      <div className="mood-text bg-neutral-600 color-white p-6 w-full flex-auto">
        <div className="">
          <h1 className="text-xl text-white mb-2">
            {headline}
          </h1>
          <p className="text-white">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable-next-line */
export interface MoodCarouselProps {
  id: string;
  items: MoodCarouselItemProps[];
}

export function MoodCarousel(props: MoodCarouselProps) {
  const { id, items } = props;
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}        
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        className={`mood-carousel mood-carousel_${id}`}
        navigation={{
          nextEl: `.next-slide_${id}`,
          prevEl: `.prev-slide_${id}`,
        }}
        //autoplay={{ delay: 5000 }}
        //loop={true}
        pagination={{
          clickable: true,
          // el: 'swiper-pagination',
          type: "bullets",
          bulletElement: "span",
          bulletClass: "swiper-pagination-bullet bg-white border border-neutral-600 opacity-100",
          bulletActiveClass: "swiper-pagination-bullet-active bg-neutral-600",
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
        {items?.length > 0 && (
          <>
            {items.map((item, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <MoodCarouselItem
                  headline={item.headline}
                  excerpt={item.excerpt}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>

      <div className={`h-full absolute left-0.5 md:-left-10 lg:-left-16 top-0 w-10 lg:w-16 hidden lg:flex items-center z-10 md:pl-2 lg:pl-6 hover:text-blue-400 prev-slide_${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="33"
          viewBox="0 0 18 33"
        >
          <path d="M17.143.86a1.214 1.214 0 0 1 0 1.718L3.433 16.284l13.71 13.708a1.216 1.216 0 1 1-1.719 1.72L.857 17.142a1.214 1.214 0 0 1 0-1.719L15.424.857a1.214 1.214 0 0 1 1.72 0v.002Z" />
        </svg>
      </div>
      <div className={`h-full absolute right-0.5 md:-right-10 lg:-right-16 top-0 w-10 lg:w-16 hidden lg:flex justify-end items-center z-10 md:pr-2 lg:pr-6 hover:text-blue-400 next-slide_${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="33"
          viewBox="0 0 18 33"
        >
          <path d="M.857 31.707a1.214 1.214 0 0 1 0-1.72l13.71-13.705L.857 2.574A1.216 1.216 0 1 1 2.576.854l14.567 14.569a1.214 1.214 0 0 1 0 1.719L2.576 31.709a1.214 1.214 0 0 1-1.72 0v-.002Z" />
        </svg>
      </div>
    </div>
  );
}

export default MoodCarousel;

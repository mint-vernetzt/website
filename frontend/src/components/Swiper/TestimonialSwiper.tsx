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
import Icon, { IconType } from "../Icon/Icon";

/* eslint-disable-next-line */
export interface TestimonialProps {
  provider_foto?: React.ReactNode;
  provider_name?: React.ReactNode;
  provider_position?: React.ReactNode;
  testimonial_text?: React.ReactNode;
  provider_profile?: React.ReactNode;
  projectlink?: React.ReactNode;
}

export function TestimonialSwiperItem(props: TestimonialProps) {
  const { provider_foto, provider_name, provider_position, testimonial_text, provider_profile, projectlink } = props;

  return (
    <div className="project-item h-full bg-neutral-200 rounded-lg shadow-sm p-8 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-start">
        {provider_foto !== undefined ? (
          <div className="lg:shrink-0 mb-8 lg:mb-0 flex justify-center">
            <div className="relative pb-4">
              <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] aspect-[1] rounded-full border border-neutral-400 overflow-hidden relative">{provider_foto}</div>
              <div className="absolute right-0 bottom-0 w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" fill="none" viewBox="0 0 26 22">
                  <path fill="#FCFCFD" d="M2.031 21.5 0 17.345c1.805-.786 3.16-1.76 4.062-2.92.903-1.16 1.354-2.564 1.354-4.211a.631.631 0 0 1-.282.056h-.282c-1.354 0-2.501-.412-3.442-1.235C.47 8.174 0 7.05 0 5.665 0 4.095.451 2.84 1.354 1.905 2.294.968 3.46.5 4.852.5c1.993 0 3.479.73 4.457 2.19 1.015 1.422 1.523 3.425 1.523 6.008 0 2.807-.715 5.278-2.144 7.412-1.43 2.17-3.648 3.968-6.657 5.39Zm14.668 0-2.03-4.155c1.805-.786 3.158-1.76 4.061-2.92s1.354-2.564 1.354-4.211a.631.631 0 0 1-.282.056h-.282c-1.354 0-2.501-.412-3.442-1.235-.94-.861-1.41-1.984-1.41-3.37 0-1.571.452-2.825 1.354-3.761C16.962.968 18.128.5 19.52.5c1.993 0 3.479.73 4.457 2.19C24.992 4.112 25.5 6.115 25.5 8.698c0 2.807-.715 5.278-2.144 7.412-1.429 2.17-3.648 3.968-6.657 5.39Z"/>
                </svg>
              </div>
            </div>    
          </div>
        ) : null}
        <div 
          className={`project-item-text ${
            provider_foto !== undefined
              ? "lg:pl-16"
              : ""
          }`}
        >
          <div className="">            
            {testimonial_text !== null ? (
              <div className="lg:text-xl mb-8">
                {testimonial_text}
              </div>
            ) : null}            
            {provider_name !== null ? (
              <p className="text-lg lg:text-3xl text-primary font-semibold mb-0">
                {provider_name}
              </p>
            ) : null}   
            {provider_position !== null ? (
              <p className="text-base md:text-lg text-primary">
                {provider_position}
              </p>
            ) : null}              
          </div>
        </div>
      </div>  
    </div>
  );
}

/* eslint-disable-next-line */
export interface TestimonialPropsProps {
  items: TestimonialProps[];
}

export function TestimonialSwiper(props: TestimonialPropsProps) {
  const { items } = props;
  return (
    <>      
      <div className="flex items-stretch -mx-4">
        <div className="lg:w-1/12 relative px-4 hidden lg:flex">
          {items?.length > 1 && (
            <div className="prev-slide absolute inset-0 flex items-center justify-end z-10 lg:pr-4 text-primary hover:text-primary">
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
        <div className="w-full lg:w-10/12 px-4 relative">
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            className="project-swiper"
            navigation={{
              nextEl: ".next-slide",
              prevEl: ".prev-slide",
            }}            
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
            {items?.length > 0 && (
              <>
                {items.map((item, index) => (
                  <SwiperSlide key={`slide-${index}`}>
                    <TestimonialSwiperItem
                      provider_foto={item.provider_foto}
                      provider_name={item.provider_name}
                      provider_position={item.provider_position}
                      testimonial_text={item.testimonial_text}
                      provider_profile={item.provider_profile}
                      projectlink={item.projectlink}
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>  
        <div className="hidden lg:flex lg:w-1/12 px-4 relative">
          {items?.length > 1 && (
            <div className="next-slide absolute inset-0 flex items-center justify-start z-10 lg:pl-4 text-primary hover:text-primary">
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

export default TestimonialSwiper;

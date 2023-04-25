import React from "react";
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { H2, H5 } from "./Heading/Heading";
import Icon, { IconType } from "./Icon/Icon";

/* eslint-disable-next-line */
export interface ProjectItemProps {
  title: React.ReactNode;  
  logo?: React.ReactNode;
  projectinfo?: React.ReactNode;
  projectproblems?: React.ReactNode;
  communityvalue?: React.ReactNode;
  networklink?: React.ReactNode;
  projectlink?: React.ReactNode;
}

export function ProjectSwiperItem(props: ProjectItemProps) {
  const { title, logo, projectinfo, projectproblems, communityvalue, networklink, projectlink } = props;

  return (
    <div className="project-item h-full bg-neutral-200 rounded-lg shadow-sm p-4 pb-8 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        {logo !== undefined ? (
          <div className="lg:w-40 lg:shrink-0 mb-8">
            <div className="w-40 aspect-[1] rounded-full border border-neutral-400 p-8 flex items-center justify-center">{logo}</div>
          </div>
        ) : null}
        <div 
          className={`project-item-text ${
            logo !== undefined
              ? "lg:pl-16"
              : ""
          }`}
        >
          <div className="">
            <H2 className="mb-8 lg:mb-10 font-bold">
              {title}
            </H2>
            {projectinfo !== null ? (
              <div className="lg:text-lg border-b border-neutral-400 pb-6 mb-6">
                <H5 className="lg:text-lg mb-2 leading-snug font-bold">Zum Projekt:</H5>
                {projectinfo}
              </div>
            ) : null}
            {projectproblems !== null ? (
              <div className="lg:text-lg border-b border-neutral-400 pb-6 mb-6">
                <H5 className="lg:text-lg mb-2 leading-snug font-bold">Hürden für Diversität in der MINT-Praxis:</H5>
                {projectproblems}
              </div>
            ) : null}
            {communityvalue !== null ? (
              <div className="lg:text-lg pb-6 mb-6">
                <H5 className="lg:text-lg mb-2 leading-snug font-bold">Mehrwert für die Community:</H5>
                {communityvalue}
              </div>
            ) : null}
            <p className="mt-8 -m-2 flex items-center flex-wrap">
              {networklink !== null ? (                
                <>
                  <a href={networklink} target="_blank" className="btn-primary m-2">Jetzt vernetzen</a>                                  
                </>  
              ) : null}
              {projectlink !== null ? (                
                <a href={projectlink} target="_blank" className="btn-outline-primary m-2 btn-icon">
                  <Icon type={IconType.ExternalLink} />
                  Zur Projekt-Website</a>                
              ) : null}
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
}

/* eslint-disable-next-line */
export interface ProjectSwiperProps {
  items: ProjectItemProps[];
}

export function ProjectSwiper(props: ProjectSwiperProps) {
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
                    <ProjectSwiperItem
                      title={item.title}
                      projectinfo={item.projectinfo}
                      projectproblems={item.projectproblems}
                      communityvalue={item.communityvalue}
                      networklink={item.networklink}
                      projectlink={item.projectlink}
                      logo={item.logo}
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

export default ProjectSwiper;

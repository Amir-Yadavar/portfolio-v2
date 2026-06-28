"use client";
import MyProjectCard from "@/components/module/Homepage/MyProjectCard/MyProjectCard";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

function MyProjects() {
  const t = useTranslations("HomePage");
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="p-5 lg:p-15">
      <div className="">
        <h2 className="py-2 font-bold bg-(image:--gradient) inline-block text-transparent bg-clip-text">
          {t("my_projects.title_sec_1")}
        </h2>

        <h3 className="text-4xl font-bold pb-2">
          {t.rich("my_projects.title_sec_2", {
            style: (chunks) => (
              <strong className="font-bold bg-(image:--gradient) inline-block text-transparent bg-clip-text">
                {chunks}
              </strong>
            ),
          })}
        </h3>

        {/* slider for project */}
        <div className="w-full flex flex-col items-center my-5">
          {/* ردیف اصلی شامل دکمه‌ها و اسلایدر */}
          <div className="w-full flex items-center justify-between gap-2">
            {/* دکمه قبلی */}
            <div className="hidden sm:flex items-center justify-center theme-box prev-project-button shrink-0 rounded-full theme-shadow sm:w-10 w-6 sm:h-10 h-6 text-md sm:text-2xl  cursor-pointer transition-all  hover:bg-(--green) hover:text-white bg-white">
              <FaAngleLeft />
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={6}
              navigation={{
                nextEl: ".next-project-button",
                prevEl: ".prev-project-button",
              }}
              /* تنظیم Pagination برای استفاده از دایو خارجی */
              pagination={{
                clickable: true,
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (
                    swiper?.params?.pagination &&
                    typeof swiper?.params?.pagination !== "boolean"
                  ) {
                    swiper.params.pagination.el = paginationRef.current;

                    swiper.pagination.destroy();
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                  }
                });
              }}
              breakpoints={{
                790: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1500: { slidesPerView: 4 },
              }}
              className="mySwiper w-full"
              style={{padding:"10px"}}
            >
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <MyProjectCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <MyProjectCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <MyProjectCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <MyProjectCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <MyProjectCard />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center justify-center">
                  <MyProjectCard />
                </div>
              </SwiperSlide>
            </Swiper>

            {/* دکمه بعدی */}
            <div className="hidden sm:flex items-center justify-center theme-box next-project-button shrink-0 rounded-full theme-shadow sm:w-10 w-6 sm:h-10 h-6 text-md sm:text-2xl  cursor-pointer transition-all hover:bg-(--green) hover:text-white bg-white">
              <FaAngleRight />
            </div>
          </div>

          {/* دایو مخصوص Pagination خارج از اسلایدر */}
          <div
            ref={paginationRef}
            className="project-pagination my-8 flex justify-center gap-2"
          />

          {/* استایل‌های لازم برای نمایش درست در خارج از اسلایدر */}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;

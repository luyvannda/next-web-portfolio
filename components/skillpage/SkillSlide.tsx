"use client";

import { SkillData } from "@/data/skillData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SkillSlide() {
  return (
    <div className="flex max-w-[95%] flex-col items-center gap-4 text-center xs:gap-16 md:max-w-[90%] md:gap-24 lg:max-w-[80%] lg:gap-20">
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="swiper_image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="swiper_image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

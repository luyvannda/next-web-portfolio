"use client";

import { SkillData } from "@/data/skillData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SkillSlide() {
  return (
    <div className="flex max-w-[100%] flex-col items-center gap-4 text-center xs:gap-8 md:max-w-[90%] md:gap-8 lg:max-w-[80%] xl:max-w-[85%]">
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill) => (
          <SwiperSlide key={skill.id}>
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
        speed={4000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill) => (
          <SwiperSlide key={skill.id}>
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

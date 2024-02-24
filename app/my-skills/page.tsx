"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants/skillData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Certificate from "@/components/Certificate";

const Page = () => {
  return (
    <main className="h-full w-screen overflow-x-hidden overflow-y-scroll">
      <div
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
        className="flex h-full w-screen items-center justify-center bg-cover bg-center"
      >
        <div className="flex max-w-[95%] flex-col items-center gap-14 text-center xs:gap-16 md:max-w-[90%] md:gap-24 lg:max-w-[80%] lg:gap-20">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-semibold text-white xs:text-4xl md:text-[50px]">
              Skills{" "}
              <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                {" "}
                &{" "}
              </span>
              Technologies
            </h1>
            <p className="text-lg text-gray-400 xs:text-xl md:text-2xl">
              Master latest web development tech, <br className="md:hidden" />{" "}
              <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                {" "}
                one stack at a time.
              </span>
            </p>
          </div>
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

          <Certificate />
        </div>
      </div>
    </main>
  );
};

export default Page;

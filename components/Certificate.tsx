"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

export default function Certificate() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold text-white xs:text-4xl md:text-[50px]">
        Certificates
      </h1>
      <p className="text-lg text-gray-400 xs:text-xl md:text-2xl">
        Whenever my skills get accredited, <br className="md:hidden" />{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {" "}
          I will list it here.
        </span>
      </p>

      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="CertificateSwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

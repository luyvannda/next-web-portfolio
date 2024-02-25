"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

import { FC } from "react";

interface CertificateProps {
  certificateObj: {
    id: number;
    title: string;
    image: string;
  };
}

const Certificate = ({
  certificateObj: { id, title, image },
}: CertificateProps) => {
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
        className="h-[80%] w-[80%] rounded-lg"
      >
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <Image src={`certificateImage/${image}`} alt={title} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Certificate;

/* This is swiper css for Certificate component for contact-me page */

// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// /* .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// } */

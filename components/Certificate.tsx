"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { CertificateType } from "../data/certificateData";

interface CertificateProps {
  certificateObj: CertificateType[];
}

const Certificate = ({ certificateObj }: CertificateProps) => {
  return (
    <section className="flex flex-col items-center gap-4">
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

      <div className="container">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation
          modules={[Pagination, Navigation]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[80%] w-[80%] rounded-lg"
        >
          {certificateObj.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={`/certificateImage/${certificate.image}`}
                  alt={certificate.title}
                  width={certificate.width}
                  height={certificate.height}
                  className="block object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificate;

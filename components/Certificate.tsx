"use client";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
        My Certificates
      </h1>

      <div className="container">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          pagination={{
            type: "fraction",
          }}
          navigation
          modules={[Pagination, Navigation, Autoplay]}
          speed={2500}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[80%] w-[80%] rounded-lg"
        >
          {certificateObj.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div className="flex items-center justify-center">
                <Image
                  src={`/certificateImage/${certificate.image}`}
                  alt={certificate.title}
                  width={certificate.width}
                  height={certificate.height}
                  className="w-[300px] 
                  vs:w-auto"
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

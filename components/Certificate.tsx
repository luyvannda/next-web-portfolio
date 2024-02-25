"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

interface CertificateProps {
  certificateData: {
    map(
      arg0: (certificate: {
        id: number;
        image: string;
        title: string;
        width: number;
        height: number;
      }) => import("react").JSX.Element,
    ): import("react").ReactNode;
    id: number;
    title: string;
    image: string;
    width: number;
    height: number;
  };
}

const Certificate = ({ certificateData }: CertificateProps) => {
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
        {certificateData.map(
          (certificate: {
            id: number;
            image: string;
            title: string;
            width: number;
            height: number;
          }) => (
            <SwiperSlide key={certificate.id}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={`/certificateImage/${certificate.image}`}
                  alt={certificate.title}
                  width={certificate.width}
                  height={certificate.height}
                />
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default Certificate;

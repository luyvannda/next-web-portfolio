import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="pt-2 fixed top-0 z-[40] w-full h-fit bg-transparent flex flex-col md:pt-4 md:flex-row md:justify-between items-center md:px-20">
      <div className="flex flex-row items-center">
        <div className="">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={34}
            height={34}
            className="w-3/4 h-3/4 md:w-full md:h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Joe Joe{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </div>

      <div className="flex mt-6 flex-row gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

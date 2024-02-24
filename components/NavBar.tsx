import { Socials } from "@/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] flex h-fit w-full flex-col items-center bg-transparent pt-2 md:flex-row md:justify-between md:px-20 md:pt-4">
      <Link href="/" className="flex flex-row items-center space-x-4">
        <div className="">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={34}
            height={34}
            className="h-3/4 w-3/4 rounded-full object-contain md:h-full md:w-full"
          />
        </div>
        <h1 className="text-[25px] font-semibold text-white">
          Joe Joe{" "}
          <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </Link>

      <div className="mt-6 flex flex-row gap-5 md:mt-0">
        {Socials.map((social) => (
          <Link href={social.url} key={social.name} target="_blank">
            <Image
              src={social.src}
              alt={social.name}
              width={35}
              height={35}
              className="transform transition duration-500 ease-in-out hover:translate-y-2 hover:cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

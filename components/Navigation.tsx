"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div className="nav_icons">
      {/* {isRouting && <Transition />} */}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="mb-8 md:mb-4 min-w-[20%] xl:min-w-[15%]"
        >
          <nav.icon
            className={`w-[24px] h-[24px] lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:-translate-y-2 ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

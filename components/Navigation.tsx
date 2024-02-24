"use client";

import { NavLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./animation/Transition";

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
    <div>
      {isRouting && <Transition />}
      <div className="nav_icons">
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="mb-8 min-w-[20%] md:mb-4 lg:mb-8 xl:min-w-[15%]"
          >
            <nav.icon
              className={`h-[24px] w-[24px] lg:transform lg:transition lg:duration-500 lg:ease-in-out lg:hover:-translate-y-2 ${
                path === nav.name ? "text-green-500" : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

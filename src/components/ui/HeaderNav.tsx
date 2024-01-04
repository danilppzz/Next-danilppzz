"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Itim } from "next/font/google";
import Button from "./Button";

interface HeaderNavProps {}

const itim = Itim({ subsets: ["latin"], weight: "400" });

const HeaderNav: React.FC<HeaderNavProps> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openCV() {
    window.open("/cv", "_blank");
  }
  return (
    <header className="bg-dark-20 h-[54px] flex justify-between items-center ">
      <div className="flex items-center space-x-4 desktop:ml-[300px] laptop:ml-2 tablet:ml-2">
        <Image
          className="select-none"
          src="/icon.png"
          width={54}
          height={54}
          alt="danilppzz web icon"
        />
        <h1 className={itim.className + " text-[20px] text-light-20 select-none"}>
          <Link href={"/"}>danilppzz</Link>
        </h1>
      </div>
      <nav className="flex items-center space-x-4 h-[54px] desktop:mr-[300px] laptop:mr-4 tablet:mr-4 mr-2">
        {isMobile ? (
          <>
            <Button state="allow" box={true}>
              {`<svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>`}
            </Button>
          </>
        ) : (
          <>
            <Link
              className={`${itim.className} text-base text-light-20 text-[20px] transition duration-300 ease-in-out transform hover:scale-125`}
              href="#about"
            >
              about
            </Link>
            <Link
              className={`${itim.className} text-base text-light-20 text-[20px] transition duration-300 ease-in-out transform hover:scale-125`}
              href="#projects"
            >
              projects
            </Link>
            <div className="border-l border-[#9D9D9D] h-6 mx-4" />
            <Button state="allow" box={true} onClick={() => openCV()}>
              cv
            </Button>
            <div className="border-l border-[#9D9D9D] h-6 mx-4" />
            <Button state="allow" box={false}>
              settings
            </Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default HeaderNav;

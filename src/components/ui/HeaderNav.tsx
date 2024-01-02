"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Itim } from "next/font/google";
import Button from "./Button";
import LinkedingIcon from "../icons/linkedingIcon";

interface HeaderNavProps {}

const itim = Itim({ subsets: ["latin"], weight: "400" });

const HeaderNav: React.FC<HeaderNavProps> = ({}) => {
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
      <nav className="flex items-center space-x-4 h-[54px] desktop:mr-[300px] laptop:mr-2 tablet:mr-2">
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
      </nav>
    </header>
  );
};

export default HeaderNav;

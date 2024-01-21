"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Itim } from "next/font/google";
import Button from "./ui/Button";

interface HeaderNavProps {}

const itim = Itim({ subsets: ["latin"], weight: "400" });

const HeaderNav: React.FC<HeaderNavProps> = ({}) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openURL = (url: string, isBlank: boolean) => {
    window.open(url, isBlank ? "_blank" : "_self");
  };

  return (
    <header
      className={`bg-dark-10 h-[60px] flex justify-between items-center fixed top-0 w-full z-10 bg-opacity-10 backdrop-blur-[2px] ${
        isMenuOpen ? "backdrop-blur-[10000px]" : ""
      } ${
        scrolled
          ? "border-b-[0.5px] border-light-30 border-opacity-10"
          : "border-b-[0.5px] border-light-30 border-opacity-0"
      }`}
    >
      <div className="flex items-center space-x-4 desktop:ml-[400px] laptop-xl:ml-[200px] laptop:ml-2 tablet:ml-2">
        <Image
          className="select-none"
          src="/icon.png"
          width={54}
          height={54}
          alt="danilppzz web icon"
        />
        <h1
          className={
            itim.className +
            " text-[20px] text-light-20 select-none transition duration-300 ease-in-out transform hover:scale-110"
          }
        >
          <Link href={"/"}>danilppzz</Link>
        </h1>
      </div>
      <nav className="flex items-center space-x-4 h-[54px] desktop:mr-[400px] laptop-xl:mr-[200px] laptop:mr-4 tablet:mr-4 mr-4">
        {isMobile === undefined ? (
          <h1></h1>
        ) : isMobile ? (
          <>
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {`<svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>`}
            </Button>
            {isMenuOpen && (
              <div className="absolute bg-dark-10 top-14 right-0 shadow-md p-2 w-full transition-all duration-1000 ease-in-out border-b-[0.5px] border-light-30 border-opacity-10">
                <Link
                  href="/"
                  className={`${itim.className} text-light-20 block py-1 hover:text-blue-500`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  className={`${itim.className} text-light-20 block py-1 hover:text-blue-500`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className={`${itim.className} text-light-20 block py-1 hover:text-blue-500`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/cv"
                  className={`${itim.className} text-light-20 block py-1 hover:text-blue-500`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Curriculum Vitae
                </Link>
                <Link
                  href="https://github.com/danilppzz"
                  target="_blank"
                  className={`${itim.className} text-light-20 block py-1 hover:text-blue-500`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Github 🔗
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              className={`${itim.className} text-base text-light-20 text-[20px] transition duration-300 ease-in-out transform hover:scale-110`}
              href="/#about"
            >
              About
            </Link>
            <Link
              className={`${itim.className} text-base text-light-20 text-[20px] transition duration-300 ease-in-out transform hover:scale-110`}
              href="/#projects"
            >
              Projects
            </Link>
            <div className="border-l border-[#9D9D9D] h-6 mx-4" />
            <Link href="/cv">
              <Button>cv</Button>
            </Link>
            <div className="border-l border-[#9D9D9D] h-6 mx-4" />
            <Link href="https://github.com/danilppzz" target="_blank">
              <Button>GitHub</Button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default HeaderNav;

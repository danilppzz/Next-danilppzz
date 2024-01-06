"use client";
import React, { ReactNode } from "react";
import { text } from "stream/consumers";

import { Itim } from "next/font/google";
import LinkedingIcon from "../icons/linkedingIcon";
import SettingsIcon from "../icons/SettingsIcon";

interface ButtonProps {
  icon?: "in" | "stn";
  text?: string;
  box?: Boolean;
  state?: "allow" | "deny";
  onClick?: () => void;
  children?: ReactNode;
  className?: ReactNode;
}

const itim = Itim({ subsets: ["latin"], weight: "400" });

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  box,
  state,
  onClick,
  children,
  className,
}) => {
  const buttonClasses = `text-light-20 py-2 px-4 rounded h-[35px] bg-dark-30 border-white border-solid border-opacity-20 border-[0.2px] rounded-4 flex items-center justify-center hover:bg-dark-10
    ${state ? "cursor-pointer" : "cursor-not-allowed"}
    ${box ? "w-[35px]" : "w-[80px]"}
  `;

  return (
    <button
      className={buttonClasses + " " + itim.className}
      onClick={onClick}
      disabled={state === "deny"}
    >
      {children && <div dangerouslySetInnerHTML={{ __html: children as string }} />}
    </button>
  );
};

export default Button;

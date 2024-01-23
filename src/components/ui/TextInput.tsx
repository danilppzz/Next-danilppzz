"use client";
// RippleButton.tsx
import React, { ReactNode, useRef } from "react";
import "./css/Button.css";
import { Itim } from "next/font/google";

const itim = Itim({ subsets: ["latin"], weight: "400" });

interface TextInputProps {
  type: "text" | "password" | "mail";
  placeholder: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  onClick,
  children,
  className,
}) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={"input-css " + itim.className + " " + className}
      onClick={(e) => {}}
    >
      {children}
    </input>
  );
};

export default TextInput;

"use client";
// RippleButton.tsx
import React, { ReactNode, useRef } from "react";
import "./css/Button.css";

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
      className={"input-css " + className}
      onClick={(e) => {}}
    >
      {children}
    </input>
  );
};

export default TextInput;

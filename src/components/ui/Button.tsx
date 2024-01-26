"use client";
// RippleButton.tsx
import React, { ReactNode, useRef } from "react";
import "./css/Button.css";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const button = buttonRef.current;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.classList.add("ripple");
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 5000);
    }
  };
  const handlerClick = (e: any) => {
    createRipple(e);
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      ref={buttonRef}
      className={"input-css " + className}
      onClick={(e) => {
        handlerClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;

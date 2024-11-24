"use client";
import React from "react";

interface ButtonProps {
  id?: string;
  buttonText: string;
  onClick: () => void;
  className?: string;
  svgRight?: any;
  svgLeft?: any;
  path?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  buttonText,
  onClick,
  className,
  svgRight,
  svgLeft,
  path,
}) => {
  return (
    <div className={`relative me-2 group ${className || ""}`}>
      <button
        id={id}
        onClick={onClick}
        className="relative  p-px flex items-center justify-center leading-6 text-white  shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-xl  p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

        <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#202020]">
          <div className="relative z-10 flex items-center space-x-2">
            <span className="transition-all duration-500 flex items-center justify-center text-sm">
              {svgLeft}&nbsp;
              {buttonText}&nbsp;
              {svgRight}
            </span>
          </div>
        </span>
      </button>
    </div>
  );
};

export default Button;

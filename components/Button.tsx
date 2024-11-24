"use client";
import React from "react";

interface ButtonProps {
  id?: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
  svgRight?: any;
  svgLeft?: any;
  path?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  buttonText,
  onClick,
  className,
  svgRight,
  svgLeft,
  path,
  disabled,
}) => {
  return (
    <div className={`relative me-2 group ${className || ""}`}>
      <button
        disabled={disabled}
        id={id}
        onClick={onClick}
        className={`relative p-px flex items-center justify-center leading-6 text-white shadow-2xl rounded-xl 
            ${
              disabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            }`}
      >
        <span className="relative  block px-6 py-3 rounded-xl bg-[#202020]">
          <div className="  flex items-center justify-center space-x-2 text-sm">
            {svgLeft && (
              <div className="  flex items-center justify-center">
                {svgLeft}&nbsp;
              </div>
            )}
            {buttonText && (
              <div className="  flex items-center justify-center">
                {buttonText}&nbsp;
              </div>
            )}
            {svgRight && (
              <div className="  flex items-center justify-center">
                {svgRight}
              </div>
            )}
          </div>
        </span>
      </button>
    </div>
  );
};

export default Button;

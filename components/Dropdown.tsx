"use client";
import React, { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface DropdownProps {
  selectedNumber: number | null;
  setSelectedNumber: Dispatch<SetStateAction<number | null>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedNumber,
  setSelectedNumber,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (number: number) => {
    setSelectedNumber(number);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-40">
      {/* Dropdown Toggle Button */}
      <Button
        id="dropdownDefaultButton"
        buttonText={
          selectedNumber !== null ? `Pages: ${selectedNumber}` : "Pages: 0"
        }
        onClick={toggleDropdown}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="absolute mt-2 bg-white divide-y divide-gray-400 rounded-lg shadow w-44 dark:bg-[#202020]"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
              <li
                key={number}
                onClick={() => handleSelect(number)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

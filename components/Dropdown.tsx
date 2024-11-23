"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (number: number) => {
    setSelectedNumber(number); // Update the selected number
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 mt-2"
        type="button"
      >
        {selectedNumber !== null ? `Pages: ${selectedNumber}` : " Pages: 0"}{" "}
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
              <li
                key={number}
                onClick={() => handleSelect(number)} // Call handler on selection
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

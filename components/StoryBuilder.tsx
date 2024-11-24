"use client";
import React, { useState } from "react";
import StoryPrompt from "./StoryPrompt";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";

const StoryBuilder = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  return (
    <div className="mb-10 mt-10">
      <StoryPrompt />
      <div className="flex justify-center items-center mt-3">
        <Dropdown
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
        <Button
          id="generateStory"
          buttonText="Generate Story"
          onClick={() => {}}
          disabled={selectedNumber === null} // Disable if no page is selected
          svgRight={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pen-line"
            >
              <path d="M12 20h9" />
              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            </svg>
          }
        />
      </div>
      <div className="z-10 mt-4 lg:mt-0 lg:absolute top-14 right-14 flex justify-center items-center">
        <Link href="/stories">
          <Button
            id="browseStories"
            buttonText="Read created stories"
            onClick={() => {}}
            svgRight={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-text"
              >
                <path d="M12 7v14" />
                <path d="M16 12h2" />
                <path d="M16 8h2" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                <path d="M6 12h2" />
                <path d="M6 8h2" />
              </svg>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default StoryBuilder;

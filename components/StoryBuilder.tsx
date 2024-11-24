"use client";
import React, { useState } from "react";
import StoryPrompt from "./StoryPrompt";
import Button from "./Button";
import Dropdown from "./Dropdown";

const StoryBuilder = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [storyPrompt, setStoryPrompt] = useState<string | null>(null);
  const handleCreateSrory = (
    storyPrompt: string | null,
    selectedNumber: number | null
  ) => {
    // Handle the create story logic here
    console.log(
      "Create Story about :",
      storyPrompt,
      "in",
      selectedNumber,
      "pages"
    );
  };

  return (
    <div className="mb-10 mt-10">
      <StoryPrompt storyPrompt={storyPrompt} setStoryPrompt={setStoryPrompt} />

      <div className="flex justify-center items-center mt-3">
        <Dropdown
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
        <div className="ms-3">
          <Button
            id="generateStory"
            buttonText="Generate Story"
            onClick={() => {
              handleCreateSrory(storyPrompt, selectedNumber);
            }}
            disabled={!storyPrompt || selectedNumber === null}
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
      </div>
    </div>
  );
};

export default StoryBuilder;

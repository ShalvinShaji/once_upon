"use client";
import React from "react";
import StoryPrompt from "./StoryPrompt";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";
const StoryBuilder = () => {
  return (
    <div className="mb-10 mt-10">
      <StoryPrompt />
      <div className="flex justify-center items-center mt-3">
        <Dropdown />
        <Button
          id="generateStory"
          buttonText="Generate Story"
          onClick={() => {}}
        />
      </div>
      <div className="mt-4 lg:mt-0 lg:absolute top-14 right-14 flex justify-center items-center">
        <Link href="/stories">
          <Button
            id="browseStories"
            buttonText="Read created stories"
            onClick={() => {}}
          />
        </Link>
      </div>
    </div>
  );
};

export default StoryBuilder;

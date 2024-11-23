import React from "react";
import StoryPrompt from "./StoryPrompt";
import Button from "./Button";
import Dropdown from "./Dropdown";
import CreatedStories from "./CreatedStories";
const StoryBuilder = () => {
  return (
    <div className="p-4">
      <StoryPrompt />
      <div className="flex justify-center items-center mt-3">
        <Dropdown />
        <Button
          id="generateStory"
          buttonText="Generate Story"
          onClick={() => {}}
        />
      </div>
      <CreatedStories />
    </div>
  );
};

export default StoryBuilder;

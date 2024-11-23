import React from "react";
import StoryPrompt from "./StoryPrompt";
import Button from "./Button";
import Dropdown from "./Dropdown";
const StoryBuilder = () => {
  return (
    <div className="p-4">
      <StoryPrompt />
      <div className="flex justify-center items-center">
        <Dropdown />
        <Button />
      </div>
    </div>
  );
};

export default StoryBuilder;

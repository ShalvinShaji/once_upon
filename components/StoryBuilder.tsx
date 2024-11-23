import React from "react";
import StoryPrompt from "./StoryPrompt";
import Button from "./Button";
const StoryBuilder = () => {
  return (
    <div>
      {/* <h1 className="text-wrap">
        "Oops! 🚧 Our Website is Still Under Construction{" "}
        <span className="animate-pulse">!</span> "
      </h1> */}
      <StoryPrompt />
      <Button />
    </div>
  );
};

export default StoryBuilder;

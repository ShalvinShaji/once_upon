import React from "react";
import Button from "./Button";

const StoryCard = (props: any) => {
  return (
    <div className="h-[16em] w-[18em] border-2 border-[rgb(22,22,22)] rounded-[1.5em] bg-gradient-to-br from-[#282828] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
      <div className="flex flex-col items-start justify-center gap-[0.5em]">
        <p className="text-2xl font-bold">{props.title}</p>
        <p className="font-light">{props.description}</p>
      </div>

      <Button
        id="readStory"
        buttonText="Read Story"
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
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        }
      />
    </div>
  );
};

export default StoryCard;

import React from "react";
import Button from "./Button";

const StoryCard = (props: any) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      {/* Card Image */}
      <img
        className="w-full h-[150px] object-cover rounded-t-xl mx-auto"
        src={props.image || "https://via.placeholder.com/200x150"} // Placeholder image if not provided
        alt={props.title || "Card Image"}
      />
      {/* Card Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {props.description}
        </p>
        {/* Button */}
        <div className="mt-2">
          <Button
            id="readStory"
            buttonText="Read Story"
            onClick={props.onClick} // Maintains original functionality
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
      </div>
    </div>
  );
};

export default StoryCard;

import React from "react";
import Button from "./Button";
import Image from "next/image";

const StoryCard = (props: any) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      {/* Card Image */}
      <Image
        width={0}
        height={0}
        className="w-full h-[150px] object-cover rounded-t-xl mx-auto" // Applies utility classes for full width, cover object-fit, rounded top corners, and centering the image
        src={props.image || "https://via.placeholder.com/200x150"} // If props.image is not provided, it defaults to a placeholder image
        alt={props.title || "Card Image"} // Uses props.title as alt text, or defaults to "Card Image" if not provided
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

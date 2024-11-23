import React from "react";
import StoryCard from "./StoryCard";
import Button from "./Button";

const CreatedStories = () => {
  const stories = [
    {
      title: "The Enchanted Forest",
      description: "A magical tale of a forest filled with wonder and mystery.",
    },
    {
      title: "Journey to the Stars",
      description: "Explore the universe in this thrilling space adventure.",
    },
    {
      title: "Mystery of the Lost Treasure",
      description:
        "Follow a group of adventurers on a quest for hidden riches.",
    },
  ];

  return (
    <section className="mt-8 p-2">
      <div>
        <p className="text-2xl text-center mb-5 font-extrabold text-[#e4e4e7] leading-tight">
          Browse&nbsp;
          <span className="text-[#7957A8] bg-[#e4e4e7] p-1 rounded-lg ">
            Stories
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            description={story.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          id="createStory"
          buttonText="More stories"
          onClick={() => {}}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default CreatedStories;

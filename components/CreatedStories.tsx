"use client";
import React from "react";
import StoryCard from "./StoryCard";
import Button from "./Button";
import Link from "next/link";

const CreatedStories = () => {
  const stories = [
    {
      title: "The Enchanted Forest",
      description: "A magical tale of a forest filled with wonder and mystery.",
      image:
        "https://media.istockphoto.com/id/1414956253/photo/space-nebula-background.jpg?s=2048x2048&w=is&k=20&c=8T0Q3FbJ5Ul3JUFFG_trhGBlCs7eybKVC-hC4GBIZlI=",
    },
    {
      title: "Journey to the Stars",
      description: "Explore the universe in this thrilling space adventure.",
      image:
        "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mystery of the Lost Treasure",
      description:
        "Follow a group of adventurers on a quest for hidden riches.",
      image:
        "https://media.istockphoto.com/id/482954331/photo/solar-system.jpg?s=2048x2048&w=is&k=20&c=5WQvf6BkNSFi-6hjH9tAkfM2ZN760QZSmB1_otsH1N8=",
    },
    {
      title: "A Boy's 13 Breakups",
      description:
        "The rollercoaster life of a boy who had 13 heartbreaks and learned about love the hard way.",
      image:
        "https://media.istockphoto.com/id/1362712643/vector/divorce-couple-torn-paper-concept.jpg?s=2048x2048&w=is&k=20&c=gNf2Gq46WJmAb8Pfzm4m_IDZ18K9jFhf2V-EL98L35g=",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            description={story.description}
            image={story.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CreatedStories;

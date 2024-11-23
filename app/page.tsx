"use client";
import Button from "@/components/Button";
import StoryBuilder from "@/components/StoryBuilder";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <StoryBuilder />
      </div>
    </>
  );
};

export default page;

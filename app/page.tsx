"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import StoryBuilder from "@/components/StoryBuilder";

import Loader from "@/components/Loader"; // Import the loader component

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isLoading ? "dark" : "app-bg"
      }`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex-1 flex items-center justify-center">
            <Header />
          </div>
          <div className="flex-1 flex items-start justify-center">
            <StoryBuilder />
          </div>
        </>
      )}
    </div>
  );
}

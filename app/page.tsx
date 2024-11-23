"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import StoryBuilder from "@/components/StoryBuilder";

import Loader from "@/components/Loader"; // Import the loader component
import CreatedStories from "@/components/CreatedStories";
import Footer from "@/components/Footer";

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
          <div className="">
            <Header />
          </div>
          <div className="">
            <StoryBuilder />
          </div>
          <div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

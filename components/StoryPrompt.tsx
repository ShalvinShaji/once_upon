import React from "react";

const StoryPrompt = () => {
  return (
    <div>
      <form>
        <textarea
          id="message"
          rows={4}
          className=" text_area block p-2.5 w-full text-sm bg-zinc-900 text-gray-50 rounded-lg 
                     min-w-300 sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px]"
          placeholder="Your story prompt goes here..."
        ></textarea>
      </form>
    </div>
  );
};

export default StoryPrompt;

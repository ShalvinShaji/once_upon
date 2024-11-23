import React from "react";

const StoryPrompt = () => {
  return (
    <div>
      <form>
        <textarea
          id="message"
          rows={4}
          className=" min-w-[600px] block p-2.5 w-full text-sm bg-zinc-900 text-gray-50 rounded-lg "
          placeholder="Your story prompt goes here..."
        ></textarea>
      </form>
    </div>
  );
};

export default StoryPrompt;

import React, { Dispatch, SetStateAction } from "react";

interface StoryPromptProps {
  storyPrompt: string | null;
  setStoryPrompt: Dispatch<SetStateAction<string | null>>;
}

const StoryPrompt: React.FC<StoryPromptProps> = ({
  storyPrompt,
  setStoryPrompt,
}) => {
  const handleStoryPromptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newPrompt = event.target.value;
    setStoryPrompt(newPrompt);
  };

  return (
    <div>
      <form>
        <textarea
          id="message"
          value={storyPrompt || ""} // To handle null case, ensure it's a string
          rows={4}
          className="text_area block p-2.5 w-full text-sm bg-zinc-900 text-gray-50 rounded-lg 
                     min-w-300 sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px]"
          placeholder="Your story prompt goes here..."
          onChange={handleStoryPromptChange}
        ></textarea>
      </form>
    </div>
  );
};

export default StoryPrompt;

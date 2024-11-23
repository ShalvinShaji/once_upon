import Header from "@/components/Header";
import StoryBuilder from "@/components/StoryBuilder";

export default function Home() {
  return (
    <div className="dark flex flex-col items-center justify-center min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <Header />
      </div>
      <div className="flex-1 flex items-start justify-center">
        <StoryBuilder />
      </div>
    </div>
  );
}

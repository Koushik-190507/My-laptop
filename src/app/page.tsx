import Navigation from "@/components/Navigation";
import ImageSequence from "@/components/ImageSequence";
import StoryBeats from "@/components/StoryBeats";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navigation />
      <ImageSequence />
      <StoryBeats />
    </main>
  );
}

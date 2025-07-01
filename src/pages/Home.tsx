import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Hero from "@/layout/components/Hero";
import logos from "@/data/devLogos.json";
import { Projects } from "@/layout/components/Projects";

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col relative">
      <Hero />
      <div className="w-full z-[1] flex justify-center flex-col items-center gap-5">
        <InfiniteMovingCards
          direction="left"
          speed="slow"
          className="w-full h-full max-w-7xl overflow-hidden"
          items={logos}
        />
        <div className="w-full flex flex-col gap-3 max-w-7xl ">
          <div className="w-full items-center ">
            <h2 className="font-orbitron text-nowrap pl-4 text-3xl lg:text-4xl xl:text-5xl flex justify-center xl:justify-end text-border-white tracking-widest">
              Selected Works
            </h2>
          </div>
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Home;

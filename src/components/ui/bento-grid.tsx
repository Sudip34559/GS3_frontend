import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./direction-aware-hover";
import { Aperture, Globe } from "lucide-react";
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] lg:grid-cols-2 xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input w-full row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      <DirectionAwareHover imageUrl="/transitionBg.png" className="w-full">
        <div className="w-full h-full  flex flex-col justify-between py-1 gap-2">
          <div className="w-full text-white font-sm font-orbitron text-2xl flex gap-1 items-center">
            <Aperture /> Title
          </div>

          <Button
            variant="default"
            className="font-orbitron w-[80px]  border-[1px] border-gray-400/20 bg-neutral-400/20 text-neutral-200 hover:backdrop-blur-[2px] hover:text-gray-900 cursor-pointer backdrop-blur-[1px] duration-700"
          >
            {" "}
            <Globe /> Live
          </Button>
        </div>
      </DirectionAwareHover>
    </div>
  );
};

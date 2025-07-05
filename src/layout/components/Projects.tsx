import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Projects() {
  return (
    <BentoGrid className="max-w-7xl mx-auto p-3">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          imageUrl={item.imageUrl}
          liveLink={item.liveLink}
          caseStudyLink={item.caseStudyLink}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

{
  /*image url and other links will be provided after review*/
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <div className="h-4 w-4 text-neutral-500" />,
    imageUrl: "",
    caseStudyLink: "/case-studies/project1",
    liveLink: "",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <div className="h-4 w-4 text-neutral-500" />,
    imageUrl: "",
    caseStudyLink: "/case-studies/project2",
    liveLink: "",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <div className="h-4 w-4 text-neutral-500" />,
    imageUrl: "",
    caseStudyLink: "/case-studies/project3",
    liveLink: "",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <div className="h-4 w-4 text-neutral-500" />,
    imageUrl: "",
    caseStudyLink: "/case-studies/project4",
    liveLink: "",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <div className="h-4 w-4 text-neutral-500" />,
    imageUrl: "",
    caseStudyLink: "/case-studies/project5",
    liveLink: "",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <div className="h-4 w-4 text-neutral-500" />,
    imageUrl: "",
    caseStudyLink: "/case-studies/project6",
    liveLink: "",
  },
];

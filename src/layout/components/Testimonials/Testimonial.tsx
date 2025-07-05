import React from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import ShinyText from "@/components/reactbits/ShinyText";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Product Designer",
    message:
      "This platform transformed our workflow! The interface is intuitive and performance is unmatched.",
    image:
      "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rahul Mehta",
    role: "Full-Stack Developer",
    message:
      "Incredible attention to detail and thoughtful UI/UX. It's a pleasure to use every day.",
    image:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
  },
  {
    name: "Simran Das",
    role: "UI Engineer",
    message:
      "A game-changer! The animations and performance blew us away in client demos.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
  },
  {
    name: "Aditya Roy",
    role: "Tech Lead",
    message:
      "The best development experience I’ve had. Clean code, smooth transitions.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Megha Sinha",
    role: "Marketing Strategist",
    message:
      "Perfect blend of aesthetics and usability. We saw instant engagement rise.",
    image:
      "https://images.unsplash.com/photo-1683829989980-2f78a0ca9879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ravi Prasad",
    role: "QA Engineer",
    message:
      "Thoroughly impressed with the responsiveness and accessibility built in.",
    image:
      "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=f4jSwZ_zYOQopFOIcL8Xhz2aaqnUAdzs1-yU-s9t8eU=",
  },
  {
    name: "Zara Ali",
    role: "Project Manager",
    message:
      "Onboarding became a breeze with this system. Clients love it, we love it.",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
  },
  {
    name: "Neeraj Kapoor",
    role: "DevOps Engineer",
    message:
      "Deployments became smoother. Integrated CI/CD pipelines seamlessly.",
    image:
      "https://images.unsplash.com/photo-1513152697235-fe74c283646a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Tanvi Rao",
    role: "Content Designer",
    message: "Beautiful UI and delightful animations make this platform shine.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ishaan Verma",
    role: "CTO",
    message:
      "Robust, scalable, and elegant — exactly what we needed for our product vision.",
    image:
      "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Testimonial = () => {
  return (
    <div className="py-20 transition-all duration-300 text-amber-50">
      <div className="flex justify-center mb-12">
        <ShinyText
          text="What People Are Saying"
          className="text-4xl md:text-5xl font-orbitron text-center"
        />
      </div>

      <div className="overflow-visible py-4">
        <Marquee
          pauseOnHover
          speed={50}
          gradient={true}
          gradientColor="black"
          gradientWidth={100}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="mx-4 min-w-[300px] max-w-sm rounded-xl p-10 bg-white/5 backdrop-blur-md border border-white/10 text-white transform transition-all duration-300 ease-in-out hover:scale-105 hover:border-white hover:shadow-xl hover:z-30"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={t.image}
                  className="w-12 h-12 rounded-full object-cover border border-white/20 transition-transform duration-300 hover:border-amber-400 hover:scale-120"
                  alt={t.name}
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-neutral-400 hover:text-amber-500 font-semibold transition duration-150">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-sm italic mb-3">“{t.message}”</p>
              <div className="flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;

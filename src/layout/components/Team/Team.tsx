import { Github, Linkedin } from "lucide-react";

const team = [
  {
    name: "Giridhari Dutta",
    role: "Director",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=182,h=224,fit=crop/ALpOL3M5PJiMVoKP/giri-AwvPbZX25gHPwR9j.jpg",
    github: "",
    linkedin: "",
    bio: "I have a multifaceted role in my projects, serving as a team leader, project coordinator, consultant, and developer. I enjoy leading teams, coordinating project activities, providing valuable insights as a consultant.",
  },
  {
    name: "Sudip Tunga",
    role: "Full Stack Developer",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=182,h=224,fit=crop/ALpOL3M5PJiMVoKP/img_20250309_132855-YD0lZzNWEoFbBjlG.jpg",
    github: "",
    linkedin: "",
    bio: "I'm a B.Tech Engineer, specializing in React, Node.js, and Express. With expertise in full-stack development, I build scalable, high-performance web applications and seamless user experiences.",
  },
  {
    name: "Md Afnan Naushad",
    role: "Web Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGeWcRw2Wj-NQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715002639397?e=1757548800&v=beta&t=EZEw4kjAnh7FXkwjB11ORYvqRsmlhxcEsaCDmTp051s",
    github: "",
    linkedin: "",
    bio: "I am a B.Tech student ,specializing in building attractive interfaces and applied logics ,passionate about turning ideas into beautiful web interfaces.",
  },
  {
    name: "Rahul Mullik",
    role: "UI/UX Designer",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=182,h=224,fit=crop/ALpOL3M5PJiMVoKP/whatsapp-image-2025-03-18-at-21.38.08-mxB4kL4bkKc8vjre.jpeg",
    github: "",
    linkedin: "",
    bio: "I'm an experienced UI/UX designer with expertise in motion graphics and visual effects, combines creativity and technical skills to enhance the visual appeal and functionality of digital products.",
  },
  {
    name: "Kundan Kumar",
    role: "Backend Developer",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/ALpOL3M5PJiMVoKP/kundan-AE0vWeznegcr10q8.PNG",
    github: "",
    linkedin: "",
    bio: "I'm an experienced UI/UX designer with expertise in motion graphics and visual effects, combines creativity and technical skills to enhance the visual appeal and functionality of digital products..",
  },
  {
    name: "Ravi Yadav",
    role: "App Developer",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/ALpOL3M5PJiMVoKP/ravi-YrDXb20Z2qcVq5Rn.PNG",
    github: "",
    linkedin: "",
    bio: "I specialize in mobile app development, with expertise in React Native, Flutter, and Kotlin for Android. I have a strong background in creating cross-platform applications that are both functional and user-friendly.",
  },
  {
    name: "Ayan Kundu",
    role: "Digital Marketer",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/ALpOL3M5PJiMVoKP/whatsapp-image-2025-03-18-at-21.37.43-mxB4kL4GxGujevbz.jpeg",
    github: "",
    linkedin: "",
    bio: "I'm a seasoned Digital Marketer & business analyst specializing in business growth and marketing , leverages strategy and branding guarantees a compelling business growth...",
  },
  {
    name: "Anup Jana",
    role: "Frontend Developer",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=182,h=224,fit=crop/ALpOL3M5PJiMVoKP/make_it_as_it_professional_image_4067123164-mjE5byEMk8TPjpXE.png",
    github: "",
    linkedin: "",
    bio: "I'm experienced in full-stack development, proficient in React Native, Flutter, and Node.js. I enjoy crafting end-to-end solutions that deliver great user experiences across platforms.",
  },
];

const Team = () => {
  return (
    <div className="py-15 text-amber-50">
      <div className="flex justify-center mb-12">
        <h2 className="font-orbitron text-nowrap pl-4 text-4xl lg:text-4xl xl:text-5xl flex justify-center xl:justify-end text-border-white tracking-widest">
          Meet the Team
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-20">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="group relative w-72 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-white"
          >
            <div className="relative w-24 h-24 mx-auto mb-4 group">
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-black rounded-full" />
              </div>
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full relative z-10 group-hover:scale-95 transition-transform duration-500"
              />
            </div>

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-neutral-400 mb-3 hover:text-yellow-400 transition-transform">
              {member.role}
            </p>
            <p className="text-xs text-neutral-300 italic mb-3 px-2">
              {member.bio}
            </p>
            <div className="flex justify-center gap-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-yellow-400 transition" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 hover:text-yellow-400 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

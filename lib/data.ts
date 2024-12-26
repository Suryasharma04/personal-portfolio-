import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiNewspaper } from "react-icons/pi";
import { HiMiniCodeBracket } from "react-icons/hi2";
import zooImg from "@/public/zoo.png";
import recruitMeImg from "@/public/recruitMe.png";
import artrieImg from '@/public/artrie.png';
import weatherImg from '@/public/weather_.png';
import meditationImg from '@/public/meditate.png';
import aliveImg from '@/public/aliveimg.png';
import icgImg from '@/public/icgenius.png';
// PiNewspaper

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Web Developer, Ithaca College",
    location: "Ithaca, NY",
    description:
      "Designed a Figma-based mobile app prototype for Ithaca College, improving usability through stakeholder collaboration. Streamlined processes by automating Nutrislice menu updates and revamping IC Service Portal guides, reducing support inquiries. Additionally, updated JavaScript code to maintain website functionality.",
    icon: React.createElement(HiMiniCodeBracket),
    date: "Aug. 2022 - present",
  },
  {
    title: "Learning Coach, Ithaca College",
    location: "Ithaca, NY",
    description:
      "Tutored students in calculus, probability, and programming concepts creating personalized study plans to improve academic performance. Provided assistance with debugging and optimizing code in various programming languages, including Java, JavaScript, R, and Swift.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar. 2022 - present",
  },
  {
    title: "Web Director, The Ithacan",
    location: "Ithaca, NY",
    description:
      "Collaborated with the design team to launch interactive games, enhancing user engagement. Improved website performance through regular backend updates, resolving issues to boost user experience. Analyzed analytics data to generate performance reports, increasing content reach over time.",
    icon: React.createElement(HiMiniCodeBracket),
    date: "Jan. 2024 - Dec. 2024",
  },
  {
    title: "Research Assistant, Cornell University",
    location: "Ithaca, NY",
    description:
      "Collaborated with professors from Cornell and Iowa State to develop a Unity-based VR game using C# for evaluating team communication in a 3D maze. Designed a Bezier curve-based teleportation system and applied realistic textures to reduce motion sickness.",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap />,
    date: "June 2024 - Sep. 2024",
  },
  {
    title: "Summer Scholar '24, Ithaca College",
    location: "Ithaca, NY",
    description:
      "Built an innovative iOS Augmented Reality (AR) mobile application for Art History and Architecture enthusiasts. Currently building a Web App with AI assistant for College-level courses.",
    icon: React.createElement(FaReact),
    date: "June 2024 - Aug. 2024",
  },
  {
    title: "Summer Scholar '23, Ithaca College",
    location: "Ithaca, NY",
    description:
      "Built an innovative iOS Augmented Reality (AR) mobile application for Art History and Architecture enthusiasts. Currently building a Web App with AI assistant for College-level courses.",
    icon: React.createElement(FaReact),
    date: "May 2023 - Aug. 2023",
  },

] as const;

export const projectsData = [
  {
    title: "ICGenius",
    description:
      "Developed a web app that offers access to course-specific materials and features an AI assistant, that generates responses based on the content uploaded by professors.",
    tags: ["Figma", "Javascript", "React", "Python", "MySQL", "SQL"],
    imageUrl: icgImg,
    githubUrl: "https://github.com/Suryasharma04/CourseAssistantWebsite-VS",
  },
  {
    title: "ALive App",
    description:
      "A concert app for music lovers to explore setlists, relive shows through live videos, and contribute their own concert experiences.",
    tags: ["Figma", "Javascript", "React", "React Native","MySQL", "SQL"],
    imageUrl: aliveImg,
    githubUrl: "https://github.com/Suryasharma04/alive_app",
  },
  {
    title: "Artrie",
    description:
      "An Augmented Reality mobile application, programmed in Swift, for Art History and Architecture.",
    tags: ["Swift", "ARKit", "Xcode", "Figma"],
    imageUrl: artrieImg,
    githubUrl: "https://github.com/Suryasharma04/Artrie",
  },
  {
    title: "RecruitMe",
    description:
    "A project created by classmates for students seeking college-level sports and teams.",
    tags: ["Python", "Javascript", "React", "FastAPI", "BeautifulSoup", "Selenium" ,"Figma"],
    imageUrl: recruitMeImg,
    githubUrl: "https://github.com/CRaineault/RecruitMe",
  },
  // {
  //   title: "Weather App",
  //   description:
  //     "A user-friendly weather app designed to provide real-time weather updates based on your current location.",
  //   tags: ["Swift", "Xcode" ,"API", "Figma"],
  //   imageUrl: weatherImg,
  //   githubUrl: "https://github.com/Suryasharma04/WeatherApp",
  // },
  {
    title: "Zoo Management System",
    description:
      "A website built to manage the sprinklers, feeding, and locks for the animals in the zoo.",
    tags: ["JavaScript", "HTML", "CSS", "React", "Figma"],
    imageUrl: zooImg,
    githubUrl: "https://github.com/Suryasharma04/ZooManagementSystem",
  },
  {
    title: "Meditation App",
    description:
      "An easy-to-use meditation app crafted to bring tranquility and mindfulness into your busy day.",
    tags: ["Swift", "Xcode" , "Figma"],
    imageUrl: meditationImg,
    githubUrl: "https://github.com/Suryasharma04/MeditationApp",
  },
]as const;

export const skillsData = [
  "Java",
  "Swift",
  "JavaScript",
  "Python",
  "React",
  "React Native",
  "SQL",
  "Neo4j",
  "HTML",
  "CSS",
  "Xcode",
  "Unity",
  "C#",
  "C",
  "PHP",
  "Next.js",
  "Node.js",
  "Bootstrap",
  "Git",
  "MS Suite",
  "TypeScript",
  "Framer Motion",
  "MySQL",
  "Docker",
  "Linux",
  "VS Code",
  "IntelliJ IDEA",
  "Figma",
  "Procreate",
  "Canva",
  "iMovie",
] as const;
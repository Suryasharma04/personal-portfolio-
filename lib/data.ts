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
    title: "Research Assistant, Cornell University",
    location: "Ithaca, NY",
    description:
      "Working on projects related to artificial intelligence and virtual reality, exploring how these technologies can be used to treat trauma patients, assist visually impaired individuals, and other applications.",
    icon: React.createElement(LuGraduationCap),
    // icon: <LuGraduationCap />,
    date: "2024 - present",
  },
  {
    title: "Web Director, The Ithacan",
    location: "Ithaca, NY",
    description:
      "Maintain and optimize the website, ensuring a seamless user experience for around 10,000 monthly visitors. Monitor website performance using analytics tools, generating monthly reports and achieving a 2-5% increase in page views monthly.",
    icon: React.createElement(PiNewspaper),
    date: "2024 - present",
  },
  {
    title: "Summer Researcher/Scholar, Ithaca College",
    location: "Ithaca, NY",
    description:
      "Built an innovative iOS Augmented Reality (AR) mobile application for Art History and Architecture enthusiasts. Currently building a Web App with AI assistant for College-level courses.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Junior Web Developer, Ithaca College",
    location: "Ithaca, NY",
    description:
      "Assist the Junior Web Developer team to design the layout for the Ithaca College Mobile Application, to enhance user experience and interface design. Updated the Drupal documentation on the Ithaca College website, improving clarity and usability for site administrators and contributors.",
    icon: React.createElement(HiMiniCodeBracket),
    date: "2022 - present",
  }
] as const;

export const projectsData = [
  {
    title: "Artrie",
    description:
      "An Augmented Reality mobile application, programmed in Swift, for Art History and Architecture.",
    tags: ["Swift", "ARKit", "Xcode", "Firebase", "Figma"],
    imageUrl: artrieImg,
    githubUrl: "https://github.com/Suryasharma04/Artrie",
  },
  {
    title: "RecruitMe",
    description:
    "A project created by classmates for students seeking college-level sports and teams.",
    tags: ["Python", "Javascript", "React", "FastAPI", "BeautifulSoup", "Figma"],
    imageUrl: recruitMeImg,
    githubUrl: "https://github.com/CRaineault/RecruitMe",
  },
  {
    title: "Weather App",
    description:
      "A user-friendly weather app designed to provide real-time weather updates based on your current location.",
    tags: ["Swift", "Xcode" ,"API", "Figma"],
    imageUrl: weatherImg,
    githubUrl: "https://github.com/Suryasharma04/WeatherApp",
  },
  {
    title: "Zoo Management System",
    description:
      "A website built with JavaScript, HTML, CSS, and React to manage the sprinklers, feeding, and locks for the animals in the zoo.",
    tags: ["JavaScript", "HTML", "CSS", "React", "Figma"],
    imageUrl: zooImg,
    githubUrl: "https://github.com/Suryasharma04/ZooManagementSystem",
  },
  {
    title: "Meditation App",
    description:
      "An easy-to-use meditation app crafted to bring tranquility and mindfulness into your busy day.",
    tags: ["Java", "mySQL", "Figma"],
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
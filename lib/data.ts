import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import mekdiwebsite from "@/public/mekdiwebsite.png"
import rainswebsite from "@/public/rainswebsite1.png"
import mytixwebsite from "@/public/mytixwebsite1.png"

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Purwadhika Digital Technology School Fullstack Web Development Bootcamp",
    location: "Jakarta",
    description:
     `Completed a rigorous 6-month bootcamp specializing in JavaScript fundamentals, ReactJS for front-end development, and Node.js/Express for back-end development. Proficiently applied learning through project development. 
      Grade : 84.40 / 100`,
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Gunadarma University, Bachelor degree of Informatics Engineering",
    location: "Depok",
    description:
      "Graduated with GPA 3.55 / 4.00",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "RAINS Multi Warehouse E-commerce",
    description:
      "Contributed to authentication features, homepage design, product views, and admin dashboard development.",
    tags: ["React", "ExpressJs", "MySQL", "Tailwind", "NodeJS", "Redux", "Sequelize", "Chakra UI"],
    imageUrl: rainswebsite,
    portofolioLink: "https://github.com/anggaratriputra/jcwd250401",
    site: "https://rains.anggaratriputra.my.id",
  },
  {
    title: "MEKDI Point-of-Sale (POS) Management ",
    description:
      "Worked on developing administrative functionalities, menu lists for cashiers and process of transaction in the POS application.",
    tags: ["React", "ExpressJs", "MySQL", "NodeJS", "Redux", "Sequelize", "Chakra UI"],
    imageUrl: mekdiwebsite,
    portofolioLink: "https://github.com/anggaratriputra/cashier-app",
    site: "https://mekdi.anggaratriputra.my.id",
  },
  {
    title: "MYTIX Event / Ticketing Management",
    description:
      "Developing a front end project, worked on ticket selection process and transaction process.",
    tags: ["React", "JSON", "Chakra UI", "Redux"],
    imageUrl: mytixwebsite,
    portofolioLink: "https://github.com/anggaratriputra/eventManagement",
    site: "https://resilient-yeot-af509a.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Express",
  "Tailwind",
  "Chakra UI",
  "RESTful API",
  "MySQL",
  "Redux",
  "Sequelize",
  "Object Relational Mapping",
  "Canva",
  "Figma",
  "Adobe Photoshop",

] as const;
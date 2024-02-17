"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import anggara from "/public/anggara.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {

  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
 
    // const {ref, inView} = useInView({
  //   threshold: 0.5,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Home")
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image src={anggara} alt="Anggara portrait" width="192" height="192" quality="95" priority={true} className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 text-xl font-light !leading-[1.5] sm:text-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
       <span className="font-semibold">Hello, I'm Anggara. </span> I'm a {" "}
       <span className="font-semibold">Front End Developer </span> with a {" "}
       <span className="font-semibold">Bachelor's degree in Informatics Engineering </span>
       and a proud alumni of {" "} 
       <span className="font-semibold">Purwadhika Digital Technology School Fullstack Web Development. </span>
       Proficient in {" "}
       <span className="font-semibold">ReactJS</span> and <span className="font-semibold">JavaScript</span>, currently exploring <span className="font-semibold">Next.js</span> and <span className="font-bold">TypeScript.</span>
       <br/>
       <br/>
       
       <span className="font-light"> Let's connect!</span>
      </motion.h1>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}>
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        > 
        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> </Link>
       
        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10" href="/CV.pdf" download>Download CV <HiDownload  className="opacity-70 group-hover:translate-y-1 transition" /> </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/anggaratriputra/" target="_blank">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60" href="https://github.com/anggaratriputra" target="_blank">
          <FaGithubSquare />
        </a>
     
        </motion.div>
    </section>
  );
}

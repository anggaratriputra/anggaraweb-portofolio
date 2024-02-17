"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay : 0.175}}
    id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 font-light">
        After graduating with a degree in{" "}
        <span className="font-medium">Informatics Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a Purwadhika Digital Technology School bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        My favorite part of programming is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, NodeJs, ExpressJs, and MySQL
        </span>
        . I am also exploring modern stack like TypeScript and NextJs. I am always looking to
        learn new technologies and work as a team. <br />
        I am currently seeking oppurtunities for <span className="font-bold">Frontend Developer. </span>
      </p>

    
    </motion.section>

  )
}

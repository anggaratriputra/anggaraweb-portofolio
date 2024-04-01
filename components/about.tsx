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
        passion for programming. I enrolled in a Purwadhika Digital Technology School Fullstack Web Development and awarded best student at my batch.
        I excelled in various aspects, including project completion ahead of schedule, consistently high performance in assessments, and receiving commendation for teamwork and leadership.
        
        <br/>
        My core stack
        is <span className="font-medium">
          React, NodeJs, ExpressJs, and MySQL.
        </span>
        <br/>
        I am currently seeking oppurtunities for <span className="font-bold">Frontend Developer or Fullstack Developer. </span>
      </p>

    
    </motion.section>

  )
}

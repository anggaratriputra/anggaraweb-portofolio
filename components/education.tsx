"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";

export default function Education() {
  const { ref, inView } = useSectionInView("Education", 0.8);
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 sm:mx-44 mb-28 sm:mb-40">
      <SectionHeading>My education</SectionHeading>
      <div className="timeline">
        {experiencesData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`timeline-content ${inView ? "visible" : ""}`}
              style={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                borderColor: theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="content">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2 ">
                    <LuGraduationCap className="hidden sm:block" />
                    <h3 className="font-semibold capitalize"> {item.title}</h3>
                  </div>
                  <span className="hidden sm:block">{item.date}</span>
                </div>
                <p className="font-normal hidden sm:block !mt-0">{item.location}</p>
                <p className="font-normal block sm:hidden !mt-0">{item.location}, {item.date}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 ">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

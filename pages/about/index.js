import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiKotlin,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Android Development",
        icons: [<FaJava key="java" />, <SiKotlin key="kotlin" />, <SiFlutter key="flutter" />],
      },
      {
        title: "Web Development",
        icons: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaJs key="js" />, <FaPython key="python" />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />],
      },
      {
        title: "Database Management",
        icons: [<SiMysql key="mysql" />, <SiFirebase key="firebase" />],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Master's of Computer Applications - Chandigarh University",
        stage: "2023 - 2025",
      },
      {
        title: "Bachelor's of Computer Applications - Panjab University",
        stage: "2020 - 2023",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-auto">
      <Circles />
      {/* Applying Framer Motion layout animation */}
      <motion.div 
       layout 
       layoutId="avatar-container" 
       initial={{ opacity: 0, y: 20 }} 
       animate={{ opacity: 1, y: 0 }} 
       exit={{ opacity: 0, y: 20 }} 
       transition={{
         duration: 0.7, 
         ease: [0.42, 0, 0.58, 1], 
       }} 
       className="absolute top-10 right-10"
      >
        <Avatar />
      </motion.div>
      
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-4 sm:px-0">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2">
            A <span className="text-accent">Passionate Journey</span> in Android Development
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-12 xl:px-0">
            I craft intuitive mobile apps using Java, Kotlin, and Flutter. With a background in web development and UI/UX design, and currently pursuing a Master&apos;s in Computer Applications, I&apos;m driven by a love for technology and innovation. My goal is to create impactful digital solutions that enhance user experiences.
          </motion.p>
        </div>

        {/* Skills/Education Info Section */}
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-auto"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative 
                  ${index === itemIndex ? 'text-accent after:w-full after:bg-accent' : 'after:w-8 after:bg-white'} 
                  after:h-[2px] after:absolute after:-bottom-1 after:left-0 
                  after:transition-all after:duration-300`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

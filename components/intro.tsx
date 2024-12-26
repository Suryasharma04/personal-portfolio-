"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/activeSectionContext';

export default function Intro() {
  
  const {ref} = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section ref={ref} 
    id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
            initial={{ opacity : 0, scale: 0}}
            animate={{ opacity : 1, scale: 1}}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
            >

            <Image
            // src="https://images.unsplash.com/photo-1580081541022-6b6e725c8f35?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="/DSC_0453.jpg"
            src="/SunAnimation.gif"
            alt="image"
            width="180" 
            height="180" 
            quality="95" 
            priority={true}
            // className='h-90 w-90'
            // className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />

            </motion.div>
            
            {/* <motion.span className="absolute bottom-0 right-0 text-4xl" initial={{ opacity : 0, scale: 0}}
            animate={{ opacity : 1, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
            }}
            > 👋🏻 </motion.span> */}

        </div>
      </div>
      
      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      >
      <span className="font-bold">Hi! I'm Surya, </span> an aspiring Computer Scientist.{" "} I have experience in
        <span className="font-bold"> Mobile and Web Development</span>{" "} and am building a strong interest in 
        <span className="font-bold"> AR/VR and Machine Learning.</span>
        <span className="italic"> I’m eager to learn more in these fields </span>{" "} and am currently looking for
        <span className="font-bold">{" "} opportunities to grow.</span>
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{
        delay: 0.1,
      }}
      >

        <Link href="#contact"
        className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        >
          Contact Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/></Link>

        <a className="group bg-white text-gray-600 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20"
        href="/CV.pdf" 
        download={true}>
            Download CV{" "}<HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>

        {/* <a className="bg-white text-gray-600 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20" href="https://www.linkedin.com/in/surya-sharma-a5885519b/" target="_blank">
            <FaLinkedinIn/>
        </a>

        <a className="bg-white text-gray-700 p-4 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20" href="https://github.com/Suryasharma04" target="_blank">
           
            <FaGithub/>
        </a>

        <a className="bg-white text-gray-700 p-4 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20" href="https://instagram.com/ray.sharm" target="_blank">
            
            <RiInstagramFill/>
        </a> */}

      </motion.div>

    </section>
  )
}

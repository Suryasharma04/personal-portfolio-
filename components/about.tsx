"use client";
import React from 'react';
import Sectionheading from './sectionheading';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About", 0.5);

  return (
    
    <motion.section 
    ref = {ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{delay: 0.5}}
    id="about"
    >

<div className="bg-[#ffeae2] absolute -z-10 h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#3b170a]"></div>
<div className="bg-[#e2dcff] absolute -z-10 h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#1e1646]"></div>


        {/* <div className="bg-[#ffeee8] absolute -z-10 h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3b170a]"></div> */}

        {/* <div className="bg-[#e6e1fd] absolute -z-10 right-[-2rem] h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#1e1646]"></div> */}

       <Sectionheading> About Me </Sectionheading>

        <p className="mb-3">I'm currently pursuing a Bachelor's in{" "}
        <span className="font-medium">Computer Science</span> in New York. I have skills fit for both <span className="font-medium">Full Stack Developer</span> and <span className="font-medium">Software Engineer roles.</span>{" "}
        My favorite part of programming is solving problems—

        <span className="font-medium">I love the thrill of finding solutions</span>.{" "}
        I'm always eager to learn
        new technologies and am now <span className="italic">seeking a full-time position</span> as a <span className="font-medium">Software Engineer.</span>
        </p>
        
        <p>
        <span className="italic">When I'm not lost in lines of code</span>, you'll find me immersed in melodies, strumming my ukulele, guitar, or creating harmonies on the piano. I'm an{" "}
        <span className="font-medium">avid explorer of knowledge</span>, with passions that range from capturing the beauty of the world through photography to unraveling the mysteries of the cosmos in astronomy.{" "}
        <span className="font-medium">History</span> of the world fascinates me, as does the <span className="font-medium">art of baking</span> delicious treats.  I also find peace in nature, whether it's through hikes, long walks, or simply soaking in the serenity of the great outdoors.
        </p>

    </motion.section>
   
  )
}




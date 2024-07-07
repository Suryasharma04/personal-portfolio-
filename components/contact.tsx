"use client";

import React from 'react';
import SectionHeading from './sectionheading';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import {sendEmail} from "@/actions/sendEmail";
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';
import { RiHeart3Line } from "react-icons/ri";
import { FaGithubSquare } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Contact() {
   const {ref} = useSectionInView("Contact", 0.5);

  return (
    <motion.section
    id="contact"
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}
    viewport={{
        once: true,
    }}
    >

<div className="bg-[#ddf5fe] absolute -z-10 h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#134556]"></div>

<div className="bg-[#fff6d4] absolute -z-10 h-[10rem] w-[10rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4a3f13]"></div>

     <SectionHeading>Let's Connect!</SectionHeading>

    <p className="text-gray-700 -mt-6 dark:text-white/80">Drop me a message or email me{" "}<a className="underline" href="mailto:ssharma@ithaca.edu">here.</a> 
    <br/>
    Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you! ♥︎
    </p> 
   
   {/* <form 
   className="mt-10 flex flex-col dark:text-black"
   action={async formData=> {
    const {data, error} =await sendEmail(formData);

    if(error){
        toast.error(error);
        return;
    }
    toast.success("Email sent successfully");
   }}>
    <input
    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
    name="senderEmail"
    type="email" 
    required
    maxLength={500}
    placeholder="your email"/>
        <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="your message"
        required
        maxLength={5000}/>
        <SubmitBtn />
   </form> */}

<div className="mt-10 flex justify-center space-x-4">
<a className="bg-white text-gray-600 p-4 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20" href="https://www.linkedin.com/in/surya-sharma-a5885519b/" target="_blank">
            <FaLinkedinIn/>
        </a>

        <a className="bg-white text-gray-600 p-4 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20" href="https://github.com/Suryasharma04" target="_blank">
          
        <FaGithub/>
        </a>

        <a className="bg-white text-gray-600 p-4 flex items-center text-[1.35rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/90 dark:hover:bg-white/20" href="https://instagram.com/ray.sharm" target="_blank">
           
            <RiInstagramFill/>
        </a>
        </div>
</motion.section>
  );
};

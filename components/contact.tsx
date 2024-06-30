"use client";

import React from 'react';
import SectionHeading from './sectionheading';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import {sendEmail} from "@/actions/sendEmail";
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';
import { RiHeart3Line } from "react-icons/ri";


export default function contact() {
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

<div className="bg-[#e4f8ff] absolute -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#134556]"></div>

<div className="bg-[#fff6d4] absolute -z-10 h-[31.25rem] w-[40rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4a3f13]"></div>

     <SectionHeading>Let's Connect!</SectionHeading>

    <p className="text-gray-700 -mt-6 dark:text-white/80">Drop me a message or email me{" "}<a className="underline" href="mailto:ssharma@ithaca.edu">here.</a> 
    <br/>
    Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you! ♥︎
    </p> 
   
   <form 
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
   </form>
</motion.section>
  );
};

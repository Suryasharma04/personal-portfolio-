"use client";

import React from 'react';
import Sectionheading from './sectionheading';
import {projectsData} from '@/lib/data';
// import { Project } from 'next/dist/build/swc';
import Project from "./project";
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <Sectionheading>My Projects</Sectionheading>
        <div>
            {
            projectsData.map((project, index) => (
                <React.Fragment key={index}> 
                 <Project {...project}/>
                </React.Fragment>
            ))
            }
        </div>
    </section>
  )
}

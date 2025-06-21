"use client";
import { HoverEffect } from '../ui/CardHoverEffect';
import { projectsData } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className='mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto' id='projects'>
      <h2
        className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400'
        data-aos='fade'
      >
        Proyek Saya
      </h2>
      <div data-aos='fade-up'>
        <HoverEffect items={projectsData} />
      </div>
    </section>
  );
}

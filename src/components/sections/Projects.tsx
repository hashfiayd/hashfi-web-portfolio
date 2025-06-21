"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { HoverEffect } from "../ui/CardHoverEffect"; // Impor komponen baru

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 max-w-screen-xl mx-auto px-6">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Proyek Saya</h2>
      <HoverEffect items={projectsData} />
    </section>
  );
}

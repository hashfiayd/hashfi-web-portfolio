"use client";
import { ReactNode } from "react";
import { FaJava, FaReact, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import { SiKotlin, SiAndroid, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMysql } from "react-icons/si";
import { TbBrandTypescript, TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";


export default function TechnologiesSection() {
    return (
        <section className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto" id="technologies">
            <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Teknologi yang Saya Kuasai
            </h2>
            <div className="mt-20 flex justify-center" data-aos="fade-up">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16">
                    {skills.map((skill) => (
                        <div className="flex flex-col items-center gap-2 group" key={skill.name}>
                            <div className="transform text-5xl lg:text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                                {skill.icon}
                            </div>
                            <span className="font-semibold text-sm md:text-base">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Data Skills dengan ikon dari react-icons
const skills: { name: string; icon: ReactNode }[] = [
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Android", icon: <SiAndroid /> },
    { name: "HTML5", icon: <TbBrandHtml5 /> },
    { name: "CSS3", icon: <TbBrandCss3 /> },
    { name: "JavaScript", icon: <TbBrandTypescript /> }, // Menggunakan ikon TS untuk JS modern
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
];

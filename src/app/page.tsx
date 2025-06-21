"use client";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

// Menggunakan path komponen dari `sections` seperti struktur yang baik
import HeroSection from "@/components/sections/HeroSection"; 
import Loading from "@/components/ui/Loading";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/Projects"; // Menggunakan Projects.tsx yang sudah ada
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Aos.init({
            offset: 100,
            once: true,
        });
    });

    return (
        <main>
            {isLoading ? (
                <Loading />
            ) : (
                <div id="home">
                    <Navbar />
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <TechnologiesSection />
                    <ContactSection />
                    <FooterSection />
                </div>
            )}
        </main>
    );
}

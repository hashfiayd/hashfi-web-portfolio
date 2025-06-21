"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { StarsBackground } from "../ui/StarsBackground";
import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";

export default function Hero() {
  const lenis = useLenis();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Latar belakang bintang menggantikan gradasi lama */}
        <StarsBackground />

        <div className="h-full flex flex-col justify-center items-center text-center max-w-screen-xl px-6 md:px-10 mx-auto">
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
            >
              <Image
                src="/profile-picture.png" // Ganti dengan path foto Anda
                alt="M Hashfi Fanny AYD"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="animate-hand-wave inline-block origin-[70%_70%]">👋</span>{" "}
              Hi, saya <span className="text-cyan-400">M Hashfi Fanny AYD</span>.
              <br />
              Seorang <span className="italic">Software Engineer</span>.
            </motion.h1>

            <motion.p 
              className="mt-6 text-lg text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Saya berfokus pada pengembangan aplikasi Android dan Web, menciptakan pengalaman digital yang modern dan bermanfaat.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="group bg-white text-slate-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-200 active:scale-105 transition font-semibold"
                onClick={() => lenis?.scrollTo('#contact')}
              >
                Hubungi saya <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
              <a
                className="group bg-slate-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-700 active:scale-105 transition cursor-pointer border border-white/20 font-semibold"
                href="/CV-Anda.pdf" // Ganti dengan path CV Anda
                download
              >
                Unduh CV <Download className="opacity-70 group-hover:translate-y-1 transition" />
              </a>
            </motion.div>
        </div>

        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => lenis?.scrollTo('#about', { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1.5 })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <ArrowDown className="h-6 w-6"/>
          </motion.div>
        </div>
    </section>
  );
}

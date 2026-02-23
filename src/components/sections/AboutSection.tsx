"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutSection() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const words = textRef.current?.querySelectorAll<HTMLSpanElement>(".word");

        if (words) {
            gsap.fromTo(
                words,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 1,
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        }
    }, []);

    return (
        <section className="max-w-screen-xl px-6 md:px-10 mx-auto mt-20" id="about">
            <h2 className="text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Tentang Saya
            </h2>

            <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20" data-aos="fade-up">
                <div className="lg:w-2/3 order-2 lg:order-1">
                    <div ref={textRef} className="md:text-lg font-medium text-foreground/80">
                        <p>
                            {"Tertarik dengan perkembangan teknologi informasi, saya memutuskan untuk mengejar passion saya di bidang pemrograman dengan menjadi mahasiswa teknik informatika di Universitas Riau. Saya mendalami pengembangan aplikasi Android dan web full-stack. Bagian favorit saya dari pemrograman adalah aspek pemecahan masalah. Saya suka perasaan ketika akhirnya menemukan solusi untuk sebuah masalah yang kompleks. Saya juga menyukai ketika bisa mencoba inovasi inovasi baru yang bisa saya terapkan.".split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-20">
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                        <p className="mt-4">
                            {"Di luar coding, saya suka bermain game, menonton film, dan bermain badminton. Saya juga senang mempelajari hal-hal baru. Saat ini, saya sedang mendalami flutter dan instrumentasi musik.".split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-20">
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/3 flex justify-center items-center order-1 lg:order-2 mx-auto">
                    <div className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-full">
                        <Image src="/profile-picture.png" height={1000} width={1000} className="rounded-xl shadow-lg" alt="Foto Profil M Hashfi Fanny AYD" />
                    </div>
                </div>
            </div>
        </section>
    );
};

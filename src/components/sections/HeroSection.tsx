"use client";
import { RiArrowDownSLine } from "react-icons/ri";
import { LinkPreview } from "../ui/LinkPreview";
import { ShootingStars } from "../ui/ShootingStars";
import { StarsBackground } from "../ui/StarsBackground";

export default function HeroSection() {
    /**
     * Fungsi untuk melakukan smooth scroll ke elemen target.
     * @param target - Selector ID dari elemen tujuan.
     */
    const handleScrollTo = (target: string) => {
        const element = document.querySelector(target);
        if (element) {
            const offset = 100; // Jarak dari atas
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="relative h-screen w-full">
            <ShootingStars />
            <StarsBackground />
            <div className="h-full flex flex-col justify-center max-w-screen-xl px-6 md:px-10 mx-auto">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
                     <h1 className="animate-dimmed">
                        <span className="opacity-30 animate-dimmed [animation-delay:1400ms]">
                            <span className="animate-hand-wave inline-block origin-[70%_70%] [animation-delay:2700ms]">👋</span> Hi, I&apos;m
                        </span>{" "}
                        <LinkPreview url="#about" imageSrc="/profile-picture.png" isStatic>
                            <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:500ms]">
                                M Hashfi Fanny AYD.
                            </span>
                        </LinkPreview>{" "}
                        <br className="hidden sm:block" />
                        <span className="opacity-30 animate-dimmed [animation-delay:1700ms]">A</span>{" "}
                        <LinkPreview url="#technologies" imageSrc="/project-1.png" isStatic>
                            <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:800ms]">
                                Software Engineer,
                            </span>
                        </LinkPreview>{" "}
                        <span className="opacity-30 animate-dimmed [animation-delay:2000ms]">who crafts</span> <br className="hidden sm:block" />
                        <LinkPreview url="#projects" imageSrc="/images/syclestore.png" isStatic>
                            <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:1100ms]">
                                digital experiences.
                            </span>
                        </LinkPreview>
                    </h1>
                </div>
                <p className="hidden md:block lg:mt-4 font-semibold text-lg underline underline-offset-8 decoration-cyan-400 decoration-2 opacity-0 animate-fade-down [animation-delay:2500ms]">
                    Android & Full-Stack Developer
                </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden">
                <button 
                    onClick={() => handleScrollTo("#about")} 
                    className="z-20 flex flex-col items-center cursor-pointer" 
                    data-aos="fade-up" 
                    data-aos-easing="ease-in" 
                    data-aos-delay="2800" 
                    data-aos-offset="0"
                >
                    <span className="animate-bounce text-3xl">
                        <RiArrowDownSLine />
                    </span>
                    <span className="font-medium">Scroll down</span>
                </button>
            </div>
        </section>
    );
}

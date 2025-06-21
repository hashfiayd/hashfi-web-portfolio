"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    isStatic: true;
    imageSrc: string;
};

export const LinkPreview = ({ children, url, className, width = 200, height = 125, quality = 50, imageSrc }: LinkPreviewProps) => {
    const [isOpen, setOpen] = React.useState(false);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event: any) => {
        const targetRect = event.target.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        x.set((eventOffsetX - targetRect.width / 2) / 2);
    };

    /**
     * Menangani klik pada link. Jika URL adalah hash (#),
     * ia akan melakukan smooth scroll ke elemen tersebut.
     */
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (url.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(url);
            if (element) {
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <HoverCardPrimitive.Root openDelay={50} closeDelay={100} onOpenChange={setOpen}>
            <HoverCardPrimitive.Trigger asChild>
                <a onMouseMove={handleMouseMove} className={cn("text-foreground", className)} href={url} onClick={handleClick}>
                    {children}
                </a>
            </HoverCardPrimitive.Trigger>

            <HoverCardPrimitive.Content className="[transform-origin:var(--radix-hover-card-content-transform-origin)]" side="top" align="center" sideOffset={10}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            className="shadow-xl rounded-xl"
                            style={{ x: translateX }}
                        >
                            <div className="block p-1 bg-white border-2 border-transparent shadow rounded-xl">
                                <Image src={imageSrc} width={width} height={height} quality={quality} className="rounded-lg" alt="preview image" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Root>
    );
};

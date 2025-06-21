"use client";
import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollingProps {
    children: React.ReactNode;
}

/**
 * Komponen ini mengintegrasikan Lenis untuk memberikan efek smooth scrolling
 * ke seluruh aplikasi. Ia menginisialisasi Lenis pada saat komponen dimuat
 * dan membersihkannya (destroy) saat komponen dibongkar untuk mencegah memory leak.
 */
function SmoothScrolling({ children }: SmoothScrollingProps) {
    useEffect(() => {
        // Inisialisasi Lenis dengan konfigurasi yang diinginkan
        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.5,
            smoothTouch: true,
        });

        // Fungsi yang akan dipanggil pada setiap frame animasi
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        // Mulai animation frame loop
        requestAnimationFrame(raf);

        // Fungsi cleanup untuk dijalankan saat komponen unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    // Komponen ini hanya sebagai wrapper, tidak merender DOM elemen sendiri
    return <>{children}</>;
}

export default SmoothScrolling;

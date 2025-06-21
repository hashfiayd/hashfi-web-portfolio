"use client";
import { useState } from 'react';
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Tentang", hash: "#about" },
    { name: "Proyek", hash: "#projects" },
    { name: "Teknologi", hash: "#technologies" },
    { name: "Kontak", hash: "#contact" },
  ];

  /**
   * Menggunakan Web API standar untuk smooth scrolling.
   * Ini akan berfungsi dengan baik karena Lenis sudah meng-override
   * behavior scrolling default browser.
   * @param target - Selector ID dari elemen tujuan (e.g., "#about")
   */
  const handleScrollTo = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
        // Jarak offset dari atas untuk memperhitungkan tinggi navbar
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
    // Tutup menu mobile setelah link diklik
    setIsMenuOpen(false);
  };

  return (
    <header
      className='flex justify-between items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full bg-slate-950/50 backdrop-blur-md z-50'
      data-aos='fade-down'
      data-aos-delay='2800'
    >
      <div className='cursor-pointer' onClick={() => handleScrollTo('#home')}>
        <span className='text-xl md:text-2xl font-semibold tracking-wide'>
          Hashfi.dev
        </span>
      </div>

      <nav className='hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide'>
        {navLinks.map((link) => (
          <button key={link.name} className='hover:text-cyan-400 transition-all duration-200 ease-in-out' onClick={() => handleScrollTo(link.hash)}>
            {link.name}
          </button>
        ))}
      </nav>

      {/* Tombol menu hamburger untuk mobile */}
      <button className='flex flex-col gap-[6px] md:hidden cursor-pointer z-50' onClick={toggleMenu} aria-label="Toggle Menu">
        <span className={cn('block h-[2px] w-6 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 origin-center translate-y-[8px]' : '')}></span>
        <span className={cn('block h-[2px] bg-white transition-all duration-200', isMenuOpen ? 'w-0' : 'w-6')}></span>
        <span className={cn('block h-[2px] w-6 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 origin-center -translate-y-[8px]' : '')}></span>
      </button>

      {/* Menu navigasi mobile */}
      <div
        className={cn('flex md:hidden flex-col gap-4 text-center absolute top-0 right-0 h-screen w-3/4 bg-slate-900 pt-28 pl-10 pr-4 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => (
            <button key={link.name} className='text-2xl font-semibold tracking-wide text-white/80 hover:text-cyan-400 py-2' onClick={() => handleScrollTo(link.hash)}>
                {link.name}
            </button>
        ))}
      </div>
    </header>
  );
}

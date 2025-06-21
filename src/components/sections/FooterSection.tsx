import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function FooterSection() {
    return (
        <footer className="mt-20 md:mt-40 mb-10 text-center text-sm text-gray-500" data-aos="fade-up" data-aos-offset="0">
             <div className="flex items-center justify-center gap-6 text-xl lg:text-2xl mb-4">
                <a href="https://www.linkedin.com/in/hashfiayd/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-150 ease-in-out">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/hashfiayd" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-150 ease-in-out">
                    <FaGithub />
                </a>
                <a href="mailto:daulayhasfi@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-150 ease-in-out">
                    <IoMdMail />
                </a>
            </div>
            <small className="mb-2 block text-xs">
                &copy; {new Date().getFullYear()} M Hashfi Fanny AYD. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">Tentang website ini:</span> dibangun dengan
                Next.js, TypeScript, Tailwind CSS, Framer Motion, dan di-hosting di Vercel.
            </p>
        </footer>
    );
}

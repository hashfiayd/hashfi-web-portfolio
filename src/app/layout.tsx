import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/ui/Loading"; // Asumsi path ini benar
import SmoothScrolling from "@/components/ui/SmoothScrolling"; // Asumsi path ini benar

const wixMadeForDisplay = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
    // Anda bisa mengganti ini dengan nama Anda
    title: "M Hashfi Fanny | Full-Stack Developer",
    description: "Portofolio Web M Hashfi Fanny",
    icons: {
        // Pastikan Anda memiliki logo di public/images/logo.png
        icon: "/images/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="dark">
            <body className={wixMadeForDisplay.className}>
                <Suspense fallback={<Loading />}>
                    <SmoothScrolling>{children}</SmoothScrolling>
                </Suspense>
            </body>
        </html>
    );
}

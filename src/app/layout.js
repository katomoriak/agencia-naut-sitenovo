import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1.0,
};

export const metadata = {
  title: "Naut | Agência de Marketing Digital & Performance",
  description: "Aceleramos negócios digitais através de tráfego pago, SEO estratégico, UX/UI design premium e desenvolvimento de sites de alta conversão. Conheça a Naut.",
  keywords: "agência de marketing digital, tráfego pago, SEO, criação de sites, landing pages, agência naut, marketing de performance, nairuz, wuzi",
  robots: "index, follow",
};

import Lightfall from '@/components/Lightfall';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="global-bg-container">
          <Lightfall
            colors={["#FF8F68", "#FF3D00", "#FF5E3A", "#E02E00"]}
            backgroundColor="#050505"
            speed={0.3}
            streakCount={3}
            streakWidth={1.2}
            streakLength={1.2}
            density={0.5}
            twinkle={0.8}
            glow={0.8}
            backgroundGlow={0.3}
            zoom={2.5}
            opacity={0.65}
            mouseInteraction={true}
            mouseStrength={0.4}
            mouseRadius={1.2}
          />
        </div>
        <div className="global-content">
          {children}
        </div>
      </body>
    </html>
  );
}

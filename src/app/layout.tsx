import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fajarekos — Frontend Engineer & Product Manager",
  description: "Portfolio of Fajarekos, Frontend Engineer and Product Manager based in Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className={`${inter.className} min-h-screen w-full bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
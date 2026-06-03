import type { Metadata } from "next";
import { Inter, Geist, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway"
})

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
    <html lang="en" className={raleway.variable}>
      <body className="max-w-7xl mx-auto border-2 border-dashed border-gray-300 rounded-lg p-6 md:p-12 lg:p-16">
        {children}
      </body>
    </html>
  );
}
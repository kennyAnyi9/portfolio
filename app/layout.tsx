import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import GridPattern from "@/components/ken-ui/pattern";
import { cn } from "@/lib/utils";
import Hero from "@/components/nav/hero";
import Footer from "@/components/nav/footer";
import Terminal from "@/components/terminal/Terminal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kennedy Anyidoho",
  description: "Personal Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-primary max-w-xl px-5 lg:px-0 space-y-5 mt-[3rem] mx-auto`}
      >
        {" "}
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}

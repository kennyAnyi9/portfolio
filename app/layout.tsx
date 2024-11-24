import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

import "./globals.css";
import GridPattern from "@/components/ken-ui/pattern";
import { cn } from "@/lib/utils";
import Hero from "@/components/nav/hero";

import { Footer } from "@/components/nav/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/terminal/navigation";
import { AppThemeSwitcher } from "@/components/switch-mode";



const mono = localFont({
    src: "./fonts/Ken-mono-bold.otf",
    variable: "--font-commitmono-bold",
    weight: "100 900",
  });
  const monoLight = localFont({
    src: "./fonts/Ken-mono-light.otf",
    variable: "--font-commitmono-bold",
    weight: "100 900",
  });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

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
        className={`${inter.className} ${monoLight.variable} px-5 lg:px-0 space-y-5 mt-[3rem] max-w-2xl mx-auto`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            //forcedTheme="light"
            disableTransitionOnChange
          >
            
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-10 -z-20"
          )}
        />
        <Hero />
        <AppThemeSwitcher/>
        <Navigation />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Badge } from "@/components/ken-ui/soon";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto px-4 py-8">
      <Link href={"/"} className="mb-8">
        <span className="flex gap-2 text-xs underline underline-offset-2">
          back
        </span>
      </Link>
      
      <div>
        <h1 className="font-semibold text-xl tracking-tight mb-4">Projects</h1>
        <div className="flex flex-col gap-5">
          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://dup.it.com"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Dup
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2B593F] text-[#2D9964] hover:bg-[#2B593F] rounded-md my-auto"
              >
                active
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
              Modern code/text paste sharing platform built with Next.js, TypeScript, Drizzle ORM, and PostgreSQL. Features authentication, privacy controls, responsive dashboard, and comprehensive paste management with bulk operations.
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://typeicon.kennyanyi.xyz/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Typeicon
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2B593F] text-[#2D9964] hover:bg-[#2B593F] rounded-md my-auto"
              >
                active
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
              Interactive icon generator web app for browsing, customizing, and exporting SVG icons. Built with React, Next.js, and TypeScript with code generation features for seamless TypeScript integration.
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://ishortn.ink/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                iShortn
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2B593F] text-[#2D9964] hover:bg-[#2B593F] rounded-md my-auto"
              >
                open source
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
              Contributing to open-source URL shortener with analytics and QR-code generation. Built with Next.js, TypeScript, Drizzle ORM, MySQL, and Redis. Over 300 active users with collaborative frontend development.
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://cheatpedia.xyz/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Cheatpedia
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#5C3B23] text-[#D87620] hover:bg-[#5C3B23] rounded-md my-auto"
              >
                beta
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground dark:text-gray-400">
              Cheatpedia keeps programmers on top of their game by providing
              them with cheatsheets in a user-friendly and organized format.
              Cheatpedia is currently in beta testing.
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://notfound.kennyanyi.xyz/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Notfound
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#5C3B23] text-[#D87620] hover:bg-[#5C3B23] rounded-md my-auto"
              >
                beta
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              A collection of 404 pages for your React/Next.js apps
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://scrapely.vercel.app/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Scrapely
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2A3D50] text-[#2381DE] hover:bg-[#2A3D50] rounded-md my-auto"
              >
                in progress
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              High level scraping tool for scraping prices from ecommerce
              websites
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://www.wislawedufund.org/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Wislaw
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2B593F] text-[#2D9964] hover:bg-[#2B593F] rounded-md my-auto"
              >
                production
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Built an organisational website for WISLAW Education and Support
              Fund.
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full project-card"
            href="https://www.imhogen.com/"
          >
            <div className="flex gap-1 flex-row">
              <p className="text-base leading-7 group link-underline">
                Imhogen
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#5C3B23] text-[#D87620] hover:bg-[#5C3B23] rounded-md my-auto"
              >
                production
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Built the IMHO Engineering design company website
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

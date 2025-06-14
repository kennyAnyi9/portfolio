import BlurFade from "@/components/ken-ui/blur-fade";
import { TextGenerateEffect } from "@/components/ken-ui/generate";
import { Badge } from "@/components/ken-ui/soon";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 mx-auto mt-[3rem]">
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="flex flex-col w-full">
        {/* <div className="flex flex-wrap gap-2">
          {toolkit.map((tool, index) => (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Badge
                key={index}
                variant="secondary"
                className={`rounded-sm bg-white hover:bg-white text-black`}
              >
                {tool.tool}
              </Badge>
            </BlurFade>
          ))}
        </div> */}

          <h1 className="font-semibold text-xl tracking-tight">About</h1>
          <TextGenerateEffect
            words={
              "Computer Science and Engineering student at University of Mines and Technology, graduating 2025. Passionate about crafting polished web experiences and building scalable applications. Currently contributing as a Software Developer at Wislaw and have experience as a Software Engineer Intern at IMHO Ltd. I specialize in full-stack development with modern technologies and enjoy experimenting with innovative UI details and performance optimizations."
            }
          />


          <h1 className="font-semibold mt-[3rem] text-xl tracking-tight">Contact 📬</h1>
          <div className="flex flex-col mt-[0.75rem] gap-2">
            <Link
              href="mailto:kennyanyi9@gmail.com"
              className="text-sm text-muted-foreground dark:text-gray-400 hover:underline"
            >
              kennyanyi9@gmail.com
            </Link>
            <Link
              href="https://github.com/kennyAnyi9"
              target="_blank"
              className="text-sm text-muted-foreground dark:text-gray-400 hover:underline"
            >
              github.com/kennyAnyi9
            </Link>
          </div>
      </div>
      
      {/* education */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-semibold text-xl tracking-tight">Education 🎓</h1>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-5">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className="inline-flex gap-1 text-base leading-7 group">
                University of Mines and Technology
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400">2021 - 2025</p>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Computer Science and Engineering • Tarkwa, Ghana
            </p>
          </div>
        </div>
      </div>
      
      {/* experience */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-semibold text-xl tracking-tight">Experience 🧠</h1>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-5">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
                Software Developer - Volunteer | Wislaw
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400">Jan 2025 - Present</p>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Led end-to-end development of organization's website using Next.js. Focused on performance, accessibility, and responsive design. Integrated dynamic components and managed routing, server-side rendering, and SEO optimizations.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
                Software Engineer Intern | IMHO Ltd
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400">Oct 2024 - Dec 2024</p>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Developed scalable web applications using Next.js, TypeScript, and SSR. Built responsive UIs with ShadCN UI and TailwindCSS. Integrated Notion API for dynamic content management and implemented robust form handling with React Hook Form and Zod validation.
            </p>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-semibold text-xl tracking-tight">Projects 🚀</h1>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-5">
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
    </BlurFade>
    </main>
  );
}


const toolkit = [
  // Languages
  {
    tool: "TypeScript",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "Python",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "JavaScript",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "SQL",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "HTML",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "CSS",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  // Frameworks & Libraries
  {
    tool: "React",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Next.js",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Node.js",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Express.js",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "React Hook Form",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Better Auth",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Zod",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Framer Motion",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Shadcn UI",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "TailwindCSS",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "pandas",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "NumPy",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "BeautifulSoup",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Flask",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "FastAPI",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  // Databases & ORMs
  {
    tool: "PostgreSQL",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "MySQL",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "MongoDB",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "Drizzle ORM",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "Prisma",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "Redis",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  // Tools
  {
    tool: "Git",
    bgColor: "#262626",
    textColor: "#FFFFFF",
  },
  {
    tool: "VS Code",
    bgColor: "#262626",
    textColor: "#FFFFFF",
  },
  {
    tool: "Claude Code",
    bgColor: "#262626",
    textColor: "#FFFFFF",
  },
  {
    tool: "Cursor",
    bgColor: "#262626",
    textColor: "#FFFFFF",
  },
];

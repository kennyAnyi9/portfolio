import BlurFade from "@/components/ken-ui/blur-fade";
import { TextGenerateEffect } from "@/components/ken-ui/generate";
import { Badge } from "@/components/ken-ui/soon";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const BLUR_FADE_DELAY = 0.04;
const toolkit = [
  // Languages
  {
    tool: "Typescript",
    bgColor: "#262626",
    textColor: "#D87620",
  },
  {
    tool: "Python",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "Javascript",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  {
    tool: "SQL",
    bgColor: "#5C3B23",
    textColor: "#D87620",
  },
  // Tools
  {
    tool: "Git",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "VSCode",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "Postgres",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "Mongodb",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  {
    tool: "Docker",
    bgColor: "#2A3D50",
    textColor: "#2381DE",
  },
  // Libraries/Frameworks
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
    tool: "TailwindCSS",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "BeautifulSoup",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Pandas",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Numpy",
    bgColor: "#2B593F",
    textColor: "#2D9964",
  },
  {
    tool: "Shadcn ui",
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
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 mx-auto">
      <div className="flex flex-col mt-[3rem] w-full">
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
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-normal mt-[3rem] text-xl">About</h1>
          <TextGenerateEffect
            words={
              "Crafting interfaces. Building polished software and web experiences. Experimenting with magical details in user interfaces. From typography and animation to writing compelling content and ensuring smooth performance, the web offers a limitless playground for creativity. I'm just getting started, and I'm excited to explore everything it has to offer."
            }
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-normal mt-[3rem] text-xl">Cooking ☕</h1>
        </BlurFade>
        <div className="flex flex-col mt-[0.75rem] justify-center items-start w-full  gap-5">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Link
              target="_blank"
              className="flex flex-col w-full"
              href="https://cheatpedia.xyz/"
            >
              <div className="flex gap-1 flex-row ">
                <p className="text-base hover:underline leading-7 group">
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

              <p className="text-sm text-gray-400">
                Cheatpedia keeps programmers on top of their game by providing
                them with cheatsheets in a user-friendly and organized format.
                Cheatpedia is currently in beta testing.
              </p>
            </Link>
          </BlurFade>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://hamburgersui.vercel.app/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
                Hamburgerui
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2A3D50] text-[#2381DE] hover:bg-[#2A3D50] rounded-md my-auto"
              >
                in progress
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-gray-400">
              Save valuable development time by utilizing our pre-built mobile
              menus. Focus on what matters most - building a great app!
            </p>
          </Link>

          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://ishortn.ink/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
                Ishortn
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1 bg-[#2B593F] text-[#2D9964] hover:bg-[#2B593F] rounded-md my-auto"
              >
                open source
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>
            <p className="text-sm text-gray-400">
              Active contributor to Ishortn. A dynamic links and url shortener
              and QR code generator. Built as a result of firebase shutting down
              their dynamic links service and other alternatives being too
              expensive. Now have 30+ users and over 200 daily uses.
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://notfound.kennyanyi.me/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
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

            <p className="text-sm text-gray-400">
              A collection of 404 pages for your React/Next.js apps
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://typeicon.kennyanyi.me/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
                Type Icon
              </p>
              <Badge
                variant={"default"}
                className="w-fit h-fit px-1  bg-[#2B593F] text-[#2D9964] hover:bg-[#2B593F] rounded-md my-auto"
              >
                in progress
              </Badge>
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </div>

            <p className="text-sm text-gray-400">
              Select icons, get instant SVG TypeScript code.
            </p>
          </Link>
        </div>
      </div>
      {/* experience */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-normal text-xl">Experience 🧠</h1>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-5">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
                WISLAW Education and Support Fund
              </p>
              <p className="text-xs text-gray-400">Mar 2022 - Current</p>
            </div>
            <p className="text-sm text-gray-400">
              WISLAW is a development and social enterprise-oriented
              organisation based in Nsuta-Tarkwa, in the Western region of
              Ghana.
            </p>
          </div>
        </div>
      </div>
      {/* freelance */}

      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-normal  text-xl">Freelance 💻</h1>
        <div className="flex flex-col mt-[0.75rem] justify-center items-start w-full  gap-5">
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://scrapely.vercel.app/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
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

            <p className="text-sm text-gray-400">
              High level scraping tool for scraping prices from ecommerce
              websites
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.wislawedufund.org/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
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
            <p className="text-sm text-gray-400">
              Built an organisational website for WISLAW Education and Support
              Fund.
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.imhogen.com/"
          >
            <div className="flex gap-1 flex-row ">
              <p className="text-base hover:underline leading-7 group">
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
            <p className="text-sm text-gray-400">
              Built the IMHO Engineering design company website
            </p>
          </Link>
        </div>
      </div>

      {/* contact */}
      {/* <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm
              <a
                className="text-blue-500 hover:underline"
                href="https://x.com/dillionverma"
              >
                with a direct question on twitter
              </a>{" "}
              and I'll respond whenever I can. I will ignore all soliciting.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}

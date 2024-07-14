import { TextGenerateEffect } from "@/components/ken-ui/generate";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 mx-auto">
      {/* cooking */}
      <div className="flex flex-col mt-[3rem] w-full">
        <TextGenerateEffect
          words={
            "Crafting interfaces. Building polished software and web experiences. Experimenting with magical details in user interfaces. From typography and animation to writing compelling content and ensuring smooth performance, the web offers a limitless playground for creativity. I'm just getting started, and I'm excited to explore everything it has to offer."
          }
        />
        <h1 className="font-normal mt-[3rem] text-xl">Cooking ☕</h1>
        <div className="flex flex-col mt-[0.75rem] justify-center items-start w-full  gap-2">
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://cheatpedia.xyz/"
          >
            <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
              cheatpedia.xyz(beta){" "}
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </p>{" "}
            <p className="text-sm text-gray-400">
              Cheatpedia keeps programmers on top of their game by providing
              them with cheatsheets in a user-friendly and organized format.
              Cheatpedia is currently in beta testing.
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://hamburgersui.vercel.app/"
          >
            <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
              hamburgerui(soon){" "}
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </p>
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
            <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
              ishortn.ink{" "}
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </p>
            <p className="text-sm text-gray-400">
              Active contributor to Ishortn. A dynamic links and url shortener
              and QR code generator. Built as a result of firebase shutting down
              their dynamic links service and other alternatives being too
              expensive. Now have 30+ users and over 200 daily uses.
            </p>
          </Link>
        </div>
      </div>
      {/* experience */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-normal text-xl">Experience 🧠</h1>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
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
        <div className="flex flex-col mt-[0.75rem] justify-center items-start w-full  gap-2">
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.wislawedufund.org/"
          >
            <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
              wislawedufund.org{" "}
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </p>
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
            <p className="inline-flex gap-1 text-base hover:underline leading-7 group">
              imhogen.com{" "}
              <ArrowUpRight className="size-5 mb-1.5 opacity-50 my-auto" />
            </p>
            <p className="text-sm text-gray-400">
              Built the IHMO Engineering design company website
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

import Terminal from "@/components/terminal/Terminal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 mx-auto">
      <Terminal />
      {/* cooking */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-normal">cooking 👨‍🍳</h1>
        <div className="flex flex-col justify-center items-start w-full  gap-2">
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://starter.rasmic.xyz/"
          >
            <p className=" text-sm hover:underline leading-7">
              nextjs developer portfolio starter kit
            </p>
            <p className="text-sm text-gray-400">
              build your portfolio with the best technologies for speed and
              scale.
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.styleui.dev/"
          >
            <p className=" text-sm hover:underline leading-7">
              hamburgerui (coming soon)
            </p>
            <p className="text-sm text-gray-400">
              setup landing pages &amp; dashboards in just a few seconds.
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.styleui.dev/"
          >
            <p className=" text-sm hover:underline leading-7">
              nextjs + geist design system starterkit (coming soon)
            </p>
            <p className="text-sm text-gray-400">
              setup nextjs projects with geist design system in just a few
              seconds.
            </p>
          </Link>
        </div>
      </div>
      {/* experience */}
      <div className="flex flex-col mt-[3rem] w-full">
        <h1 className="font-normal">my experience 🧠</h1>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className=" text-sm hover:underline leading-7">
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
        <h1 className="font-normal">freelance work 🧱</h1>
        <div className="flex flex-col justify-center items-start w-full  gap-2">
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.wislawedufund.org/"
          >
            <p className=" text-sm hover:underline leading-7">
              wislawedufund.org
            </p>
            <p className="text-sm text-gray-400">
              Built an organisation website for WISLAW Education and Support
              Fund.
            </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-col w-full"
            href="https://www.imhogen.com/"
          >
            <p className=" text-sm hover:underline leading-7">imhogen.com</p>
            <p className="text-sm text-gray-400">
              Built a the IHMO Engineering design company website
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

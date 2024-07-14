import Link from "next/link";
import React from "react";
import { BorderBeam } from "../ken-ui/moving-beam";

const Hero = () => {
  return (
    <div className="flex max-w-xl mx-auto relative flex-row border rounded-md border-[#181818] h-fit items-center justify-center mt-5 p-2 backdrop-blur-[2px]">
      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="font-normal leading-7 text-xl">Kennedy Anyidoho</h1>
        <p className="text-xs font-light text-gray-300">
          Software Engineer & Neuroscience enthusiast
        </p>
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-xs font-normal text-gray-400">
            Reach me at{" "}
            <Link
              href="https://x.com/kennyAnyi9"
              className="underline underline-offset-1"
            >
              @kennyAnyi9
            </Link>{" "}
            or{" "}
            <a
              href="mailto:kennyanyi9@gmail.com"
              className="underline underline-offset-1"
            >
              kennyanyi9@gmail.com
            </a>
          </p>
        </div>
      </div>
      <button className="border text-xs font-light bg-[#0A0A0A] rounded-md border-[#181818] px-2 py-2 inline-flex  gap-2">
        Resume
        <svg
          data-testid="geist-icon"
          height="16"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      {/* /I will fix this later */}
      {/* <BorderBeam size={250} duration={12} delay={9} /> */}
    </div>
  );
};

export default Hero;

/* eslint-disable react/no-unescaped-entities */
"use client";
import { BLUR_FADE_DELAY } from "@/app/(root)/page";
import React from "react";
import BlurFade from "../ken-ui/blur-fade";
import Header from "./terminal-header";
import useCommandHandler from "./use-command";

export default function Terminal() {
  const { command, output, handleCommandChange, handleCommandSubmit } =
    useCommandHandler();

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div
        className="w-full relative z-20 h-44 mx-auto overflow-auto bg-[#191919] backdrop-blur-[4px] 
                    rounded-md border border-[#323232] no-scrollbar"
      >
        {" "}
        <Header helpText="'$help' for assistance" title="" />
        <div className="mt-4">
          {/* Output area */}
          {output.map((item, index) => (
            <div className="pl-3" key={index}>
              <div className="flex items-center gap-1 ">
                <p className="text-green-400 text-xs font-mono">{"$"}</p>
                <p key={index} className="text-green-500 text-xs font-mono">
                  {item.command}
                </p>
              </div>
              {item.result?.map(
                (
                  res:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => (
                  <p key={index} className="text-xs whitespace-pre font-mono">
                    {res}
                  </p>
                )
              )}
            </div>
          ))}
          {/* Input area */}
          <form onSubmit={handleCommandSubmit} className="flex gap-2 ">
            <p className=" text-xs text-green-400 pl-3 font-mono ">{"$"}</p>
            <input
              type="text"
              className="w-full text-xs  bg-transparent border-none focus:outline-none caret-green-400 font-mono"
              value={command}
              autoFocus
              placeholder="click to start typing"
              onChange={handleCommandChange}
            />
          </form>
        </div>
      </div>
    </BlurFade>
  );
}

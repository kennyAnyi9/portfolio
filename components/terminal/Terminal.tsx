/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import useCommandHandler from "./use-command";
import Header from "./terminal-header";

export default function Terminal() {
  const { command, output, handleCommandChange, handleCommandSubmit } =
    useCommandHandler();

  const help = ["github", "toolkit", "blog", "projects", "contact"];

  return (
    <div className="w-full relative z-20 h-44 mx-auto overflow-auto border backdrop-blur-[2px] rounded border-[#181818] no-scrollbar">
      {" "}
      <Header title="Terminal" helpText="'$help' for assistance" />
      <div className="inline-flex gap-1 text-white items-center text-xs p-3 opacity-50">
        {" "}
        type{" "}
        {help.map((item, index) => (
          <span
            key={index}
            className="rounded-md bg-gray-800  px-1 border border-gray-600"
          >
            {" "}
            {item}{" "}
          </span>
        ))}{" "}
      </div>
      <div className="mt-4">
        {/* Output area */}
        {output.map((item, index) => (
          <div className="pl-3" key={index}>
            <div className="flex items-center gap-1 ">
              <p className="text-green-500 text-xs">{"$"}</p>
              <p key={index} className="text-green-500 text-xs">
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
                <p key={index} className="text-xs whitespace-pre">
                  {res}
                </p>
              )
            )}
          </div>
        ))}
        {/* Input area */}
        <form onSubmit={handleCommandSubmit} className="flex gap-2 ">
          <p className=" text-sm text-gray-600 dark:text-gray-400 pl-3 ">
            {"$"}
          </p>
          <input
            type="text"
            className="w-full text-opacity-25 text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none focus:outline-none caret-green-400 font-mono"
            value={command}
            autoFocus
            placeholder="start typing here"
            onChange={handleCommandChange}
          />
        </form>
      </div>
    </div>
  );
}

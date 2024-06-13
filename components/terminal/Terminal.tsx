/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import useCommandHandler from "./use-command";
import Header from "./terminal-header";

export default function Terminal() {
  const { command, output, handleCommandChange, handleCommandSubmit } =
    useCommandHandler();

  return (
    <div className="w-full relative z-20 h-44 mx-auto overflow-auto border backdrop-blur-[4px] rounded-md border-[#181818] no-scrollbar">
      {" "}
      <Header title="Terminal" helpText="'$help' for assistance" />
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

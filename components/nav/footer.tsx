"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { AppThemeSwitcher } from "../switch-mode";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {

  return (
    <footer className={cn(className)}>
      <div className="w-full border-t  flex items-center h-10 py-5 mt-10 lg:mt-20">
        <div className="max-w-2xl m-auto flex justify-between w-full">
          <p className="text-sm text-gray-600">
            Pray at the alter of hardwork 🙇🏿‍♂️
          </p>
          <AppThemeSwitcher/>
        </div>
      </div>
    </footer>
  );
}

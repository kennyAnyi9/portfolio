"use client";

import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/animated-group";

export const AppThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string | null) => {
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  const TABS = [
    {
      label: "system",
      icon: <Monitor className="h-3.5 w-3.5" />,
    },
    {
      label: "dark",
      icon: <Moon className="h-3.5 w-3.5" />
    },
    {
      label: "light",
      icon: <Sun className="h-3.5 w-3.5" />
    },
  ];

  return (
    <div className="flex w-fit items-center border border-border p-0.5 rounded-[6px]">
      <div className="flex gap-0">
        <AnimatedBackground
          defaultValue={theme || "system"}
          className="rounded-md bg-muted dark:bg-zinc-700 opacity-50 transition-colors hover:bg-zinc-600"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          onValueChange={handleThemeChange}
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              data-id={tab.label}
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center text-white text-muted-foreground transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-foreground"
            >
              {tab.icon}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
};

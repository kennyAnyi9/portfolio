import Terminal from "@/components/terminal/Terminal";
import { ReactNode } from "react";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-xl mx-auto">{children}</div>
    </>
  );
}

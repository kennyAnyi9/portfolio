import { ReactNode } from "react";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-2xl mx-auto">


        {children}
      </div>
    </>
  );
}

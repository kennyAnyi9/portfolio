import { ReactNode } from "react";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-xl">{children}</div>
    </>
  );
}

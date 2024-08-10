import { ReactNode } from "react";

export default function WordCloudLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="max-w-xl mx-auto">{children}</div>
    </>
  );
}

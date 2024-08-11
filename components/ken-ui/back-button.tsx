"use client";

import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <span
      className={`flex items-center ${className}`}
      onClick={() => router.back()}
    >
      <span className="mb-5 text-white underline underline-offset-4 hover:cursor-pointer">
        back
      </span>
    </span>
  );
};

export default BackButton;

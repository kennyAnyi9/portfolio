import { Badge } from "@/components/ken-ui/soon";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Link href={"/"} className="">
        <span className="flex gap-2 text-xs underline underline-offset-2">
          home
        </span>
      </Link>
      <div className="mx-auto flex gap-2 flex-col justify-start items-center mt-[5rem]">
        <Badge variant="outline" className="border-[#181818] text-white">
          Soon
        </Badge>
        <h1 className="text-center text-5xl font-bold">
          Bloggin' for Brainiacs
        </h1>
        <p className="text-center">
          Exploring software development and the latest breakthroughs in
          neuroscience
        </p>
      </div>
    </div>
  );
};

export default Blog;

import { Badge } from "@/components/ken-ui/soon";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Link href={"/"} className="">
        <span className="flex gap-2 text-xs underline underline-offset-2">
          back
        </span>
      </Link>
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div>
          <div className="space-y-3">
            {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Projects
            </div> */}

            <Badge variant="outline" className="border-[#181818] text-white">
              Soon
            </Badge>
            <h1 className="text-center text-5xl font-bold">
              Explore my portfolio for a comprehensive look
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm adaptable and have experience working on projects with varying
              levels of complexity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

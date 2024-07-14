import React from "react";

interface cardProps {
  title: string;
  date: string;
  description: string;

  tags: string;
  source?: string;
  website?: string;
}
const Card = ({
  title,
  date,
  description,
  tags,
  source,
  website,
}: cardProps) => {
  return (
    <div>
      <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
        <div className="flex flex-col px-2">
          <div className="space-y-1">
            <h3 className="font-semibold tracking-tight mt-1 text-base">
              {title}
            </h3>
            <time className="font-sans text-xs">{date}</time>
            <div className="hidden font-sans text-xs underline print:visible"></div>
            <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
          <div className="mt-2 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              Next.js
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              Typescript
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              PostgreSQL
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              Prisma
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              TailwindCSS
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              Stripe
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              Shadcn UI
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
              Magic UI
            </div>
          </div>
        </div>
        <div className="flex items-center pt-2 px-2 pb-2">
          <div className="flex flex-row flex-wrap items-start gap-1">
            <a target="_blank" href="https://chatcollect.com">
              <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-globe size-3"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                Website
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

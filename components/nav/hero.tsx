import { BLUR_FADE_DELAY } from "@/app/(root)/page";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ken-ui/avatar";
import BlurFade from "../ken-ui/blur-fade";

const Hero = () => {
  return (
    <div className="flex w-full mx-auto relative flex-row h-fit  pb-5 items-center justify-center mt-5 backdrop-blur-[2px]">
      <div className="flex flex-col justify-center items-start w-full">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-normal leading-7 text-2xl">Kennedy Anyidoho</h1>
          <p className="text-lg font-light">
            Software Engineer
          </p>
        </BlurFade>
        <div className="flex flex-col gap-1 mt-3">
          <BlurFade>
            <p className="text-xs font-normal">
              Reach me at{" "}
              <Link
                href="https://x.com/kennyAnyi9"
                className="underline underline-offset-1"
              >
                @kennyAnyi9
              </Link>{" "}
              or{" "}
              <a
                href="mailto:kennyanyi9@gmail.com"
                className="underline underline-offset-1"
              >
                kennyanyi9@gmail.com
              </a>
            </p>
          </BlurFade>
        </div>
      </div>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar>
          <AvatarImage src="ken.png" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
      </BlurFade>
    </div>
  );
};

export default Hero;

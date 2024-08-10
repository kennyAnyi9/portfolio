import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ken-ui/avatar";

const Hero = () => {
  return (
    <div className="flex max-w-xl mx-auto relative flex-row border rounded-md border-[#181818] h-fit items-center justify-center mt-5 p-2 backdrop-blur-[2px]">
      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="font-normal leading-7 text-xl">Kennedy Anyidoho</h1>
        <p className="text-xs font-light text-gray-300">
          Software Engineer & Neuroscience enthusiast
        </p>
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-xs font-normal text-gray-400">
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
        </div>
      </div>
      <Avatar>
        <AvatarImage src="ken.png" />
        <AvatarFallback>KA</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row border rounded border-[#181818] h-fit items-center justify-center mt-5 p-2 backdrop-blur-[2px]">
      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="font-semibold leading-7">Kenny Anyi</h1>
        <p className="text-xs font-light">Frontend Engineer</p>
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-xs font-normal">
            Looking to hire? Email me @ kennyanyi9@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { CornerIcon } from "./icons";
interface props {
  children: React.ReactNode;
  index?: number;
}
function GridItem({ children }: props) {
  return (
    <div
      className={`relative min-h-[18.25rem] w-[21.125rem] p-3 `}
    >
      <p className="effect absolute left-1/2 -z-10 -translate-x-1/2 scale-[50%]">
        ▲
      </p>
      <p className="effect absolute left-1/2 top-0 -z-10 -translate-x-1/2 scale-x-[25%] scale-y-[35%]">
        ▲
      </p>
      <div className="absolute -left-10 -top-10">
        <CornerIcon />
      </div>
      <div className="absolute -right-10 -top-10">
        <CornerIcon />
      </div>
      <div className="absolute -bottom-10 -left-10">
        <CornerIcon />
      </div>
      <div className="absolute -bottom-10 -right-10 flex items-center justify-center">
        <CornerIcon />
      </div>
      {/* horizontal lines  */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="flex h-[26px] w-[370px] flex-col justify-center">
          <div className="glow2 h-[2px] bg-gradient-to-r from-black via-color14 to-black before:absolute before:left-1/2 before:h-[3px] before:w-[50px] before:-translate-x-1/2 before:bg-white before:content-['']"></div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-[22px] w-[370px] flex-col justify-center">
          <div className="h-[2px] bg-gradient-to-r from-black via-color14 to-black"></div>
        </div>
      </div>
      {/* vertical lines  */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2">
        <div className="flex h-[320px] w-[16px] justify-center">
          <div className="h-full w-[2px] bg-red-200 bg-gradient-to-b from-black via-color14 to-black"></div>
        </div>
      </div>
      <div className="absolute -right-10 top-1/2 -translate-y-1/2">
        <div className="flex h-[320px] w-[16px] justify-center">
          <div className="h-full w-[2px] bg-red-200 bg-gradient-to-b from-black via-color14 to-black"></div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default GridItem;

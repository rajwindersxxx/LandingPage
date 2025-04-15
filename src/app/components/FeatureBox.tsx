import React from "react";
import LightBorder from "./LightBorder";

interface props {
  heading: string;
  children: React.ReactNode;
  description: string;
  className: string;
}
function FeatureBox({ heading, children, description, className }: props) {
  return (
    <LightBorder className={`${className}`}>
      <div
        className={`relative flex h-full flex-col justify-end  overflow-hidden rounded-lg bg-[#1d1d1d4d] p-4`}
      >
        <div className="effect4x absolute -left-48 -top-16 z-10 h-full w-full scale-x-[30%] scale-y-[75%] font-mono text-[420pt] font-extrabold leading-[120pt] text-transparent">
          ●
        </div>
        <div className="effect2 scale-y-115 absolute -left-28 top-48 z-10 h-full w-full scale-x-[80%] font-mono text-[820pt] font-extrabold leading-[120pt] text-transparent">
          ▲
        </div>
        <div className="z-20">{children}</div>
        <div>
          <h2 className="font-bold">{heading}</h2>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>
    </LightBorder>
  );
}

export default FeatureBox;

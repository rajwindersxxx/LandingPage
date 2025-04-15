"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import gsap from "gsap";
import Image from "next/image";
import { horizontalLoop } from "../helper/animation";
function MovingLogo() {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box") as HTMLElement[];
      const loop = horizontalLoop(boxes, {
        paused: true,
        repeat: -1,
      });
      loop.play();
    },
    { scope: scope }
  );
  return (
    <div className="grid grid-cols-1" ref={scope}>
      <div className="flex overflow-hidden   items-center gap-40 p-4 justify-between md:my-32 my-12 w-[100%] mx-auto ">
        <Image
          width={100}
          height={100}
          src="/1.png"
          alt="w image"
          className="h-16 grayscale opacity-50  box"
        />
        <Image
          width={100}
          height={100}
          src="/3.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/4.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/5.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/6.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/7.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/8.png"
          alt="w image"
          className="h-8 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/1.png"
          alt="w image"
          className="h-16 grayscale opacity-50  box"
        />
        <Image
          width={100}
          height={100}
          src="/3.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/4.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/5.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/6.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={100}
          height={100}
          src="/7.png"
          alt="w image"
          className="h-16 grayscale opacity-50 box "
        />
        <Image
          width={1}
          height={1}
          src="/8.png"
          alt="w image"
          className="h-8 grayscale opacity-0 box "
        />

      </div>
    </div>
  );
}

export default MovingLogo;

"use client";
import { useGSAP } from "@gsap/react";
import { PrimaryButton } from "./Buttons";
import { Stars } from "./icons";
import LogoDesignMain from "./LogoDesignMain";
import { motion } from "motion/react";
import { useRef } from "react";
import gsap from "gsap";
import { LampLight } from "./LightEffects";
function Hero() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.to(".rotation", {
      rotation: "-360",
      ease: "none",
      repeat: -1,
      duration: 30,
    });
  });
  return (
    <section className="flex  flex-col gap-12 my-16 relative p-4" ref={scope}>
      <LampLight />
      <div className=" flex justify-start items-center flex-col gap-12 text-center">
        <div className="flex  items-center flex-shrink-0 border bg-gradient-to-r from-color3/5 to-color4/5 border-color4 rounded-xl p-2 relative overflow-hidden">
          <div className="-mr-2">
            <Stars />
          </div>
          <p className="uppercase text-xs px-3">
            Transform Your Digital Presence with AI Agents
          </p>
          <motion.div
            initial={{ x: 0, rotate: 165 }}
            animate={{ x: 500 }}
            transition={{
              ease: "linear",
              duration: 3,
              delay: 2,
              repeatDelay: 3,
              repeat: Infinity,
            }}
            className="blur-sm h-32 w-6 absolute -rotate-12 shadow-2xl shadow-white bg-gradient-to-r from-white/15 via-white/30 to-white/15 -left-16"
          ></motion.div>
        </div>
        <div className="flex gap-2 justify-center rounded-xl p-2 w-full">
          <div className="text-8xl md:scale-100 sm:scale-75 scale-50">
            <LogoDesignMain />
          </div>
        </div>
        <p className="text-center max-w-[47.9375rem] mx-auto">
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them - all in real-time.
        </p>
        <div className="flex gap-2 flex-col">
          <PrimaryButton>Start Free Trail</PrimaryButton>
          <p className="text-[.625rem] ">Try AdTask AI free for 30 days</p>
        </div>
      </div>
      <div className="p-[1px] md:h-[37.5rem] h-[20rem] lg:w-[62rem] rounded-3xl container mx-auto relative overflow-hidden bg-color8 -z-10">
        <iframe
          className="  w-full h-full  rounded-3xl bg-black "
          src="https://www.youtube.com/embed/CPWxExGk7PM"
          title="Charli xcx - Apple (official lyric video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="rotation w-[1500px] h-[1500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-tr from-color14 from-50% via-transparent via-60% to-color14 -z-20 pathClip"></div>
      </div>
    </section>
  );
}

export default Hero;

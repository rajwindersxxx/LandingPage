'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { UserIcon } from "./icons";

export default function RotatingRadar() {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 }); // Infinite loop

      gsap.to(".circle", {
        scale: 2.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
      });
      tl.to(".circle2", {
        delay: 0.5,
        scale: 0.5,
        duration: 0.5,
      }).to(".circle2", {
        scale: 0.5,
        duration: 0.5,
      }).to(".circle2", {
        scale: 2.5,
        duration: 0.5,
        opacity: 0,
      });
      gsap.to(".human1", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: 3,
        repeatDelay: 3,
      });
      gsap.to(".human2", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        delay: 1,
      });
      gsap.to(".human3", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        delay: 1,
      });
      gsap.to(".radarCircle", {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 6,
      });
    },
    { scope: scope }
  );
  return (
    <div
      className="w-full h-full absolute top-0 left-0 overflow-hidden"
      ref={scope}
    >
      <div className="h-96 w-96  rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px] border-color7"></div>
      <div className="radarCircle rounded-full">
        <div className="radarFrontLine">xxx</div>
      </div>
      <UserIcon className="human1" />
      <UserIcon className="human2" />
      <UserIcon className="human3" />
      <div className="dot"></div>
      <div className="circle"></div>
      <div className="circle2"></div>
    </div>
  );
}

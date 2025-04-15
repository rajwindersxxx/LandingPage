'use client'
import { useGSAP } from "@gsap/react";
import { UserIcon } from "./icons";
import { useRef } from "react";
import gsap from "gsap";

export default function LightningDesign() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      MoveIcons(
        ["61.65%", "54.83%", "52.84%"],
        ["14.35%", "23.09%", "31.39%"],
        ".userIcon1"
      );
      MoveIcons(
        ["76.7%", "71.88%", "63.92%"],
        ["47.31%", "42.6%", "42.38%"],
        ".userIcon3"
      );
      MoveIcons(
        ["58.24%", "54.83%", "50%"],
        ["72.65%", "63.45%", "54.26%"],
        ".userIcon4"
      );
      MoveIcons(
        ["21.59%", "28.41%", "36.36%"],
        ["58.07%", "51.57%", "47.76%"],
        ".userIcon5"
      );
      MoveIcons(
        ["21.59%", "28.41%", "36.36%"],
        ["27.13%", "28.48%", "34.08%"],
        ".userIcon2"
      );

    },
    { scope: scope }
  );
  return (
    <div
      className="w-full h-full absolute top-0 left-0 overflow-hidden"
      ref={scope}
    >
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110">
        <LightShapeSvg />
      </div>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-[446px]">
        <UserIcon className="absolute left-[65.06%] top-[8.74] userIcon1" />
        <UserIcon className="absolute left-[10.23%] top-[23.32%] userIcon2" />
        <UserIcon className="absolute left-[90.34%] top-[47.31%] userIcon3" />
        <UserIcon className="absolute left-[61.65%] top-[79.15%] userIcon4" />
        <UserIcon className="absolute left-[10.23%] top-[60.76%] userIcon5" />
      </div>

      <div className="h-96 w-96  rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px] border-color7"></div>
      <div className="h-96 w-96 scale-75  rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px] border-color7"></div>
    </div>
  );
}
function MoveIcons(xCoords: string[], yCoords: string[], className: string) {
  const tl = gsap.timeline({ repeat: -1 });

  xCoords.forEach((x, index) => {
    const y = yCoords[index] || "0px"; // Default to "0px" if no y coordinate is provided

    tl.to(className, {
      left: x,
      top: y,
      opacity: 1,
      duration: 0.2,
    });
  });

  tl.to(className, { opacity: 0, duration: 0.5 }); // Fade out at the end
}

function LightShapeSvg() {
  return (
    <svg
      width="141"
      height="224"
      viewBox="0 0 141 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "lighten" }}>
        <path
          d="M35.8044 5.17011C36.2304 3.72066 37.1146 2.44824 38.3244 1.5434C39.5342 0.638558 41.0046 0.149995 42.5154 0.15088H98.4399C99.547 0.15172 100.638 0.415486 101.623 0.920462C102.608 1.42544 103.46 2.15718 104.107 3.05546C104.754 3.95374 105.178 4.99286 105.345 6.08728C105.512 7.18169 105.417 8.30011 105.067 9.35046L80.1805 84.0377H133.393C134.702 84.0368 135.985 84.4035 137.096 85.096C138.207 85.7886 139.101 86.7792 139.676 87.955C140.252 89.1308 140.486 90.4446 140.351 91.7468C140.217 93.0489 139.719 94.2872 138.915 95.3204L41.0473 221.151C40.0448 222.446 38.6192 223.348 37.0194 223.699C35.4196 224.051 33.7472 223.829 32.294 223.074C30.8408 222.318 29.6991 221.076 29.0682 219.564C28.4373 218.053 28.3571 216.368 28.8418 214.803L54.0218 132.972H7.56253C6.4757 132.972 5.4037 132.719 4.43165 132.233C3.4596 131.747 2.61429 131.041 1.96284 130.171C1.3114 129.301 0.871768 128.291 0.678866 127.222C0.485963 126.152 0.545102 125.052 0.851587 124.01L35.8044 5.17011Z"
          fill="url(#paint0_radial_444_83065)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_444_83065"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(70.478 112.007) rotate(89.8336) scale(121.881 76.1758)"
        >
          <stop stopColor="#C7D7FF" />
          <stop offset="1" stopColor="#788199" />
        </radialGradient>
      </defs>
    </svg>
  );
}

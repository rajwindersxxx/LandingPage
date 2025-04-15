import LightBorder from "./LightBorder";

interface props{
feedback: string;
author: string;
}
function Testimonial({feedback, author}: props) {
  return (
    <LightBorder>
     <div className="min-h-[12.25rem] w-[22rem] bg-gradient-to-b  from-[#0B0B0B] to-[#131313] rounded-lg p-8 grid grid-rows-[1fr_auto] gap-4 justify-between">
        <p className="text-[14px] text-color17 ">
          “{feedback}”
        </p>
        <p className="font-[500] text-[14px]">-{author}</p>
      </div>
    </LightBorder>
  );
}

export default Testimonial;

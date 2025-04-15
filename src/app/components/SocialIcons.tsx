import {
  AmazonIcons,
  ArrowUpLogo,
  LinkedInIcon,
  MetaLogo,
  TicktokIcon,
  XIcon,
} from "./icons";

function SocialIcons() {
  const icons = [
    { item: <ArrowUpLogo />, label: "Google Ads" },
    { item: <TicktokIcon />, label: "Tik tok Ads" },
    { item: <LinkedInIcon />, label: "LinkedIn Ads" },
    { item: <AmazonIcons />, label: "Amazon Ads" },
    { item: <XIcon />, label: "X/Twitter" },
    { item: <MetaLogo />, label: "Meta" },
  ];
  return (
    <div className="flex flex-col gap-8 items-center mb-[200px]">
      <p className="text-xs">Adtask AI works with :</p>
      <div className="grid sm:grid-cols-3 md:grid-cols-6 grid-cols-2 gap-7">
        {icons.map((item, index) => (
          <div className="group" key={item.label + index}>
            <div className=" p-[1px] bg-gradient-to-r from-color8 to-color9 inline-block rounded-lg relative group-hover:-translate-y-4 transition-all duration-500 group-hover:scale-105">
              <div className=" radialGradient group-hover:radialGradient2 overflow-hidden border-color9 p-4 w-[7rem] h-[6.6875rem]  rounded-lg relative transition-all duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105">
                  {item.item}
                </div>
              </div>
            </div>
            <p className="text-center -m-3 opacity-0 group-hover:opacity-100  transition-all duration-1000 -z-10">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;

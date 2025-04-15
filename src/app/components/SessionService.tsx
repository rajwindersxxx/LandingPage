import {  SecondaryButton} from "./Buttons";
import GridItem from "./GridItem";
import {
  GridIcon1,
  GridIcon2,
  GridIcon3,
  GridIcon4,
  GridIcon6,
  GridIcon7,
} from "./icons";
import SessionHeading from "./SessionHeading";

function SessionService() {
  const data = [
    {
      icon: <GridIcon1 />,
      heading: "Smart Ad Targeting",
      description:
        "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.",
    },
    {
      icon: <GridIcon2 />,
      heading: "Performance Analytics",
      description:
        "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.",
    },
    {
      icon: <GridIcon3 />,
      heading: "SEO Automation",
      description:
        "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.",
    },
    {
      icon: <GridIcon4 />,
      heading: "Social Media Marketing",
      description:
        "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms.",
    },
    {
      icon: <GridIcon6 />,
      heading: "Conversion Optimization",
      description:
        "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates.",
    },
    {
      icon: <GridIcon7 />,
      heading: "Campaign Automation",
      description:
        "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.",
    },
  ];

  return (
    <section className="services container mx-auto">
      <SessionHeading
        heading="services"
        subHeading="Innovative Services"
        subHeading2="for Growth."
      />
      <div className="max-w-[71.9375rem] mx-auto m-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-14 justify-center sm:overflow-visible overflow-x-clip place-items-center">
          {data.map((item, i) => (
            <GridItem key={item.heading} index={i}>
              <div className="flex flex-col gap-4 justify-between h-full w-full text-center text-lg">
                <div className="h-36 flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="h-32">
                  <h3 className="mb-3 bold text-2xl">{item.heading}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </GridItem>
          ))}
        </div>
      </div>

      <div className="flex justify-center p-28">
        <SecondaryButton>Contact Us</SecondaryButton>
      </div>
    </section>
  );
}

export default SessionService;

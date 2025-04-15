import { EllipseLight } from "./LightEffects";
import SessionHeading from "./SessionHeading";
import Testimonial from "./Testimonial";

function SessionTestimonials() {
  const data = [
    {
      feedback:
        "We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.",
      author: "Brand Director at a Tech Startup",
    },
    {
      feedback:
        "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
      author: "Head of Growth at Tech Startup",
    },
    {
      feedback:
        "We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
      author: "Ecommerce Manager at Home Décor Brand",
    },
    {
      feedback:
        "What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
      author: "Digital Strategist at SaaS Company",
    },
    {
      feedback:
        "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
      author: "Social Media Lead at Non-Profit Organization",
    },
    {
      feedback:
        "We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
      author: "Social Media Manager at a Fitness Brand",
    },
  ];

  return (
    <section className="testimonials mx-auto container mb-40 relative">
        <EllipseLight/>
      <SessionHeading
        heading="Testinomalias"
        subHeading="Trusted by"
        subHeading2="satisfied clients"
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[70rem] mx-auto gap-4 justify-center place-items-center">
        {data.map((item) => (
          <Testimonial
            feedback={item.feedback}
            author={item.author}
            key={item.author}
          />
        ))}
      </div>
    </section>
  );
}

export default SessionTestimonials;

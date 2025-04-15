import { PrimaryButton, SecondaryButton } from "./Buttons";
import { LampLight } from "./LightEffects";
import LogoDesignMain from "./LogoDesignMain";

function SessionCallToAction() {
  return (
    <section className="callToAction container mx-auto flex flex-col gap-20 p-20 relative">
       <LampLight/>
      <div className="flex gap-2 justify-center rounded-xl p-2">
        <div className="scale-75 md:scale-100">
          <LogoDesignMain />
        </div>
      </div>
      <div className="text-4xl md:text-5xl text-white text-center">
        <h2> Are you ready to boost</h2>
        <h2 className="mb-8">
          <span className="bg-gradient-to-r from-color14 via-color15 to-color16 bg-clip-text inline-block text-transparent pb-2">
            your Digital Presence?
          </span>
        </h2>
        <div className="flex flex-col gap-4 text-center text-base">
          <div>
            <PrimaryButton>Start Free Trail</PrimaryButton>
          </div>
          <div>
            <SecondaryButton>Schedule a Call</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SessionCallToAction;

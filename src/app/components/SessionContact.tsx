import { SecondaryButton } from "./Buttons";
import { EmailIcon, LocationIcon, PhoneIcon } from "./icons";
import { CircleLight } from "./LightEffects";

function SessionContact() {
  return (
    <section className="contact container mx-auto mb-20">
      <div className="flex justify-center">
        <div className="bg-gradient-to-l from-color11 to-color12 backdrop backdrop-blur-md ring-1 ring-gray-800  rounded-2xl  my-4 mx-auto justify-between py-1 px-4 uppercase">
          contact us
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-20 p-8 max-w-[69.5rem] mx-auto">
        <div className="flex flex-col gap-4 relative">
          <CircleLight/>
          <div>
            <h2 className="text-4xl text-white ">Ask whatever you have </h2>
            <h2 className="text-4xl mb-8">
              <span className="bg-gradient-to-r from-color14 via-color15 to-color16 bg-clip-text inline-block text-transparent">
                in your mind now
              </span>
            </h2>
            <p className="text-sm">
              Whether you have questions or are ready to discuss your business,
              we’re here to help. Reach out today.
            </p>
          </div>
          <div className="text-xs grid grid-cols-[32px_1fr] gap-y-4 gap-x-1 place-content-center items-center">
            <div className="flex items-center justify-center">
              <EmailIcon />
            </div>
            <a href="mailto:contact@adtask.ai" className="underline">
              contact@adtask.ai
            </a>
            <div className="flex items-center justify-center">
              <PhoneIcon />
            </div>
            <p>(969) 819-8061</p>
            <div className="flex items-center justify-center">
              <LocationIcon />
            </div>
            <p>San Francisco Bay Area</p>
          </div>
        </div>
        <form className="flex flex-col gap-8">
          <div>
            <label className="text-xs block mb-2">Name</label>
            <input
              type="text"
              className="h-7 w-full p-2 rounded-sm bg-black/25 outline outline-[1px] outline-color18"
            />
          </div>
          <div>
            <label className="text-xs block mb-2">Email</label>
            <input
              type="text"
              className="h-7 w-full p-2 rounded-sm bg-black/25 outline outline-[1px] outline-color18"
            />
          </div>
          <div>
            <label className="text-xs block mb-2">Message</label>
            <textarea className="h-32 w-full p-2 rounded-sm bg-black/25 outline outline-[1px] outline-color18"></textarea>
          </div>
          <div className="flex justify-center">
            <SecondaryButton className="w-32">submit</SecondaryButton>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SessionContact;

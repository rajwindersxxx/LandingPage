import { EmailIcon, LocationIcon } from "./icons";
import LogoDesignMain from "./LogoDesignMain";

function Footer() {
  return (
    <footer className="border-t-[1px] border-color10 p-4 bg-black/95 backdrop backdrop-blur-md">
      <div className="lg:container mx-auto grid md:grid-cols-[1fr_0.5fr_0.5fr] grid-cols-2 p-8 gap-12">
        <div className="row-start-2 md:row-start-1 md:col-span-1 col-span-2">
          <div className="scale-75 md:scale-100 flex justify-center sm:justify-start">
            <LogoDesignMain />
          </div>
          <div className="text-xs flex flex-col gap-y-4 gap-x-1 items-center md:items-start text-color14 ">
            <div className="flex gap-2 items-center justify-center">
              <EmailIcon />
              <a href="mailto:contact@adtask.ai" className="underline ">
                contact@adtask.ai
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <LocationIcon />
              <p>San Francisco Bay Area</p>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-5 text-center">
          <li className="font-semibold">Utilities</li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-5 text-center">
          <li className="font-semibold">Socials</li>
          <li>
            <a href="">X</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
        </ul>
      </div>
      <p className="text-xs text-center">
        All right reserved &copy; 2025 adTask
      </p>
    </footer>
  );
}

export default Footer;

import { ArrowDown } from "./icons";

function MainNav() {
  return (
      <ul className="md:flex hidden gap-4 justify-center items-center ">
        <li className="flex gap-1 group ">
          Products
          <span>
            <ArrowDown  className="group-hover:rotate-180 transition-all duration-500"/>
          </span>
        </li>
        <li className="flex gap-1 group">
          tools
          <span>
            <ArrowDown  className="group-hover:rotate-180 transition-all duration-500"/>
          </span>
        </li>
        <li className="flex gap-1">contact Us </li>
      </ul>
  );
}

export default MainNav;

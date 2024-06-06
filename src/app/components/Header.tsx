import { useRef } from "react";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";

const Header = ({ toggleSidebar }: { toggleSidebar: any }) => {
  return (
    <div className="navbar bg-base-100 flex justify-between px-5">
      <div
        className="btn"
        onClick={() => {
          toggleSidebar.current.checked = true;
        }}>
        <BiMenu size={22} />
      </div>

      <span className="text-xl text-primary font-bold">TIPID</span>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="dark" />
        {/* sun icon */}
        <BiSun className="swap-off" color="black" size={30} />
        {/* moon icon */}
        <BiMoon className="swap-on" color="white" size={30} />
      </label>
    </div>
  );
};

export default Header;

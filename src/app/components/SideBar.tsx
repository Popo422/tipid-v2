import React from "react";
import { BiX } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className="sm: w-full md:w-1/4 h-full bg-base-100">
        <div className="w-full flex justify-end items-center p-2">
          <label htmlFor="my-drawer" className="bg-primary rounded-full">
            <BiX size={22} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Navbar = () => {
  const [navAktif, setNavAktif] = useState(false);
  return (
    <>
      <div className="relative flex items-center justify-between w-full md:h-30 h-20 lg:px-20 mb-5 md:px-10 px-5">
        {/* Logo */}
        <div className="flex items-center md:space-x-4 space-x-1">
          <div className="md:w-16 md:h-16 w-11 h-11 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="images/Logo.jpg"
              alt="logo"
            />
          </div>
          <div className="-space-y-px">
            <h2 className="md:text-2xl text-md font-semibold">MILDIN BISNIS</h2>
            <p className="md:text-md text-[12px] font-medium text-textGray">
              Bisnis Pulsa, Paket Data, & TopUp
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="md:hidden visible relative">
          <p
            className="rotate-90 p-2  rounded-full shadow-[0_0_3px_0_rgb(0,0,0,0.25)]"
            onClick={() => setNavAktif(!navAktif)}
          >
            <Icon
              className={`${
                navAktif ? "-scale-x-[-1]" : "scale-x-[-1]"
              } transition-all duration-300`}
              icon="mingcute:right-fill"
              width="24"
              height="24"
            />
          </p>
          <div
            className={`${
              navAktif ? "h-36" : "h-0"
            } transition-all duration-200 flex flex-col items-center justify-center space-y-4 w-60 shadow-[0_0_3px_0_rgb(0,0,0,0.25)] rounded-md absolute right-0 mt-4 bg-white overflow-hidden`}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="images/Foto Profile.jpg"
                alt=""
              />
            </div>
            <div className="-space-y-px text-center">
              <h2 className="text-[12px] font-semibold">M Iqbaluddin</h2>
              <p className="text-[10px] font-medium text-textGray">
                Chief Executive Officer
              </p>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="hidden md:visible md:flex items-center space-x-4 p-1.5 w-60 shadow-[0_0_3px_0_rgb(0,0,0,0.25)] rounded-full">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="images/Foto Profile.jpg"
              alt=""
            />
          </div>
          <div className="-space-y-px">
            <h2 className="text-[12px] font-semibold">M Iqbaluddin</h2>
            <p className="text-[10px] font-medium">Chief Executive Officer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

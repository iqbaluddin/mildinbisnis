import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="lg:w-7xl m-auto lg:px-20">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full lg:h-20 lg:mt-10 ">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="images/Logo.jpg"
                alt="logo"
              />
            </div>
            <div className="-space-y-px">
              <h2 className="text-2xl font-semibold">MILDIN BISNIS</h2>
              <p className="text-md font-medium text-textGray">
                Bisnis Pulsa, Paket Data, & TopUp
              </p>
            </div>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-4 p-1.5 w-60 shadow-[0_0_3px_0_rgb(0,0,0,0.25)] rounded-full">
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
        <h1 className="text-xl text-blue-700">Jalan</h1>
      </div>
    </>
  );
};

export default HomePage;

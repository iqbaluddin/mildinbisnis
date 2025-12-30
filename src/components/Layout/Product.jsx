import React from "react";

const Product = ({ title = "title", product = [], handleNavigate }) => {
  return (
    <>
      <div className="w-full space-y-3.5">
        <h1 className="text-[20px] font-semibold">{title}</h1>
        <div className="flex flex-wrap justify-start gap-4">
          {product.map(($data, $key) => {
            return (
              <div
                onClick={() => handleNavigate($data.slug)}
                key={$key}
                className="relative md:w-64 md:min-h-16 md:max-h-16 min-h-14 max-h-14 w-40 flex justify-end cursor-pointer group"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 md:w-16 md:h-16 w-14 rounded-full overflow-hidden shadow-[6px_0_6px_0_rgba(0,0,0,0.25)] z-20">
                  <img
                    className="w-full h-full object-cover"
                    src={$data.logo}
                    alt=""
                  />
                </div>
                <div className="relative w-[87.73%] h-full rounded-r-full shadow-[1px_0_4px_0_rgba(217,217,217,1)] border border-Gray/50 overflow-hidden group">
                  {/* Background slide */}
                  <div className="absolute inset-0 bg-slate-700 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>

                  {/* Content */}
                  <h1 className="relative z-10 text-center md:leading-16 leading-14 md:text-sm text-[10px] font-semibold uppercase pl-[13%] text-black transition-colors duration-300 group-hover:text-white">
                    {$data.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;

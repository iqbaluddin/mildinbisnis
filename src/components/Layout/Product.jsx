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
                className="relative md:w-64 md:min-h-16 md:max-h-16 min-h-14 max-h-14 w-40 flex justify-end"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 md:w-16 md:h-16 w-14 rounded-full overflow-hidden shadow-[6px_0_6px_0_rgba(0,0,0,0.25)]">
                  <img
                    className="w-full h-full object-cover"
                    src={$data.logo}
                    alt=""
                  />
                </div>
                <div className="w-[87.73%] h-full bg-white rounded-r-full shadow-[1px_0_4px_0_rgba(217,217,217,1)] border border-Gray/50">
                  <h1 className="text-center md:leading-16 leading-14 md:text-sm text-[10px] font-semibold uppercase">
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

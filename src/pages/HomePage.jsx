import { Icon } from "@iconify/react";
import Navbar from "../components/Layout/Navbar";
import step from "../data/step";
import pulsa from "../data/pulsa";
import { useNavigate } from "react-router-dom";
import Product from "../components/Layout/Product";
import voucherGame from "../data/voucherGame";
import eWallet from "../data/ewallet";

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(`/product/` + slug);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex justify-center lg:mb-20 mb-10 ">
        <div className="lg:max-w-7xl md:w-full lg:mx-20 md:mx-10 mx-5 lg:space-y-12 space-y-8">
          {/* Step */}
          <div className="w-full space-y-3.5">
            <h1 className="text-[20px] font-semibold">Step Pembelian</h1>
            <div className="flex flex-wrap justify-start gap-4">
              {step.map(($data, $key) => {
                return (
                  <div
                    className="lg:w-64 lg:h-28 w-full min-h-20 bg-white rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.25)] border border-Gray/50"
                    key={$key}
                  >
                    <div className="flex items-center p-3 space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-[0_3px_3px_0_rgb(0,0,0,0.25)] border border-Gray/50">
                        {$data.id !== "Langkah Peringatan" ? (
                          <p className="text-md font-bold font-Quicksand">
                            {$key + 1}
                          </p>
                        ) : (
                          <Icon
                            className="text-warning"
                            icon="typcn:warning"
                            width="18"
                            height="18"
                          />
                        )}
                      </div>
                      <h1 className="text-md font-bold font-Quicksand">
                        {$data.id}
                      </h1>
                    </div>
                    <p className="text-[12px] font-normal pl-12 pr-3 pb-3">
                      {$data.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Produk Pulsa */}
          <Product
            title="Isi Pulsa"
            product={pulsa}
            handleNavigate={handleNavigate}
          />

          {/* Produk Pulsa */}
          <Product
            title="Voucher Game"
            product={voucherGame}
            handleNavigate={handleNavigate}
          />

          <Product
            title="E - Wallet"
            product={eWallet}
            handleNavigate={handleNavigate}
          />
        </div>
      </div>

      <div className="relative flex items-center justify-between w-full lg:px-20 md:px-10 px-5">
        <div className="border-t w-full h-16 border-Gray">
          <p className="text-center leading-16 text-[12px] font-medium text-textGray ">
            © 2025 M Iqbaluddin. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

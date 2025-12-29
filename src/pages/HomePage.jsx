import { Icon } from "@iconify/react";
import Navbar from "../components/Layout/Navbar";
import step from "../data/step";
import pulsa from "../data/pulsa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = (slug) => {
    navigate(`/product/` + slug);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex justify-center">
        <div className="lg:max-w-7xl md:w-full lg:mx-20 md:mx-10 mx-5 space-y-8">
          {/* Step */}
          <div className="w-full space-y-3.5">
            <h1 className="text-[20px] font-semibold">Step Pembelian</h1>
            <div className="flex flex-wrap justify-start gap-4">
              {step.map(($data, $key) => {
                return (
                  <div
                    className="lg:w-67.75 lg:h-28 w-full min-h-20 bg-white rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.25)] border border-Gray/50"
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
          <div className="w-full space-y-3.5">
            <h1 className="text-[20px] font-semibold">Pulsa</h1>
            <div className="flex flex-wrap justify-start gap-4">
              {pulsa.map(($data, $key) => {
                return (
                  <div
                    onClick={() => handleNavigate($data.slug)}
                    key={$key}
                    className="relative md:w-67 md:min-h-16 md:max-h-16 w-40 flex justify-end"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 md:w-12 md:h-12 w-10 rounded-full overflow-hidden shadow-[6px_0_6px_0_rgba(0,0,0,0.25)]">
                      <img
                        className="w-full h-full object-cover"
                        src={$data.logo}
                        alt=""
                      />
                    </div>
                    <div className="w-[87.73%] h-full bg-white rounded-xl shadow-[1px_0_4px_0_rgba(217,217,217,1)] border border-Gray/50">
                      <h1 className="text-center leading-16 text-md font-semibold uppercase">
                        {$data.name}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  const step = [
    {
      id: "Langkah Pertama",
      description:
        "Pilih kategori Pulsa, Voucher Game, Top Up E-Wallet. Lalu klik",
    },
    {
      id: "Langkah Kedua",
      description: "Pilih produk berdasarkan kebutuhkan. Klik bali",
    },
    {
      id: "Langkah Ketiga",
      description:
        "Isikan Nomor HP atau ID yang anda miliki. Klik logo whatsapp",
    },
    {
      id: "Langkah Keempat",
      description: "Akan diarahkan ke WA, Kirim pesan pembelian dan pembayaran",
    },
  ];
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex justify-center ">
        <div className="lg:max-w-7xl md:w-full lg:mx-20 md:mx-10 mx-5">
          <div className="w-full space-y-3.5">
            <h1 className="text-[20px] font-semibold">Step Pembelian</h1>
            <div className="flex flex-wrap lg:justify-between md:justify-start lg:gap-7 gap-4">
              {step.map(($data, $key) => {
                return (
                  <div
                    key={$key}
                    className="lg:w-65 lg:h-28 w-full min-h-20 bg-white rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.25)] border border-Gray/50"
                  >
                    <div className="flex items-center p-3 space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full shadow-[0_3px_3px_0_rgb(0,0,0,0.25)] border border-Gray/50">
                        <p className="text-md font-bold font-Quicksand">
                          {$key + 1}
                        </p>
                      </div>
                      <h2 className="text-md font-bold font-Quicksand">
                        {$data.id}
                      </h2>
                    </div>
                    <p className="text-[12px] font-normal pl-12 pr-3 pb-3">
                      {$data.description}
                    </p>
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

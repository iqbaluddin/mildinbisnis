import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../data/product";
import Navbar from "../components/Layout/Navbar";
import { Icon } from "@iconify/react";
import Footer from "../components/Layout/Footer";
import Swal from "sweetalert2";

const Products = () => {
  const { slug } = useParams();
  const data = product.find((item) => item.slug === slug);

  const [search, setSearch] = useState("");

  const filteredList = data.listPrice.filter((item) =>
    item.subTitle?.toLowerCase().includes(search.toLowerCase())
  );

  // vWa
  const messageRef = useRef("");

  const handleClickBuy = async () => {
    const { value, isConfirmed } = await Swal.fire({
      title: "Masukkan pesan",
      input: "text",
      inputLabel: "Pesan untuk WhatsApp",
      showCancelButton: true,
      confirmButtonText: "Kirim",
      cancelButtonText: "Batal",
      inputValidator: (value) => {
        if (!value) {
          return "Pesan tidak boleh kosong!";
        }
      },
    });

    if (!isConfirmed) return;

    messageRef.current = value;

    const encodedMessage = encodeURIComponent(messageRef.current);
    // const whatsappUrl = `https://wa.me/62895411376070?text=${encodedMessage}`;

    const whatsappUrl = `https://wa.me/62895411376070?text=${encodedMessage}%0A%0ASaya%20ingin%20membeli%20produk%20ini`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-center lg:mb-20 mb-10 mt-6">
        <div className="lg:max-w-7xl w-full lg:mx-20 md:mx-10 mx-5 lg:space-y-12 space-y-8">
          <div className="border border-Gray/25 shadow-[0_1px_6px_0_rgba(217,217,217,1)] rounded-xl min-h-40 lg:p-8 p-4">
            <div className="flex justify-between items-center mb-5">
              <h1 className="md:text-xl text-[14px]  font-semibold">
                List Harga
              </h1>
              <div className="relative flex items-center group">
                <input
                  type="text"
                  placeholder="Cari disini.."
                  onChange={(e) => setSearch(e.target.value)}
                  className="md:w-52 w-48  h-8 pl-2.5 pr-8 text-xs rounded-md border border-Gray shadow-[0_1px_6px_0_rgba(217,217,217,1)] focus:outline focus:border-sky-500 focus:outline-sky-500 placeholder:text-xs transition-all duration-300"
                />
                <Icon
                  className="absolute right-2 text-xl text-textGray"
                  icon="material-symbols:search"
                />
              </div>
            </div>
            <ul className="space-y-3 w-full h-fit">
              {filteredList.length == 0 ? (
                <li className="flex justify-around items-center text-center h-20 ">
                  <p className="text-center md:text-lg text-xs font-normal text-slate-400">
                    produk tidak ditemukan
                  </p>
                </li>
              ) : (
                filteredList.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="flex justify-between items-center  py-2.5 border-b border-Gray"
                    >
                      <div className="flex items-center space-x-3 ">
                        <div className="md:w-14 md:h-14 w-10 rounded-full overflow-hidden shadow border border-Gray">
                          <img
                            className="w-full h-full object-cover"
                            src={data.image}
                            alt=""
                          />
                        </div>
                        <div>
                          <h2 className="uppercase md:text-sm text-xs font-semibold">
                            {item.subTitle}
                          </h2>
                          <p className="text-[12px] font-medium text-textGray">
                            {item.price.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: "0",
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-4 ">
                        <p
                          className={`md:w-24 w-16 py-2 border-b-2 text-sm text-[10px] font-medium text-textGray text-center ${
                            item.status
                              ? "border-b-green-600"
                              : "border-b-warning"
                          } `}
                        >
                          {item.status ? "Tersedia" : "Habis"}
                        </p>
                        <button
                          onClick={() => handleClickBuy()}
                          className="md:w-24 w-16 py-2 bg-sky-700 rounded-full text-sm font-medium text-white text-center"
                        >
                          Beli
                        </button>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return "Rp." + ribuan + ",00";
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const sendMessageToWA = () => {
    if (data) {
      // Replace with the phone number you want to send the message to
      const phoneNumber = `+6282285538255`;

      // Construct the WhatsApp URL with the phone number and message
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Halo *In Tech Computerizer*\nSaya ingin bertanya terkait Produk dengan data berikut\n\nNama Produk : ${
          data.name
        }\nHarga Tertera: ${formatRupiah(
          data.sell_price
        )}\n\nSaya ingin bertanya `
      )}`;

      // Open the WhatsApp chat in a new tab or window
      window.open(whatsappURL, "_blank");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://fine-teal-sea-urchin-cuff.cyclic.app/api/products/${id}`
      );
      console.log(data.data);
      setData(data.data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <main className="section px-5 md:px-0 pt-10">
        {data && (
          <>
            <section className="flex flex-col w-full px-5 gap-3 md:gap-10">
              <div className="flex w-full justify-center items-center h-[13.5rem] md:h-[20rem]  bg-white border rounded-3xl overflow-hidden">
                <img
                  className="h-[10rem] md:h-[30.75rem] object-cover"
                  src={data.thumbnailUrl}
                  alt=""
                />
              </div>

              <div className="flex gap-3 md:gap-10">
                <div className="flex w-full justify-center items-center h-[9rem] md:h-[18rem] bg-white border rounded-3xl overflow-hidden">
                  <img
                    className="h-[7rem] md:h-[15.75rem] object-cover"
                    src={data.image1Url}
                    alt=""
                  />
                </div>
                <div className="flex w-full justify-center items-center h-[9rem] md:h-[18rem] bg-white border rounded-3xl overflow-hidden">
                  <img
                    className="h-[7rem] md:h-[15.75rem] object-cover"
                    src={data.image2Url}
                    alt=""
                  />
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full justify-start items-start px-5 gap-5 mt-20">
              <div className="w-full ">
                <h1 className="text-3xl font-semibold w-full leading-[4rem] text-center md:text-left">
                  {data.name}
                </h1>
              </div>
              <div className="w-full">
                <p className="text-sm font-montserrat text-gray-800 font-thin text-center md:text-justify leading-8">
                  {data.description}
                </p>
              </div>
            </section>

            <section className="flex flex-col-reverse w-full justify-start items-start px-5 gap-5 mt-40 ">
              <div className="w-full">
                <ul className="flex flex-col justify-start gap-8">
                  {data.keypoints &&
                    data.keypoints.map((item, i) => {
                      return (
                        <li
                          className="text-base text-center md:text-left md:text-2xl font-medium py-5 border-b-2 border-gray-300"
                          key={i}
                        >
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="w-full flex flex-col gap-24">
                <h2 className="text-3xl text-center md:text-left font-semibold leading-[3rem]">
                  Specifications of <br /> {data.name}
                </h2>
                <p className=" text-center  text-sm font-montserrat text-gray-800 font-thin md:text-justify leading-8">
                  There are several advantages that you can achieve when you own
                  this laptop
                </p>
              </div>
            </section>

            <section className="flex flex-col w-full justify-start items-center px-5 gap-16 md:gap-5 mt-40 mb-40">
              <div className="w-full flex flex-col gap-16 ">
                <h1 className="text-3xl font-semibold text-center md:text-left">
                  {data.name}
                </h1>
                <div className="flex flex-col items-center gap-10">
                  <p className="text-2xl font-semibold">
                    {formatRupiah(data.sell_price)}
                  </p>
                  <div onClick={sendMessageToWA}>
                    <Button isPrimary>Check for Availability</Button>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <div className="w-full flex justify-center rounded-3xl overflow-hidden">
                  <img
                    className="w-96 object-cover h-80 bg-primary p-8 rounded-3xl"
                    src={data.thumbnailUrl}
                    alt=""
                  />
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import iconTelp from "../assets/icon-telp.svg";
import iconEmail from "../assets/icon-email.svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black-2">
      <div className="section py-12 px-4 md:px-8">
        <div className="flex items-start justify-between flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col">
              <h3 className="text-white-2 font-semibold text-lg">Contact</h3>
              <div className="text-white-3 flex items-center gap-3">
                <span className="w-4 h-4">
                  <img src={iconTelp} alt="icon telp" width={16} height={16} />
                </span>
                <Link
                  to={"https://wa.me/082285538255"}
                  target="_blank"
                  className="font-medium hover:underline"
                >
                  082285538255
                </Link>
              </div>
              <div className="text-white-3 flex items-center gap-3">
                <span className="w-4 h-4">
                  <img src={iconEmail} alt="icon telp" width={16} height={16} />
                </span>
                <Link
                  to={"mailto:intechkomputerbatam@gmail.com"}
                  target="_blank"
                  className="font-medium hover:underline"
                >
                  intechkomputerbatam@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-end gap-3">
              <img src={logo} alt="logo" width={90} height={90} />
              <p className="font-medium text-white-3 lg:w-[25rem]">
                Town House NICCO RESIDENCE BLOK A NO. 1, Desa/Kelurahan Sadai,
                Kec. Bengkong, Kota Batam, Provinsi Kepulauan Riau. 29432
              </p>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-5 md:gap-10">
              <h3 className="text-white-2 font-semibold text-lg">About</h3>
              <div className="flex flex-col gap-5 text-white-3">
                <Link className="font-medium hover:underline">
                  About Company
                </Link>
                <Link className="font-medium hover:underline">
                  Vision & Mission
                </Link>
                <Link className="font-medium hover:underline">
                  Organization
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
              <h3 className="text-white-2 font-semibold text-lg">Product</h3>
              <div className="flex flex-col gap-5 text-white-3">
                <Link className="font-medium hover:underline">
                  Service Laptop
                </Link>
                <Link className="font-medium hover:underline">Asus</Link>
                <Link className="font-medium hover:underline">Lenovo</Link>
                <Link className="font-medium hover:underline">Hp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

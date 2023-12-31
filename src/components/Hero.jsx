import React from "react";
import imgHero1 from "../assets/image-hero-1.png";
import imgHero2 from "../assets/image-hero-2.png";
import imgHero3 from "../assets/image-hero-3.png";
import iconDesk from "../assets/icon-desktop.svg";
import iconUser from "../assets/icon-usergroup.svg";

export default function Hero() {
  return (
    <section className="section py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h1 className="text-black-1 font-semibold text-4xl md:text-5xl lg:text-6xl md:leading-[4rem] lg:leading-[5rem]">
            Find your dream laptop and professional service.
          </h1>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="grid grid-cols-7 md:grid-cols-9 gap-5 lg:h-52">
            <div className="rounded-2xl overflow-hidden col-start-1 md:col-start-4 col-span-2 ...">
              <img
                src={imgHero3}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-red-1 rounded-2xl overflow-hidden md:col-end-10 col-span-5 md:col-span-4 ...">
              <img
                src={imgHero2}
                alt=""
                className="rounded-2xl overflow-hidden h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-5">
            <div className="rounded-xl flex flex-col gap-6 md:gap-16 lg:gap-8 xl:gap-16 items-center justify-center bg-primary col-start-1 col-span-2 ...">
              <img src={iconDesk} alt="" className="w-10 md:w-16" />
              <img src={iconUser} alt="" className="w-10 md:w-16" />
            </div>
            <div className="col-end-8 col-span-5 ...">
              <img
                src={imgHero1}
                alt=""
                className="rounded-2xl overflow-hidden h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

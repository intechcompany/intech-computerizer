import React from "react";
import iconDesk from "../assets/icon-desktop.svg";
import iconUser from "../assets/icon-usergroup.svg";

export default function Product() {
  return (
    <section className="section py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-0">
        <div className="lg:w-1/2 flex gap-5 flex-col justify-center lg:justify-normal md:flex-row order-2 lg:order-1">
          <div className="flex flex-col gap-2 items-center justify-center border border-black-2 rounded-2xl p-20 hover:bg-primary hover:border-primary duration-500 transition-all">
            <img src={iconDesk} alt="" width={84} height={84} />
            <p className="font-semibold text-2xl">Laptop</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center border border-black-2 rounded-2xl p-20 hover:bg-primary hover:border-primary duration-500 transition-all">
            <img src={iconUser} alt="" width={84} height={84} />
            <p className="font-semibold text-2xl">
              Service <br /> Laptop
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-between order-1 lg:order-2">
          <h2 className="text-black-2 text-5xl font-semibold mb-10">Product</h2>
          <p className="text-black-3 text-base">
            We sell quality and complete laptops, and we also provide the best
            and most transparent laptop service to prioritize customer
            satisfaction and long-term relationships.
          </p>
        </div>
      </div>
    </section>
  );
}

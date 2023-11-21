import React from "react";

export default function CardGallery3({ title, img6, img7 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-5 lg:h-60">
      <div className="md:col-span-2 order-2 lg:order-1 lg:col-span-3 rounded-2xl h-60 overflow-hidden">
        <img src={img6} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="md:col-span-3 order-1 lg:order-2 self-end bg-primary px-5 lg:px-8 pt-12 pb-4 rounded-2xl">
        <p className="w-full md:w-10/12 2xl:w-[70%] text-black-1 text-2xl font-semibold">
          {title}
        </p>
      </div>
      <div className="md:col-span-3 order-3 lg:order-3 lg:col-span-4 rounded-2xl h-60 overflow-hidden">
        <img src={img7} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

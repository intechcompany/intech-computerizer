import React from "react";

export default function CardGallery1({ title, img1, img2 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-5 lg:h-60">
      <div className="md:col-span-3 lg:col-span-4 h-60 rounded-2xl overflow-hidden">
        <img src={img1} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="md:col-span-3 lg:col-span-4 h-60 rounded-2xl overflow-hidden">
        <img src={img2} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="md:col-span-2 order-first lg:order-last self-end bg-primary px-5 lg:px-8 pt-12 pb-4 rounded-2xl">
        <p className="w-full md:w-10/12 text-black-1 text-2xl font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
}

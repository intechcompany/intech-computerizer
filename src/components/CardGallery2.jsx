import React from "react";

export default function CardGallery2({ title, img3, img4, img5 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-11 gap-5 lg:h-60">
      <div className="md:col-span-2 self-end bg-red-1 px-5 lg:px-8 pt-12 md:pt-20 pb-4 rounded-2xl">
        <p className="w-full md:w-10/12 text-black-1 text-2xl font-semibold">
          {title}
        </p>
      </div>
      <div className="md:col-span-2 lg:col-span-3 h-60 rounded-2xl overflow-hidden">
        <img src={img3} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="md:col-span-2 lg:col-span-3 h-60 rounded-2xl overflow-hidden">
        <img src={img4} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="md:col-span-2 lg:col-span-3 h-60 rounded-2xl overflow-hidden">
        <img src={img5} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

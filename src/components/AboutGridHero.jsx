import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

export default function AboutGridHero(props) {
  return (
    <div
      className={`section px-5 md:px-0 w-full flex ${
        props.isReverse
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row "
      } gap-5 py-12`}
    >
      <div className="md:w-1/3">
        <div className="rounded-2xl overflow-hidden">
          <img className="w-full h-64 object-cover" src={img1} alt="" />
        </div>
      </div>
      <div
        className={`md:w-1/3 flex ${
          props.isReverse ? "flex-row-reverse" : "flex-row"
        } gap-5`}
      >
        <div className="rounded-2xl overflow-hidden">
          <img className="w-full h-64 object-cover" src={img2} alt="" />
        </div>
        <div>
          <div className="flex flex-row gap-5 rounded-2xl overflow-hidden">
            <img className="w-full object-cover" src={img3} alt="" />
            <img className="w-full object-cover" src={img4} alt="" />
          </div>
          <div className="mt-5 rounded-2xl overflow-hidden">
            <img className="w-full object-cover" src={img5} alt="" />
          </div>
        </div>
      </div>
      <div className="md:w-1/3 flex gap-5 rounded-2xl overflow-hidden">
        <img className="w-full h-64 object-cover" src={img6} alt="" />
      </div>
    </div>
  );
}

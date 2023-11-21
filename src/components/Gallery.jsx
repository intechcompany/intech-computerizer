import React from "react";

import CardGallery1 from "./CardGallery1";
import CardGallery2 from "./CardGallery2";
import CardGallery3 from "./CardGallery3";
import CardGallery4 from "./CardGallery4";
import CardGallery5 from "./CardGallery5";
import CardGallery6 from "./CardGallery6";

import img1 from "../assets/img-gallery1.jpg";
import img2 from "../assets/img-gallery2.jpg";
import img3 from "../assets/img-gallery3.jpg";
import img4 from "../assets/img-gallery4.jpg";
import img5 from "../assets/img-gallery5.jpg";
import img6 from "../assets/img-gallery6.png";
import img7 from "../assets/img-gallery7.png";
import img8 from "../assets/img-gallery8.png";
import img9 from "../assets/img-gallery9.png";
import img10 from "../assets/img-gallery10.png";
import img11 from "../assets/img-gallery11.png";
import img12 from "../assets/img-gallery12.png";
import img13 from "../assets/img-gallery13.png";
import img14 from "../assets/img-gallery14.png";
import img15 from "../assets/img-gallery15.png";
import img16 from "../assets/img-gallery16.png";

export default function Gallery() {
  return (
    <section className="section py-12 px-4">
      <div className="flex flex-col gap-12">
        <h2 className="text-black-2 text-5xl font-semibold">Gallery</h2>
        <CardGallery1 title={"Shop Activities"} img1={img1} img2={img2} />
        <CardGallery2 title={"Shop"} img3={img3} img4={img4} img5={img5} />
        <CardGallery3 title={"Good Documentation"} img6={img6} img7={img7} />
        <CardGallery4
          title={"Shop Supliers"}
          img8={img8}
          img9={img9}
          img10={img10}
        />
        <CardGallery5
          title={"School Supliers"}
          img11={img11}
          img12={img12}
          img13={img13}
        />
        <CardGallery6
          title={"Delivery Rod"}
          img14={img14}
          img15={img15}
          img16={img16}
        />
      </div>
    </section>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return "Rp." + ribuan + ",00";
}

export default function ProductCard(props) {
  const navigation = useNavigate();
  return (
    <div
      onClick={() => navigation(`/products/${props.id}`)}
      className="bg-white hover:bg-primary hover:border-primary hover:shadow-2xl cursor-pointer duration-500 hover:-translate-y-2 transition-all w-96 h-60 border border-black rounded-lg px-8 py-7 flex gap-2 justify-between"
    >
      <div className="w-2/3 flex flex-col justify-between font-semibold text-lg">
        <h6>{props.title}</h6>
        <p>{props.price && formatRupiah(props.price)}</p>
      </div>
      <div className="w-1/3 flex items-center">
        <img className="w-full object-cover" src={props.thumbnail} alt="" />
      </div>
    </div>
  );
}

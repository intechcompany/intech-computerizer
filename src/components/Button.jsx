import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`py-3 px-4 xl:py-3 xl:px-6 
      ${props.className && props.className} 
      ${
        props.isPrimary &&
        "bg-white-1 text-black-2 border border-black-1 hover:text-black-1 hover:bg-primary hover:border-primary duration-500 transition-all"
      } 
      font-bold text-sm rounded-full`}
    >
      {props.children}
    </button>
  );
}

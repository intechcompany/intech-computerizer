import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="section py-10">
      <nav className="flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" width={90} height={90} />
            <h3 className="text-black-1 font-bold text-base">
              IN TECH <br /> COMPUTERIZER
            </h3>
          </div>
        </Link>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <Link to={"/about"}>
              <Button isPrimary>About us</Button>
            </Link>
            <Link to={"/products"}>
              <Button isPrimary>Product</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

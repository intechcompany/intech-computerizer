import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="section pt-10 px-4">
      <nav className="flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" width={90} height={90} />
            <h3 className="text-black-1 font-bold text-base hidden md:block">
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
        <div className="md:hidden">
          <Bars3Icon className="h-8 w-8 text-black-1" onClick={handleOpen} />
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 w-full h-screen z-20 lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } duration-500 transition-all`}
      >
        <div className="absolute top-0 right-0 w-full bg-white-1 px-10 pt-32 pb-14">
          <XMarkIcon
            className="absolute top-16 right-4 h-8 w-8 text-black-1"
            onClick={handleOpen}
          />
          <div className="flex gap-5 flex-col">
            <Link to={"/about"} className="flex flex-col">
              <Button isPrimary>About us</Button>
            </Link>
            <Link to={"/products"} className="flex flex-col">
              <Button isPrimary>Product</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

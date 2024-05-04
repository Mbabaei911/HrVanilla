import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import ModalComponent from "./modalComponent";
const ROUTES = ["Why VanillaHR?", "About", "Product", "Pricing", "Contact"];

const Navbar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const modalShowing = (x) => {
    setModalShow(x);
  };
  return (
    <Fragment>
      {modalShow && <ModalComponent modalShowing={modalShowing} />}
      <nav className=" flex items-center justify-between lg:px-14 py-5 mx-auto border-b-2 flex-wrap px-5">
        {/* nav logo button */}
        <Link href={"/"}>
        <div className="flex items-center justify-between cursor-pointer">
          <Image alt="logo" src="/images/logo.jfif" width={40} height={40} />
          <h5 className="pl-2 roboto-black ">VanillaHR</h5>
        </div>
        </Link>

        <div className="flex lg:order-last">
          <button
            onClick={() => {
              setModalShow(!modalShow);
            }}
            className="lg:px-10 px-7 py-2 bg-white rounded-md text-blue-800 border-blue-600 border-2 hover:bg-blue-700 hover:text-white mr-2 font-bold"
          >
            Login
          </button>

          {/* burger button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
              className="rounded-lg hover:bg-gray-100 focus:ring-gray-200 p-2"
            >
              <RxHamburgerMenu size={25} />
            </button>
          </div>
        </div>
        {/* list of nav */}
        <div
          className={`w-full pt-3 lg:w-auto lg:p-0  lg:block  ${
            isMobileMenuShown ? "" : "hidden"
          }`}
        >
          <ul className="bg-gray-50 lg:bg-transparent border lg:border-none border-gray-200 rounded-lg  flex-col flex lg:flex-row lg:space-x-1 ">
            {ROUTES.map((route, i) => {
              return (
                <li
                  className={`py-2 px-3 cursor-pointer rounded ${
                    i === 0
                      ? "bg-blue-400 text-white lg:bg-transparent lg:text-blue-500"
                      : " hover:bg-gray-100"
                  }`}
                  key={route}
                >
                  <Link href={`${i === 0 ? "/" : route}`}>{route}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import { BsYoutube } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
function Footer() {
  return (
    <div className="w-full bg-gray-900 ">
      <div className="   mx-auto pt-12">
        <div className="flex justify-center items-center lg:space-x-6 space-x-3 *:size-11 *:p-2 *:bg-white *:rounded-full *:cursor-pointer ">
          <BsFacebook className="fill-blue-500 hover:fill-gray-800" />
          <FaInstagram className="fill-blue-800   hover:fill-gray-800" />
          <AiOutlineTwitter className="fill-blue-400  hover:fill-gray-800" />
          <AiFillGoogleCircle className="fill-red-500  hover:fill-gray-800" />
          <BsYoutube className="fill-red-500  hover:fill-gray-800" />
        </div>
        <div className="pb-9 pt-2">
          <ul className="flex items-center justify-center  pt-5 space-x-4 lg:space-x-9 *:text-sm *:font-bold *:text-gray-300 ">
            <li className="hover:text-white">
              <Link href={"/"}>Home</Link>
            </li>

            <li className="hover:text-white">
              <Link href={"/About"}>About</Link>
            </li>

            <li className="hover:text-white">
              <Link href={"/Product"}>Product </Link>
            </li>

            <li className="hover:text-white">
              <Link href={"/Pricing"}>Pricing </Link>
            </li>

            <li className="hover:text-white">
              <Link href={"/Contact"}>Contact </Link>
            </li>
          </ul>
        </div>
        <div className="bg-black text-center py-3 ">
          <p className="text-sm lg:text-md text-white">
            Copyright &copy; 2024. designed by
            <span className="text-blue-300"> M.babaei</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

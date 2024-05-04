import { BsFillPlayFill } from "react-icons/bs"; 
import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="flex md:flex-row flex-col  mx-auto lg:h-[700px] md:h-[600px] sm:w-[80%] md:w-[90%] ">
      <div className=" flex-1  ">
        <div className="lg:pt-16 lg:pl-16 space-y-11 md:pt-9 md:pl-5 pt-5 pl-2 pb-5">
          <h5 className="text-blue-600">AUTOMATE & HIRE</h5>
          <h1 className="text-5xl font-semibold">
            Hire for
            <br /> what&#8217;s next.
          </h1>
          <h3 className="text-wrap roboto-medium">
            what&#8217;s next for many of us is changing your company&#8217;s
            ability to hire great talent is as important as ever so you&#8217;ll
            be.
          </h3>
          <div className="flex space-x-5"> 
            <button className="md:px-6 px-3 md:py-1 py-3 bg-blue-600 rounded-md text-white  hover:bg-blue-800 hover:text-white font-bold text-nowrap">
              Get Started
            </button>
            <button className="md:px-6 px-3 py-3 text-blue-600 rounded-md bg-blue-100   hover:bg-blue-600 hover:text-white  font-bold flex-center text-nowrap">
              Watch Video <span className="mx-2 text-gray-300">|</span>  <BsFillPlayFill />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-1 flex-center order-first md:order-last image-container">
        <Image
          src="/images/photo1.jpg"
          alt="photo1"
          layout="fill"
          className="image  "
        />
      </div>
    </div>
  );
};

export default Section1;

import React from "react";
import { TbBrandGoogle } from "react-icons/tb";
import { RiSlackLine } from "react-icons/ri";
import { SiNetflix } from "react-icons/si";
import { SiWalmart } from "react-icons/si";
import { SiNissan } from "react-icons/si";

const MidsectionLogos = () => {
  const logos = [
    <RiSlackLine
      size={100}
      key={RiSlackLine}
      className="fill-gray-400 hover:fill-gray-600"
    />,
    <SiNissan
      size={100}
      key={SiNissan}
      className="fill-gray-400 hover:fill-gray-600"
    />,
    <TbBrandGoogle
      size={100}
      key={TbBrandGoogle}
      className=" text-gray-400 hover:text-gray-600"
    />,
    <SiWalmart
      size={100}
      key={SiWalmart}
      className="fill-gray-400 hover:fill-gray-600"
    />,
    <SiNetflix
      size={100}
      key={SiNetflix}
      className="fill-gray-400 hover:fill-gray-600"
    />,
  ];
  return (
    <div className=" lg:columns-5 columns-3  gap-0 border-t-2 border-b-2 ">
      {logos.map((logo, i) => {
        return (
          <div
            key={i}
            className=" flex items-center justify-center roboto-bold"
          >
            {logo}
          </div>
        );
      })}
    </div>
  );
};

export default MidsectionLogos;

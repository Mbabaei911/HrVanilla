import { IoIosChatboxes } from "react-icons/io";
import React from "react";
import { FcStatistics } from "react-icons/fc";
import { SlSpeech } from "react-icons/sl";

function Section5() {
  const AllInfo = [
    {
      logo: <SlSpeech size={50} className="text-gray-400" />,
      title: "All of Data Experience",
      percent: "+66%",
      detail: "Attention to the Applications",
    },
    {
      logo: <FcStatistics size={50} className="text-gray-400" />,
      title: "Hiring Manager Engage",
      percent: "+63%",
      detail: "Faster response time",
    },
    {
      logo: <IoIosChatboxes size={50} className="text-gray-400" />,
      title: "Recruiter Productivity",
      percent: "+59%",
      detail: "More Time spent on relationship building",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="py-10">
        <h4 className="text-center text-3xl roboto-bold">
          Driving impact for our <br />
          customers
        </h4>
      </div>
      <div className=" mb-5">
        <div className="grid grid-cols-1 gap-2 w-[80%] mx-auto lg:grid-cols-3 md:grid-cols-2 md:gap-3 lg:gap-5">
          {AllInfo.map((info) => {
            return (
              <div
                key={info.title}
                className="border-2 flex-center py-6 flex-col space-y-6 rounded hover:border-gray-400 hover:cursor-pointer"
              >
                {info.logo}
                <h4 className="roboto-bold  text-md">{info.title}</h4>
                <h1 className="text-5xl roboto-bold">{info.percent}</h1>
                <h3 className="text-sm text-gray-400 capitalize text-center">
                  {info.detail}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" text-center mt-10 pt-4 pb-20">
        <button className="md:px-14 px-10 md:py-2 py-2 bg-blue-600 rounded text-white  text-sm hover:bg-blue-700 hover:text-white text-nowrap shadow">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Section5;

import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaHandsHelping } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { GiVibratingSmartphone } from "react-icons/gi";
import React from "react";

function Section3() {
  const infos = [
    {
      logo: <AiTwotoneSecurityScan size={70} />,
      title: "the class partners",
      description:
      "Keep things moving from anywhere with your top-rated mobile hiring app.",
    },
    {
      logo: <BsFillPostcardHeartFill size={70} />,
      title: "Fas, global support",
      description:
        "Keep things moving from anywhere with your top-rated mobile hiring app.",
    },
    {
      logo: <GiCampingTent size={70} />,
      title: "Where recruiting",
      description:
      "Keep things moving from anywhere with your top-rated mobile hiring app.",
    },
    {
      logo: <FaHandsHelping size={70} />,
      title: "Trusted security",
      description:
      "Keep things moving from anywhere with your top-rated mobile hiring app.",
    },
    {
      logo: <HiOutlineEmojiHappy size={70} />,
      title: "Expert advice",
      description:
      "Keep things moving from anywhere with your top-rated mobile hiring app.",
    },
    {
      logo: <GiVibratingSmartphone size={70} />,
      title: "Assisted onboarding",
      description:
        "Keep things moving from anywhere with your top-rated mobile hiring app.",
    },
  ];
  return (
    <div className="lg:mt-24 mt-10 w-[80%] mx-auto mb-10">
      <div className="lg:text-3xl text-2xl roboto-bold text-center mb-10">
        More reasons companies <br /> around the world choose
        <br /> VanillaHR
      </div>
      <div className="columns-1 space-y-4 lg:columns-3 md:columns-2">
        {infos.map((info) => {
          return (
            <div
              key={info.title}
              className="border-2  break-inside-avoid-column rounded hover:border-gray-400"
            >
              <div className="flex flex-col items-center justify-center px-4 space-y-3 mt-2">
                <p className="text-teal-700">{info.logo}</p>
                <p className="roboto-bold text-md">{info.title}</p>
                <p className="text-center text-gray-600 pb-8">{info.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section3;

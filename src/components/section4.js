import React from "react";
import Image from "next/image";
function Section4() {
  const AllInfo = [
    {
      title: "Keeping awareness With emotional icon",
      path: "/images/photo3.png",
    },
    {
      title: "Keeping awareness With emotional icon",
      path: "/images/photo4.png",
    },
    {
      title: "Keeping awareness With emotional icon",
      path: "/images/photo5.png",
    },
  ];
  return (
    <div className="bg-gray-100 pb-10 relative z-20 overflow-hidden">
      <div className="bg-outsideCircleColor xl:w-[800px] xl:h-[800px] absolute rounded-full xl:-top-[400px] xl:-right-[400px] -z-10 "></div>
      <div className="bg-insideCircleColor xl:w-[450px] xl:h-[450px] absolute rounded-full xl:-top-[225px] xl:-right-[225px] -z-[9] "></div>
      <div className="flex flex-col  items-center space-y-8 md:flex-row md:items-center md:justify-center md:space-x-5 lg:space-x-24">
        <div className="mt-8 text-3xl roboto-bold capitalize">
          how to be up to date
          <br />
          and see drum dummy.
        </div>
        <p className="text-gray-700 tracking-tight ">
          Jira Software is built for every <br /> member of your software team
          to plan,
          <br /> track, and release great software.
        </p>
      </div>
      <div className=" column-1  mt-10 md:columns-3 lg:w-[80%] mx-auto space-y-4">
        {AllInfo.map((info) => {
          return (
            <div className=" " key={info.title}>
              <div className=" flex justify-evenly items-center break-inside-avoid-column ">
                <div className="p-4 rounded bg-white space-y-5 flex flex-col items-start shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={info.path}
                    width={350}
                    height={200}
                    alt="photo3"
                    className="rounded bg-gray-100 md:w-48 md:h-40 lg:w-52 lg:h-48 xl:w-56 xl:h-52"
                  />
                  <p className="roboto-bold capitalize text-wrap ">
                    Keeping awareness With
                    <br /> emotional icons
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section4;

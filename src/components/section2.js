import React from "react";
import Image from "next/image";
const Section2 = () => {
  return (
    <div className=" w-[80%]  grid md:grid-cols-2 grid-cols-1 mx-auto  gap-0 lg:h-[700px] lg:space-y-3 mt-5 lg:mt-3 mb-5 space-y-5">
      <div className="flex justify-center items-center">
        <h1 class="text-4xl roboto-bold">
          The best software
          <br /> teams ship early
          <br />
          and often
        </h1>
      </div>
      <div className=" space-y-5 flex justify-center flex-col  items-center pt-3 lg:pt-0 lg:items-start">
        <p>
          Jira Software is built for every member of
          <br /> your software team to plan, track, and
          <br /> release great software.
        </p>
        <button class="px-7 py-2 bg-white hover:bg-blue-500 hover:text-white  rounded-lg lg:self-start   shadow-md hover:border-blue-500 border-2">
          Watch Video
        </button>
      </div>
      <div className="flex-center ">
        <Image
          src="/images/photo2.jpg"
          alt="photo 2"
          height={350}
          width={350}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 lg:items-start">
        <p className="text-blue-500 uppercase ">SOURCE & ATTRACT</p>
        <p className="text-3xl font-bold">
          All the info you
          <br /> need - in one place
        </p>
        <p>
          Save yourself time by keeping profile info, CV,
          <br /> social links, notes, ratings, and relevant files all
          <br /> in one place.
        </p>
        <button class="px-7 py-2 bg-white hover:bg-blue-500 hover:text-white  rounded-lg lg:self-start shadow-md hover:border-blue-500 border-2  ">
          Learn More
        </button>
      </div>
    </div>

  );
};

export default Section2;

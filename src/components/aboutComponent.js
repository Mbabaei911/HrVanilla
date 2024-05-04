import React from "react";
import Image from "next/image";
function AboutComponent() {
  return (
    <div className="pt-9 bg-gradient-to-br from-gray-50">
      <div className="flex-center flex-col space-y-5 w-[80%] mx-auto">
        <p className="roboto-bold uppercase text-sm">our mission</p>
        <p className="font-bold lg:text-3xl text-xl md:text-2xl ">
          Making commerce better for everyone
        </p>
        <p className="text-left lg:text-center lg:w-[60%] text-wrap text-gray-600">
          We help people achieve independence by making it easier to start, run,
          and grow a business. We believe the future of commerce has more
          voices, not fewer, so we&#8217;re reducing the barriers to business
          ownership to make commerce better for everyone.
        </p>
      </div>
      <div className="my-10 ">
        <div className="w-[90%] 2xl:w-[60%] 2xl:p-20 mx-auto space-y-9 bg-blue-50 xl:bg-blue-50   rounded  lg:p-14 xl:w-[75%] lg:flex lg:flex-col lg:justify-center lg:items-center xl:flex-row shadow p-3">
          <div className="  w-72  mx-auto rounded xl:order-last  md:w-96 xl:w-[70%]  2xl:w-[80%]  2xl:-right-24 right-0 2xl:translate-x-32 xl:translate-x-24 shadow-xl">
            <Image
              src="/images/aboutPageImage.png"
              height={300}
              width={300}
              alt="about image"
              className="imageAbout rounded w-full  hover:scale-105 transition-transform duration-300"
              unoptimized={true}
            />
          </div>
          <div className="lg:space-y-6 space-y-4 2xl:w-[65%] xl:w-[65%] ">
            <p className="roboto-bold uppercase text-sm">OUR PEOPLE</p>
            <p className="text-2xl font-bold">
              Creating a community for impact
            </p>
            <p className="text-gray-600">
              HR vanilla has grown from 5 people in a coffee shop to over 5,000
              across the globe. With over 1,000,000 businesses powered by HR
              vanilla, we care deeply about the work we do. We&#8217;re constant
              learners who thrive on change and seek to have an impact in
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;

import React, { Fragment } from "react";
import Section1 from "../components/section1";
import MidsectionLogos from "@/components/midSectionLogoes";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
const HomePage = () => {
  return (
    <Fragment>
      <Section1 />
      <MidsectionLogos/>
      <Section2/> 
      <Section3/> 
     <Section4/>
      <Section5/>
    </Fragment>
  );
};

export default HomePage;

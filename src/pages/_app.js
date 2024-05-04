import Navbar from "@/components/navbar";
import { Fragment } from "react";
import "../styles/globals.css";
import "../styles/tailwind.css";
import Footer from "@/components/footer";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
       
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </Fragment>
  );
};

export default MyApp;

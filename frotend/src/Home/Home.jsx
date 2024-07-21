import React from "react";
import Navbar from "../componen/Navbar";
import Banner from "../componen/Banner";
import Footer from "../componen/Footer";
import Freebook from "../componen/Freebook";
const Home = () => {
  return (
    <div className="bg">
      <Navbar />
      <Banner />
      <Freebook />
      <Footer className="bg" />
    </div>
  );
};

export default Home;

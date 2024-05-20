import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Features from "../components/news/Features";

const News = () => {
  return (
    <>
      <NavBar />
      <div className="relative">
        <img src="/page/frame.png" className="w-full shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[48px] font-bold text-primary-200">Cerita FitAja!</h2>
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
};

export default News;
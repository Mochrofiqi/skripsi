
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/swiper.css";
import "../../index.css";
import { Link } from "react-router-dom";

const SorotanGaleri = () => {
  return (
    <>
      <section>
        <div className="mx-20 gap-20">
          <div className="w-1/2 justify-center m-auto group">
            <Link to={"/galeri-peresmian"}>
              <a className="items-center justify-center w-full py-2">
                <img
                  src="/berita/peresmian.png"
                  alt="Banner Image"
                  className="w-full rounded-2xl group-hover:opacity-80"
                ></img>
                <h1 className="group-hover:underline group-hover:text-primary-200 hover:text-primary-200 text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                  Peresmian Kerja Sama FitAja!
                </h1>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SorotanGaleri;

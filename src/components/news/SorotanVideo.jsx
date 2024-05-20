
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/swiper.css";
import "../../index.css";

const SorotanVideo = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <section>
        <div className="mx-20 gap-20">
          <div className="w-1/2 justify-center m-auto group">
            <div className="relative aspect-video w-full group-hover:opacity-80">
              <img
                className=" aspect-video w-full rounded-2xl"
                onClick={openModal}
                src="/ytb.png"
                alt="Youtube Thumbnail"
              />
              <img
                onClick={openModal}
                className="absolute inset-0 flex items-center justify-center m-auto w-16 border-white"
                src="/play.png"
                alt="Play Button"
              />
            </div>
            <h1 className="group-hover:underline group-hover:text-primary-200 hover:text-primary-200 text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
              Aplikasi FitAja!
            </h1>
          </div>
          {modal ? (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
              <div className="rounded">
                <div className="relative">
                  <h1
                    onClick={openModal}
                    className="absolute top-0 border text-xl bg-white border-white rounded-full p-1 -right-10 text-gray-800 cursor-pointer"
                  >
                    ❌
                  </h1>
                  <iframe
                    loading="lazy"
                    width="1200"
                    height="600"
                    src="https://www.youtube.com/embed/mTNNR4Ikwv4?si=DWpoNI9TqDKYpMqW?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default SorotanVideo;

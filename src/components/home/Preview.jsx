// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../../styles/swiper.css';
import '../../index.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Preview() {
  return (
    <>
    <div className="judul">
          <h2 className="text-center m-auto pt-10 pb-8 font-semibold md:text-3xl xl:text-4xl">
            Preview Aplikasi!
          </h2>
        </div>
      <section className="preview">
        <Swiper
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          slidesPerView="auto"
          speed={3000}
          breakpoints={{
            640: {
              slidesPerView: 1,
              // spaceBetween: 20, // Sesuaikan jarak di sini jika diperlukan
            },
            768: {
              slidesPerView: 1,
              // spaceBetween: 15, // Sesuaikan jarak di sini jika diperlukan
            },
            1080: {
              slidesPerView: 1,
              // spaceBetween: 10, // Sesuaikan jarak di sini jika diperlukan
            },
            1280: {
              slidesPerView: 3.3,
              // spaceBetween: 5, // Sesuaikan jarak di sini jika diperlukan
            },
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper p-6"
        >
          <div
            id="iphone"
            className="absolute inset-0 z-[1] flex items-center justify-center"
          >
            <img
              className="h-[455px] md:w-[450px] md:h-[550px]"
              src="https://demo.fitaja.id/assets/icons/iPhone 13 Pro.svg"
              alt="Iphone Frame"
            ></img>
          </div>
          <div className="relative w-4/5 mx-auto mb-8 overflow-hidden swiper-container">
            <div className="w-3/4 py-16 md:w-4/5 swiper-wrapper">
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/Home_Preview.svg"
                    alt="Home Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/FitMedicine_Feature.svg"
                    alt="FitMedicine Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/FitCode_Feature.svg"
                    alt="FitCode Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/FitMe_Feature.svg"
                    alt="FitMe Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[600px]"
                    src="/preview.png"
                    alt="FitInsurance Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/Home_Preview.svg"
                    alt="Home Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/FitMedicine_Feature.svg"
                    alt="FitMedicine Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/FitCode_Feature.svg"
                    alt="FitCode Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="https://fitaja.id/assets/icons/FitMe_Feature.svg"
                    alt="FitMe Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-transparent">
                <div className="bg-transparent flex justify-center mt-2 overflow-hidden duration-1000 swiper-slide">
                  <img
                    className="max-w-[245px] h-[400px] mb-2 md:mb-1 md:w-[245px] md:h-[500px]"
                    src="/preview.png"
                    alt="FitInsurance Feature Preview"
                  ></img>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="flex pt-6 pb-8 items-center justify-center w-full"
        >
          <a
            href="https://myqrcode.mobi/2fe2e6f0"
            target="_blank"
            className="px-10 py-2 text-base mx-auto font-semibold text-center transition-all duration-300 bg-white border text-primary-200 rounded-3xl border-primary-200 hover:bg-primary-200 hover:text-white"
          >
            Download Sekarang!
          </a>
        </div>
      </section>
    </>
  );
}
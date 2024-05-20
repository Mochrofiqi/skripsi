import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiper.css';
import '../../index.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Visi() {
  return (
    <>
      <section className='h-50 m-5 mb-8'>
        <div className="rounded-3xl h-full p-6 mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-primary-500 overflow-hidden">
          <div className="flex flex-col h-full items-center justify-center mx-auto lg:w-full lg:h-full">
            <img src='/visi.png' className='w-14 py-3'></img>
            <h1 className="mb-1 text-2xl font-semibold text-primary-100 md:text-3xl xl:text-4xl 2xl:text-4xl">
              Visi
            </h1>
            <p className="w-2/3 my-2 text-lg font-medium text-center text-gray-500 lg:text-2xl xl:text-xl">
              Menjadi mitra utama dalam layanan kesehatan digital di Indonesia.
            </p>
          </div>
        </div>
      </section>
      <section className='h-50 m-5 mb-8'>
        <div className="rounded-3xl h-full p-6 mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-primary-500 overflow-hidden">
          <div className="flex flex-col items-center justify-center mx-auto lg:w-full lg:h-full">
          <img src='/misi.png' className='w-14 py-2'></img>
            <h1 className="mb-2 mt-1 text-2xl font-semibold text-primary-100 md:text-3xl xl:text-4xl 2xl:text-4xl">
              Misi
            </h1>
            <p className="w-full text-lg font-medium text-center text-gray-500 lg:text-2xl xl:text-xl">
              Menyediakan layanan kesehatan digital yang terintegrasi, nyaman dan terjangkau.
            </p>
            <p className="w-full text-lg font-medium text-center text-gray-500 lg:text-2xl xl:text-xl">
              Pemerataan layanan kesehatan yang terstandarisasi serta meningkatkan efisiensi dalam
              Industri Kesehatan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

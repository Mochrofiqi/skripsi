// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/swiper.css';
import '../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    return (
        <div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]} 
            className="mySwiper"
        >
          <SwiperSlide className='bg-transparent swiper-wrapper'>
                <img src="/banner.jpg" alt="Banner 3" />
            </SwiperSlide>
            <SwiperSlide className='bg-transparent swiper-wrapper'>
                <img src="/banner4.png" alt="Banner 1" />
            </SwiperSlide>
            <SwiperSlide className='bg-transparent swiper-wrapper'>
                <img src="/banner3.png" alt="Banner 2" />
            </SwiperSlide>
        </Swiper>
    </div>
    );
}

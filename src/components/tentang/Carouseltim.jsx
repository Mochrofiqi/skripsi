import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Carouseltim() {
    return (
        <div className='fitur my-12'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1} 
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper aspect-video w-full rounded-3xl bg-black"
                style={{ height: '680px' }}
            >
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/tim/3.png' alt="Carousel Image 1" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/tim/1.png' alt="Carousel Image 2" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/tim/2.png' alt="Carousel Image 3" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/tim/5.png' alt="Carousel Image 3" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='h-full w-full'>
                        <img className='rounded-3xl' src='/tim/4.png' alt="Carousel Image 4" />
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

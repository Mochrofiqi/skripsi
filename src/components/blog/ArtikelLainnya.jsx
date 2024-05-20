import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiper.css';
import '../../index.css';
import { Link } from 'react-router-dom';

const ArtikelLainnya = () => {
    return (
        <div className='mb-8'>
            <h1 data-aos="fade-up" data-aos-delay="250" className="text-3xl font-semibold px-20 pt-4">
                Berita Lainnya
            </h1>
            <Swiper slidesPerView={4} spaceBetween={20} className="mySwiperSlide px-24 py-8">
                <SwiperSlide>
                    <Link to={'/merangkul'} className="relative flex items-center justify-center swiper-slide px-4">
                        <a className="flex items-center justify-center w-full py-2">
                            <article className="w-10/12 max-w-xs md:w-[240px] lg:w-[240px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[52px] h-2/5 rounded-br-[52px] rounded-bl-xl rounded-tr-xl" src="/berita/merangkul.png" alt="Thumbnail"></img>
                                <p className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">29 Agustus 2023</p>
                                <div className="flex items-center justify-center h-auto">
                                    <h1 className="text-base font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">Merangkul KlikDokter, FitAja! Kini Melayani Live Chat..</h1>
                                </div>
                                <div className="flex h-auto">
                                    <p className="text-sm text-left font-roboto text-neutral-300 lg:block">
                                        Jakarta (29 Agustus 2023) – FitAja! sebagai platform digital healthcare dibawah naungan Mandiri Inhealth..
                                    </p>
                                </div>
                            </article>
                        </a>
                        </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/perkuat'} className="relative flex items-center justify-center swiper-slide px-4">
                        <a className="flex items-center justify-center w-full py-2">
                            <article className="w-10/12 max-w-xs md:w-[240px] lg:w-[240px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[52px] h-2/5 rounded-br-[52px] rounded-bl-xl rounded-tr-xl" src="/berita/perkuat.png" alt="Thumbnail"></img>
                                <p className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">
                                    30 Agustus 2023</p>
                                <div className="flex items-center justify-center h-auto">
                                    <h1 className="text-base font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                        Perkuat Ekosistem Kesehatan Digital, API NAHSehat diintegrasi..
                                    </h1>
                                </div>
                                <div className="flex h-auto">
                                    <p className="text-sm text-left font-roboto text-neutral-300 lg:block">
                                        Jakarta (30 Agustus 2023) – FitAja! sebagai platform digital healthcare dibawah naungan Mandiri Inhealth (MI)..
                                    </p>
                                </div>
                            </article>
                        </a>
                        </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/tampil-beda'} className="relative flex items-center justify-center swiper-slide px-4">
                        <a className="flex items-center justify-center w-full py-2">
                            <article className="w-10/12 max-w-xs md:w-[240px] lg:w-[240px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[52px] h-2/5 rounded-br-[52px] rounded-bl-xl rounded-tr-xl" src="/berita/tampil-beda.png" alt="Thumbnail"></img>
                                <p className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">02 September 2023</p>
                                <div className="flex items-center justify-center h-auto">
                                    <h1 className="text-base font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">Tampil Beda, Fitnity Tampil Lebih Ciamik Pakai Batik..</h1>
                                </div>
                                <div className="flex h-auto">
                                    <p className="text-sm text-left font-roboto text-neutral-300 lg:block">
                                        Sebuah pemandangan baru di kantor FitAja!, semua karyawan kompak memakai baju Batik dalam rangka peringatan Hari Batik..
                                    </p>
                                </div>
                            </article>
                        </a>
                        </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/hadiri'} className='relative flex items-center justify-center swiper-slide px-4'>
                        <a className="flex items-center justify-center w-full py-2">
                            <article className="w-10/12 max-w-xs md:w-[240px] lg:w-[240px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[52px] h-2/5 rounded-br-[52px] rounded-bl-xl rounded-tr-xl" src="/berita/hadiri.png" alt="Thumbnail"></img>
                                <p className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">13 September 2023</p>
                                <div className="flex items-center justify-center h-auto">
                                    <h1 className="text-base font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200"> Hadiri HUB.ID Partner Day x Nex-BE Fest 2023, FitAja! Siap Berkolaborasi...</h1>
                                </div>
                                <div className="flex h-auto">
                                    <p className="text-sm text-left font-roboto text-neutral-300 lg:block">
                                    FitAja! menghadiri acara HUB.ID Partner Day x Nex-BE Fest 2023, tanggal 13-14 September di Nusa Dua Bali...
                                    </p>
                                </div>
                            </article>
                        </a>
                        </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ArtikelLainnya
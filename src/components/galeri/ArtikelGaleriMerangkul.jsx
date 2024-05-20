import React from 'react';
import { Link } from 'react-router-dom';

const ArtikelGaleriMerangkul = () => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="500"
                className="flex lg:gap-28 lg:justify-center lg:items-center swiper-wrapper">
                <div className="relative bg-transparent flex items-center justify-center w-fit">
                <Link to={'/galeri-merangkul'}>
                    <a className="flex items-center justify-center w-full py-2">
                        <article className="w-11/12 py-6 px-8 gap-2 rounded-2xl flex flex-col group items-center justify-between hover:ring-2 hover:ring-primary-200 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                            <img className="w-full aspect-video object-cover rounded-tl-[64px] h-3/5 rounded-br-[64px] rounded-bl-xl rounded-tr-xl"
                                src="/berita/merangkul.png"></img>
                            <h1
                                className="text-lg pt-2 font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                    Merangkul Klik Dokter FitAja!
                            </h1>
                        </article>
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArtikelGaleriMerangkul
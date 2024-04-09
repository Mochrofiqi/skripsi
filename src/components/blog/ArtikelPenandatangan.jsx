import React from 'react';
import { Link } from 'react-router-dom';

function ArtikelPenandatanganan() {
    return (
        <>
            <section id="container" className="w-full lg:py-2.5 flex-col items-center gap-12 flex">
                <div className="w-full flex-col justify-center items-center gap-2.5 flex">
                    <div className="relative bg-transparent flex items-center justify-center w-fit swiper-slide">
                        <Link to={'/penandatanganan'}>
                        <a className="flex items-center justify-center w-full py-2">
                            <article className="w-10/12 max-w-[640px] max-h-[520px] h-auto md:w-[640px] lg:w-[640px] xl:w-80 flex flex-col group items-center justify-between py-6 px-8 gap-2 rounded-2xl hover:ring-2 hover:ring-primary-200 bg-white  shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]">
                                <img className="w-full aspect-video object-cover rounded-tl-[64px] h-2/5 rounded-br-[64px] rounded-bl-xl rounded-tr-xl"
                                     src="https://demo.fitaja.id//storage/articles/2q4TPULtmmfcKRrhBrb2IWoSlgZiBgOkcP3iLSot.png"></img>
                                <p className="self-start text-sm font-semibold text-left text-neutral-200 font-roboto group-hover:underline group-hover:text-primary-200">
                                    13 Oktober 2023    
                                </p>
                                <div className="flex items-center justify-center h-24">
                                    <h1 className="text-[17px] font-bold text-center break-words text-neutral-200 group-hover:underline group-hover:text-primary-200">
                                    Penandatangan MoU FitAja x IFG Life: Buka Akses Produk Asuransi IFG Life di FitAja!
                                    </h1>
                                </div>
                                <div className="flex h-2/5">
                                    <p className="hidden text-base text-left font-roboto text-neutral-300 lg:block">
                                    FitAja! bersama IFG Life berkolaborasi untuk melihat potensi masing-masing pihak dalam upaya meningkatkan akses layanan..
                                    </p>
                                </div>
                            </article>
                        </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArtikelPenandatanganan;

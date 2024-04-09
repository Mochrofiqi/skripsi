import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import Komentar from './Komentar';

const Penandatanganan = () => {
    return (
        <>
            <NavBar />
            <div className='mt-12 flex relative'>
            <Link to={'/news'}>
                    <img src='/public/arrow.png' className='w-16 absolute top-0 left-0 mt-24 ml-24 transition duration-300 filter hover:brightness-75 hover:tint-primary-100'></img>
                </Link>
            <section id="container" className="w-full lg:py-2.5 flex-col items-center gap-12 flex ">
                <div className="w-full pt-8 sm:pt-10 lg:pt-8 flex-col justify-center items-center gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-3.5 flex md:w-2/3 w-full px-[30px] md:px-0">
                        <div className="self-stretch  lg:py-6  flex-col justify-start items-start gap-2.5 flex text-neutral-100">
                            <h1 className="self-stretch text-[42px] break-words font-semibold leading-6 lg:leading-[62.40px]">
                            Penandatangan MoU FitAja x IFG Life: Buka Akses Produk Asuransi IFG Life di FitAja!
                            </h1>
                            <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                Layanan
                            </div>
                            <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                                13 Oktober 2023
                            </div>
                            <div class="w-full pt-4">
                                <div class="aspect-video">
                                    <div class="flex justify-center w-full h-full">
                                        <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/2q4TPULtmmfcKRrhBrb2IWoSlgZiBgOkcP3iLSot.png"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{ justifySelf: 'end' }}>
                                <a
                                    className="px-8 py-2 my-5 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                >
                                    Lihat Lebih Banyak
                                </a>
                            </div>

                            <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                    style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                    <p>FitAja! bersama IFG Life berkolaborasi untuk melihat potensi masing-masing pihak dalam upaya meningkatkan akses layanan kesehatan melalui aplikasi FitAja!. Kolaborasi ini diresmikan dengan penandatanganan MoU (Memorandum of Understanding) pada Jum’at, 13 Oktober 2023 di kantor IFG Life Graha CIMB Niaga, Jakarta sebagai bentuk komitmen para pihak yang disambut dengan antusias dan optimis.
                                    </p><p><br></br></p><p>Dengan adanya kolaborasi ini diharapkan akses terhadap layanan kesehatan khususunya produk proteksi kesehatan yang berkualitas dapat diperoleh dengan mudah oleh masyarakat. Adanya kemudahan dalam akses layanan kesehatan ini, bertujuan untuk meningkatkan kesadaran masyarakat terhadap pentingnya memiliki jaminan proteksi kesehatan. “ Saya senang bisa berkolaborasi dengan FitAja!, dan sangat berharap agar kita bisa sama-sama maju dan memiliki inisiatif-inisiatif baru lagi kedepannya” Ujar CEO IFG Life, Bapak Harjanto Tanuwidjaja dalam sambutannya.
                                    </p><p><br></br></p><p>Harapan tersebut disambut hangat oleh Bapak Irfan Yunus Muluk CEO FitAja! “Kami melihat potensi IFG Life yang sangat luar biasa. IFG Life memiliki produk-produk asuransi yang inovatif dan kompetitif, sehingga bersama FitAja! kami yakin bahwa kolaborasi ini dapat memberikan keuntungan bagi semua pihak. Bagi IFG sendiri, kolaborasi ini menambah channel baru dalam pemasaran produknya, dan semoga kedepannya nasabah IFG dapat merasakan manfaat kemudahan FitAja! dalam mengakses benefit asuransinya”.
                                    </p><p><br></br></p><p>Kolaborasi ini adalah adalah salah satu langkah konkrit FitAja! untuk menjadi mitra utama dalam layanan kesehatan digital di Indonesia.
                                    </p><p><br></br></p><p>#AlwaysOnFitAja!</p><p><br></br></p><p>#FitAjaUntukIndonesia</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Komentar/>
        <ArtikelLainnya/>
        <Footer/>
        </>
    )
}

export default Penandatanganan;

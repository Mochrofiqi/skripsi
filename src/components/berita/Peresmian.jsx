import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import Komentar from './Komentar';
import Bagikan from '../Bagikan';

const Peresmian = () => {
    return (
        <>
            <NavBar />
            <div className='flex relative'>
            <Link to={'/news'}>
                    <img src='/arrow.png' className='w-16 absolute top-0 left-0 mt-24 ml-24 transition duration-300 filter hover:brightness-75 hover:tint-primary-100'></img>
                </Link>
            <section id="container" className="w-full lg:py-2.5 flex-col items-center gap-12 flex ">
                <div className="w-full pt-8 sm:pt-10 lg:pt-8 flex-col justify-center items-center gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-3.5 flex md:w-2/3 w-full px-[30px] md:px-0">
                        <div className="self-stretch  lg:py-6  flex-col justify-start items-start gap-2.5 flex text-neutral-100">
                            <h1 className="self-stretch text-[42px] break-words font-semibold leading-6 lg:leading-[62.40px]">
                                Peresmian Kerja Sama FitAja! x KlikDokter, Awal Menuju Indonesia Sehat
                            </h1>
                            <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                Bisnis
                            </div>
                            <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                                07 September 2023
                            </div>
                            <div class="w-full pt-4">
                                <div class="aspect-video">
                                    <div class="flex justify-center w-full h-full">
                                        <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/bm8cyed9oXD6F7acqBUD2rhWO0ZVIWHl5aUn4C2F.png"/>
                                    </div>
                                </div>
                            </div>
                            <Bagikan/>

                            <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                    style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                    <p>Telah diselenggarakan acara peresmian kerja sama antara FitAja! dengan KlikDokter, Rabu, 27 September 2023 di kantor KlikDokter Pulomas. Acara ini dihadiri oleh jajaran direksi Mandiri Inhealth , jajaran Direksi FitAja!, Presiden Direktur Kalbe Farma dan CEO KlikDokter.
                                    </p><p><br></br></p><p>Pada acara peresmian ini disampaikan bahwa lebih dari 15.000 dokter umum, dokter spesialis, bidan, dan para ahli kesehatan yang telah tergabung dan bekerja sama dengan KlikDokter akan dapat diakses melalui layanan Live Chat Telekonsultasi pada aplikasi FitAja! (FitTele) selama 24 jam setiap harinya. Seperti halnya konsultasi dengan dokter secara langsung, pada layanan ini pengguna juga akan mendapatkan e-resep dari dokter sesuai dengan indikasi medis.
                                    </p><p><br></br></p><p>Hendra Tjong selaku CEO KlikDokter menyampaikan bahwa “sesegera mungkin kita dapat melakukan penebusan obat secara online. KlikDokter akan terintegrasi dengan 1.247 apotek Kimia Farma di Indonesia, sehingga setiap orang yang menggunakan FitAja! dan konsultasi menggunakan KlikDokter, dapat melakukan penebusan obat secara online di apotek Kimia Farma”.
                                    </p><p><br></br></p><p>Vidjongtius Presiden Direktur Kalbe Farma sebagai Perusahaan Induk KlikDokter menyampaikan dukungannya atas kolaborasi yang dijalin antara FitAja! dan KlikDokter “Terima kasih atas kerja samanya, kita akan kawal, kita akan jaga, dan kita akan tingkatkan agar dapat memberikan pelayanan kesehatan terbaik bagi Indonesia”.
                                    </p><p><br></br></p><p>Dari pihak FitAja! dan Mandiri Inhealth, Bugi Riagandhy selaku Direksi Mandiri Inhealth sekaligus komisaris FitAja! menyampaikan harapannya “Ini merupakan sinergi yang sangat baik. Semoga kerja sama ini bisa berjalan dengan lancar dan semakin mendekatkan langkah kita menuju Indonesia sehat”. (DR)</p>
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

export default Peresmian;

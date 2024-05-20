import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import Komentar from './Komentar';
import Bagikan from '../Bagikan';

const Merangkul = () => {
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
                            Merangkul KlikDokter, FitAja! Kini Melayani Live Chat Telekomunikasi
                            </h1>
                            <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                Layanan
                            </div>
                            <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                               29 Agustus 2023
                            </div>
                            <div class="w-full pt-4">
                                <div class="aspect-video">
                                    <div class="flex justify-center w-full h-full">
                                        <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/rTuddqFOlzxnjY0IUHKPRSSg84nIG17SEiHw9laF.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <Bagikan/>

                            <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                    style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                    <p><strong>Jakarta (29 Agustus 2023)</strong> – FitAja! sebagai platform digital healthcare dibawah naungan Mandiri Inhealth (MI), Metra Digital Investama (MDI) dan Mandiri Capital Indonesia (MCI) terus bertumbuh dan memperbaiki kualitas layanan bagi penggunanya. FitAja! akan menghadirkan layanan Live Chat Telekonsultasi dokter umum dan dokter spesialias dengan bekerja sama dengan Klik Dokter yang didukung lebih dari 10.000 dokter umum, dokter spesialis, bidan dan ahli Kesehatan yang siap melayani selama 24 jam serta layanan e-resep oleh dokter sesuai dengan indikasi medis.
                                    </p><p><br></br></p><p>Penandatanganan Perjanjian Kerja Sama (PKS) antara PT FitAja Digital Nusantara dan KlikDokter ini dilakukan pada 28 Agustus 2023 oleh Bapak Irfan Yunus Muluk selaku Direktur Utama FitAja! dan Bapak Hendra Heryanto selaku Presiden Direktur KlikDokter dan bertempat di kantor Klik Dokter, BSD Tangerang dan dihadiri juga oleh Direktur Teknis FitAja! Bapak Sigit Hadi Prayoga serta beberapa pejabat dilingkungan FitAja! dan Klik Dokter.
                                    </p><p><br></br></p><p>Irfan Yunus Muluk selaku Direktur Utama FitAja! mengatakan, “Semoga kerjasama ini bisa melampaui harapan dari seluruh stake holder terutama memberikan kenyamanan bagi semua pengguna platform FitAja!”. Sebagai pilot project, saat ini fitur Live Chat Telekonsultasi ini baru dapat dinikmati oleh nasabah Mandiri Inhealth dari Badan Usaha Kalbe Group. Ini menjadi salah satu momentum bagi FitAja! dalam mewujudkan visinya yaitu Menjadi mitra utama dalam layanan kesehatan digital di Indonesia. (DC)</p>
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

export default Merangkul;

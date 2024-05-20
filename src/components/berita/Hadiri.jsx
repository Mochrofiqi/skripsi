import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import { Link } from 'react-router-dom';
import Komentar from './Komentar';
import Bagikan from '../Bagikan';

const Hadiri = () => {
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
                            Hadiri HUB.ID Partner Day x Nex-BE Fest 2023, FitAja! Siap Berkolaborasi
                            </h1>
                            <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                Bisnis
                            </div>
                            <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                                13 September 2023
                            </div>
                            <div class="w-full pt-4">
                                <div class="aspect-video">
                                    <div class="flex justify-center w-full h-full">
                                        <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/ZCpNwq17pIZLZZro7xk8KuRMrlqIamJMlAToXfUI.png"/>
                                    </div>
                                </div>
                            </div>
                            <Bagikan/>

                            <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                    style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                    <p>FitAja! menghadiri acara HUB.ID Partner Day x Nex-BE Fest 2023, tanggal 13-14 September di Nusa Dua Bali. Acara bergengsi yang merupakan hasil kolaborasi antara Kementrian Komunikasi dan Informatika dengan MDI Ventures sebagai bentuk dukungan untuk mencapai pertumbuhan ekonomi digital Indonesia yang lebih baik.
                                    </p><p><br></br></p><p>Sesuai dengan tujuannya, acara ini mengusung tema “Fostering Synergy Networks for Stronger Digital Economic Growth”. Mempertemukan startup dan mitra bisnis dari berbagai sektor, diantaranya: BUMN, Perusahaan Swasta, Pemerintah Pusat dan Daerah, serta Universitas. Setiap rangkaian acara dikonsepkan dengan baik sehingga dapat menjadi ruang interaktif bagi seluruh pesertanya melalui 3 agenda utama, yaitu: Panel Discussion, Business Matchmaking, dan Gala Dinner &amp; Awarding Night.
                                    </p><p><br></br></p><p>Dalam 3 agenda tersebut peserta dapat melakukan diskusi secara langsung, membangun koneksi, dan pada akhirnya menjadi peluang bagi startup untuk menjalin kerja sama dengan mitra bisnis yang hadir, tidak terkecuali peluang untuk FitAja!.
                                    </p><p><br></br></p><p>Setelah mengikuti acara ini, FitAja! semakin siap menyambut hangat kolaborasi dengan berbagai mitra bisnis yang sejalan dengan visi FitAja! yaitu, menjadi mitra utama dalam layanan kesehatan digital di Indonesia. (DR)</p>
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

export default Hadiri;

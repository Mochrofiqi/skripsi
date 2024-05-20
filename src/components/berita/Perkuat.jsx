import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import Komentar from './Komentar';
import Bagikan from '../Bagikan';

const Perkuat = () => {
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
                                    Perkuat Ekosistem Kesehatan Digital, API NAH Sehat diintegrasi
                                </h1>
                                <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                    Bisnis
                                </div>
                                <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                                    30 Agustus 2023
                                </div>
                                <div class="w-full pt-4">
                                    <div class="aspect-video">
                                        <div class="flex justify-center w-full h-full">
                                            <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/gsW9jiDqw5qTLHeJlQYZuXM9c1rTN5sP0oNEhjUc.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <Bagikan/>

                                <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                    <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                        style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                        <p><strong>Jakarta (30 Agustus 2023)</strong><span></span>– FitAja! sebagai platform digital healthcare superapp di bawah naungan Mandiri Inhealth (MI), Metra Digital Investama (MDI) dan Mandiri Capital Indonesia (MCI) terus bertumbuh dan berkolaborasi untuk menciptakan inovasi guna membangun ekosistem kesehatan digital di Indonesia.
                                        </p><p><br></br></p><p>Kali ini FitAja! berkolaborasi dengan PT. Administrasi Medika (AdMedika) – Telkom Indonesia Group yang merupakan salah satu penyedia jasa Third Party Administration (TPA) terbesar di Indonesia dalam bentuk penyediaan layanan application programming interface (API) NAHSehat.
                                        </p><p><br></br></p><p>Kolaborasi tersebut telah disepakati dan diresmikan dalam penandatanganan oleh Direktur Utama FitAja!, Irfan Yunus Muluk dan Direktur Utama AdMedika, Dwi Sulistiani pada tanggal 30 Agustus 2023 bertempat di Gedung Telkom STO Gambir Jakarta. Dihadiri pula oleh jajaran direksi dan pejabat senior dari kedua perusahaan di antaranya, Muhammad Nasrun Ihsan, Direktur Marketing &amp; Bisnis AdMedika, Ace, Direktur Keuangan &amp; Manajemen AdMedika, serta jajaran direksi dan pejabat senior FitAja! di antaranya Sigit Hadi Prayoga , CTO FitAja!, Danang Rizki Ginanjar SEVP FitAja! dan Marsudi Maming , VP Partnership &amp; Business Development FitAja!.
                                        </p><p><br></br></p><p>Irfan Yunus Muluk dalam sambutannya mengungkapkan terima kasih atas dukungan AdMedika, “Perjanjian kerja sama ini adalah bukti nyata dari komitmen antara FitAja! &amp; AdMedika dalam mendukung inisiasi kementerian BUMN melalui program integrasi pengelolaan ekosistem digital healthcare BUMN” imbuhnya.
                                        </p><p><br></br></p><p>Pada kesempatan yang sama Dwi Sulistiani menyampaikan “Kolaborasi AdMedika dan FitAja! mencerminkan bentuk kesiapan menghadapi perubahan untuk ekosistem kesehatan yang terus bertumbuh.“ Ucap Dwi
                                        </p><p><br></br></p><p>Dengan berkolaborasinya FitAja! dan AdMedika, diharapkan kedepannya kedua perusahaan dapat terus menggali potensi dan bersinergi untuk membangun berbagai inovasi dalam bidang healthtech yang memberikan dampak baik bagi semua pihak, khususnya dalam memberikan kenyamanan dan kemudahan bagi seluruh pelanggan. (DC)</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Komentar/>
            <ArtikelLainnya/>
            <Footer />
        </>
    )
}

export default Perkuat;

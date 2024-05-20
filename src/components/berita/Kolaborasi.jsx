import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import Komentar from './Komentar';
import Bagikan from '../Bagikan';

const Kolaborasi = () => {
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
                                Kolaborasi Seru FitAja! dan MCI di Mandiri Karnaval 2023
                            </h1>
                            <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                Bisnis
                            </div>
                            <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                                08 Oktober 2023
                            </div>
                            <div class="w-full pt-4">
                                <div class="aspect-video">
                                    <div class="flex justify-center w-full h-full">
                                        <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/w01eaIEBqbpnFfOKfq2R6IYTOJklqqOFOVW7Vo16.png"/>
                                    </div>
                                </div>
                            </div>
                            <Bagikan/>


                            <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                    style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                    <p>Sebuah pemandangan baru di kantor FitAja!, semua karyawan kompak memakai baju Batik dalam rangka peringatan Hari Batik Nasional pada Senin, 2 Oktober 2023. Walaupun tidak ada kegiatan khusus untuk ini, namun semuanya antusias menyambut Hari Batik Nasional, dan tampil lebih percaya diri dengan memakai batik.</p>
                                    <p><br></br></p>
                                    <p>Seperti halnya yang dirasakan oleh Nabila Rahmah, salah satu karyawan yang terpilih sebagai pemenang Outfit Batik Terbaik di FitAja!, “Aku merasa bangga dan lebih percaya diri ketika memakai batik, merasa tampil lebih elegant” ungkap Nabila.</p>
                                    <p><br></br></p>
                                    <p>Selain itu, Nabila melihat bahwa batik itu flexible, bisa digunakan diberbagai kondisi, hanya perlu menyesuaikan model pakaian dan pattern batik nya. “Untuk acara kondangan aku biasanya pakai jenis batik yang sedikit glamour untuk memberi kesan mewah, formal, dan elegant. Untuk acara keluarga aku pakai batik dengan pattern yang lebih sederhana. Untuk hangout, aku biasanya memadukan obi belt batik dengan kemeja, jadi terlihat lebih fashionable, sedangkan di rumah aku biasanya pakai daster yang memiliki pattern batik, dan itu nyaman banget. Jadi, menurutku batik itu benar-benar sangat flexible” ungkapnya.</p>
                                    <p><br></br></p>
                                    <p>Hari batik ini menjadi salah satu moment spesial yang disambut hangat oleh rekan-rekan FitAja!, selain bertujuan untuk melestarikan warisan budaya, namun mereka juga antusias untuk bisa tampil lebih ciamik pakai batik. Semoga dengan adanya peringatan ini bisa membangkitkan kembali budaya batik di ranah Nasional maupun Internasional. (DR)</p>
                                    <p><br></br></p>
                                    <p>#BatikBangkit #CiamikPakaiBatik #AlwaysOnFitaja #FitajauntukIndonesia</p>
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

export default Kolaborasi;

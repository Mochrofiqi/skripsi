import { useState } from "react"
import PopupGaleri from './PopupGaleri'
import NavBar from "../NavBar";
import GaleriLainnya from "./GaleriLainnya";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const GaleriPeresmian= () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <NavBar/>
        <section id="container" className="w-full lg:py-2.5 relative flex-col items-center gap-12 flex">
                <Link to={'/news'}>
                    <img src='/arrow.png' className='w-16 absolute top-0 left-0 mt-36 ml-24 transition duration-300 filter hover:brightness-75 hover:tint-primary-100'></img>
                </Link>
                <div className="w-full p-4 flex-col justify-center items-center gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-3.5 flex md:w-2/3 w-full px-[30px] md:px-0">
                        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex text-neutral-100">
                            <h1 className="self-stretch font-semibold pb-1 m-auto text-[42px] break-words leading-6 lg:leading-[62.40px]">
                                Peresmian Kerja Sama FitAja! x KlikDokter
                            </h1>

                            <div class="w-4/5 m-auto py-4">
                                <div class="aspect-video">
                                    <div class="flex justify-center w-full h-full">
                                        <img class="object-contain rounded-2xl" src="/berita/peresmian.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="fade-up" data-aos-delay="500"
                className="grid grid-cols-1 px-28 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-[24px] md:mx-0 lg:mx-0">
                <div onClick={() => { setShowModal(true); }}
                    class="relative flex justify-center overflow-hidden bg-gray-400 aspect-video rounded-3xl">
                    <img class="object-contain w-full h-full" src="/berita/berkolaborasi.png"
                        alt="testing image" />
                    <div
                        class="h-full opacity-0 transition-all duration-300 absolute bottom-0 w-full flex p-2.5 bg-gradient-to-b from-primary-300 to-primary-100 rounded-3xl hover:opacity-75 justify-center items-center text-center text-white text-base md:text-xl lg:text-xl font-normal hover:cursor-pointer">
                        <p class="overflow-hidden text-center break-words">Penandatanganan surat kerja sama</p>
                    </div>
                </div>
                <div onClick={() => { setShowModal(true); }}
                    class="relative flex justify-center overflow-hidden bg-gray-400 aspect-video rounded-3xl">
                    <img class="object-contain w-full h-full" src="/berita/perkuat.png"
                        alt="testing image" />
                    <div
                        class="h-full opacity-0 transition-all duration-300 absolute bottom-0 w-full flex p-2.5 bg-gradient-to-b from-primary-300 to-primary-100 rounded-3xl hover:opacity-75 justify-center items-center text-center text-white text-base md:text-xl lg:text-xl font-normal hover:cursor-pointer">
                        <p class="overflow-hidden text-center break-words">Pemberian piagam penghargaan</p>
                    </div>
                </div> <div onClick={() => { setShowModal(true); }}
                    class="relative flex justify-center overflow-hidden bg-gray-400 aspect-video rounded-3xl">
                    <img class="object-contain w-full h-full" src="/berita/hadiri.png"
                        alt="testing image" />
                    <div
                        class="h-full opacity-0 transition-all duration-300 absolute bottom-0 w-full flex p-2.5 bg-gradient-to-b from-primary-300 to-primary-100 rounded-3xl hover:opacity-75 justify-center items-center text-center text-white text-base md:text-xl lg:text-xl font-normal hover:cursor-pointer">
                        <p class="overflow-hidden text-center break-words">Dokumentasi acara Partner Day</p>
                    </div>
                </div>
            </div>

            <PopupGaleri isShow={showModal} isHide={() => setShowModal(false)} />
            <GaleriLainnya/>
            <Footer/>
        </>
    )
}

export default GaleriPeresmian
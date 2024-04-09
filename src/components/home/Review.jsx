import { useState } from "react";
import PopUpReview from "./PopUpReview";
import PopUpReview1 from "./PopUpReview1";
import PopUpReview2 from "./PopUpReview2";

const Review = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden px-7 xl:px-[108px] 2xl:px-[140px] mb-6">
                <section className="box-content w-full py-6 overflow-hidden testimonySwipper md:w-11/12 lg:w-full lg:px-5">
                    <h1 data-aos="fade-up" data-aos-delay="250" className="mb-12 mt-24 text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
                        Review Aplikasi!
                    </h1>
                    <div data-aos="fade-up" data-aos-delay="500" className="flex lg:justify-center lg:items-center swiper-wrapper">
                        <div className="flex rounded-2xl gap-28 bg-transparent items-center justify-center w-fit swiper-slide mx-6">
                            <section className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center mx-auto rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                                <div className="grid items-center justify-center h-full grid-cols-1 mx-6">
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32 mt-2">
                                            <img
                                                className="object-cover w-full h-full md:h-64 lg:h-72 xl:h-80 rounded-full"
                                                src="/public/review3.jpg"
                                                alt="Review Image"
                                            />
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-semibold">Jhon Doe</h2>

                                    <p className="text-base text-bold flex justify-end items-center">
                                        4.8
                                        <div className="w-7 ml-1">
                                            <img src="/public/star.png" alt="Star" />
                                        </div>
                                    </p>

                                    <p className="text-sm">
                                        Aplikasi FitAja! sangat membantu saya dalam keperluan klaim biaya perawatan kesehatan. Melalui fitur FitClaim, saya tidak perlu repot-repot membawa dokumen fisik ke kantor cabang Asuransi saya. Tinggal..
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowModal(true);
                                        }}
                                        className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white"
                                    >
                                        <span className="text-xs font-semibold lg:text-base font-roboto">Selengkapnya</span>
                                    </button>
                                </div>
                            </section>
                            
                            <section className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center mx-auto rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                                <div className="grid items-center justify-center h-full grid-cols-1 mx-6">
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32 mt-2">
                                            <img
                                                className="object-cover w-full h-full md:h-64 lg:h-72 xl:h-80 rounded-full"
                                                src="/public/review.jpg"
                                                alt="Review Image"
                                            />
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-semibold">Christina Angel</h2>


                                    <p className="text-base text-bold flex justify-end items-center">
                                        4.7
                                        <div className="w-7 ml-1">
                                            <img src="/public/star.png" alt="Star" />
                                        </div>
                                    </p>

                                    <p className="text-sm">
                                    Saya sudah menggunakan aplikasi FitAja! sejak tahun 2021. Selama menggunakan aplikasi ini ada banyak manfaat yang saya rasakan. Fitur yang paling memudahkan bagi saya adalah fitur kartu digital dan juga..
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowModal1(true);
                                        }}
                                        className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white"
                                    >
                                        <span className="text-xs font-semibold lg:text-base font-roboto">Selengkapnya</span>
                                    </button>
                                </div>
                            </section>

                            <section className="items-center w-10/12 max-w-xs max-h-[520px] h-[400px] md:w-[280px] lg:h-[450px] lg:w-[280px] xl:w-80 justify-center mx-auto rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-gradient-to-t from-primary-200 via-primary-300 to-25% to-primary-500">
                                <div className="grid items-center justify-center h-full grid-cols-1 mx-6">
                                    {/* Konten Gambar */}
                                    <div className="flex justify-center">
                                        <div className="w-32 h-32 mt-2">
                                            <img
                                                className="object-cover w-full h-full md:h-64 lg:h-72 xl:h-80 rounded-full"
                                                src="/public/review2.jpg"
                                                alt="Review Image"
                                            />
                                        </div>
                                    </div>

                                    {/* Konten Judul */}
                                    <h2 className="text-xl font-semibold">Alexander Ibrahim</h2>


                                    {/* Konten Rating */}
                                    <p className="text-base text-bold flex justify-end items-center">
                                        4.9
                                        <div className="w-7 ml-1">
                                            <img src="/public/star.png" alt="Star" />
                                        </div>
                                    </p>

                                    {/* Konten Deskripsi */}
                                    <p className="text-sm">
                                    Aplikasi FitAja! sangat membantu saya dalam keperluan klaim biaya perawatan kesehatan. Melalui fitur FitClaim, saya tidak perlu repot-repot membawa dokumen fisik ke kantor cabang Asuransi saya. Tinggal..
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowModal2(true);
                                        }}
                                        className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white"
                                    >
                                        <span className="text-xs font-semibold lg:text-base font-roboto">Selengkapnya</span>
                                    </button>
                                </div>
                            </section>
                            
                        </div>
                    </div>
                </section>
            </div>
            <PopUpReview isShow={showModal} isHide={() => setShowModal(false)} />
            <PopUpReview1 isShow={showModal1} isHide={() => setShowModal1(false)} />
            <PopUpReview2 isShow={showModal2} isHide={() => setShowModal2(false)} />
        </>
    )
}

export default Review
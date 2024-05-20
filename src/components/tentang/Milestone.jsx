import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiper.css';
import '../../index.css';

// import required modules
import { Navigation } from 'swiper/modules';
import PopupMilestone from './PopupMilestone';
import PopupMilestone2 from './PopupMilestone2';

export default function Milestone() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    return (
        <>
            <section className='milestone mb-8'>
                <div className='m-5'>
                    <div className="rounded-3xl h-full p-8 w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_20px] bg-white overflow-hidden">
                        <h1 className="my-3 font-semibold text-center text-4xl text-primary-100">
                            Perjalanan FitAja!
                        </h1>

                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper px-8 py-2">
                            <SwiperSlide>
                                <div className="flex flex-col items-center justify-center mx-auto cursor-pointer swiperMilestoneYear">
                                    <h1 className="mx-auto pt-3 pb-5 font-bold text-5xl text-center text-secondary1-200 name">
                                        2021
                                    </h1>
                                    <div className="flex gap-8 mx-12">
                                        <div className='w-3/5'>
                                            <img className="rounded-2xl" src="/tim/milestone.jpg" alt="Image Milestone Cover" />
                                        </div>
                                        <div className="w-2/5 flex py-4 flex-col items-center justify-center justify-items-center my-auto mx-auto mt-5 place-items-center ql-editor">
                                            <p className="hidden mx-auto text-lg text-justify xl:block">
                                            Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di bidang ekosistem kesehatan, dan dilanjutkan dengan peluncuran aplikasi...
                                            </p>
                                            <a onClick={() => { setShowModal(true); }}
                                                data-modal="modal-2"
                                                className="px-8 py-1 text-base mx-auto my-5 font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                            >
                                                Selengkapnya
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center justify-center mx-auto cursor-pointer swiperMilestoneYear">
                                    <h1 className="mx-auto pt-3 pb-5 font-bold text-5xl text-center text-secondary1-200 name">
                                        2022
                                    </h1>
                                    <div className="flex gap-8 mx-12">
                                        <div className='w-3/5'>
                                            <img className="rounded-2xl" src="/tim/milestone2.png" alt="Image Milestone Cover" />
                                        </div>
                                        <div className="w-2/5 flex py-4 flex-col items-center justify-center justify-items-center my-auto mx-auto mt-5 place-items-center ql-editor">
                                            <p className="hidden mx-auto text-lg text-justify xl:block">
                                                Penandatanganan akta pendirian FDN PT FitAja Digital Nusantara resmi memiliki entitas sendiri dengan ditandatanganinya Akta Pendirian PT FitAja Digital Nusantara oleh para pemegang saham yaitu Mandiri Group terdiri dari Mandiri...
                                            </p>
                                            <a onClick={() => { setShowModal2(true); }}
                                                data-modal="modal-2"
                                                className="px-8 py-1 my-5 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                                            >
                                                Selengkapnya
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <PopupMilestone  isShow={showModal} isHide={() => setShowModal(false)} />
            <PopupMilestone2 isShow={showModal2} isHide={() => setShowModal2(false)} />
        </>
    );
}

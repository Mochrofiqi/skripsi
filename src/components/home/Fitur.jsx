import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/swiper.css';
import '../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Fitur() {
    return (
        <div className='fitur'>

            <div className="judul">
                <h2 className="text-center m-auto p-4 font-semibold md:text-3xl xl:text-4xl">
                    Fitur Unggulan!
                </h2>
            </div>
            <Swiper
                loop={true}
                spaceBetween={10}
                centeredSlides={true}
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        // spaceBetween: 20, // Sesuaikan jarak di sini jika diperlukan
                    },
                    768: {
                        slidesPerView: 1,
                        // spaceBetween: 15, // Sesuaikan jarak di sini jika diperlukan
                    },
                    1080: {
                        slidesPerView: 1,
                        // spaceBetween: 10, // Sesuaikan jarak di sini jika diperlukan
                    },
                    1280: {
                        slidesPerView: 1.5,
                        // spaceBetween: 5, // Sesuaikan jarak di sini jika diperlukan
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-transparent swiper-wrapper'>
                    <div className="flex items-center justify-center m-12">
                        <div className="w-full p-12 h-full rounded-2xl shadow-xl" style={{ backgroundImage: `url('/bg.png')` }}>
                            <img src='/FitTele.svg' alt="Content Image" className="max-w-28 object-cover mb-4 rounded-md m-auto" />
                            <h2 className="text-2xl font-semibold font-roboto mb-2">Fitur Tele</h2>
                            <p className="text-gray-700 mx-20">Konsultasi kesehatan online dengan akses yang mudah dan nyaman. Lebih hemat waktu dan biaya.</p>
                            <button
                                className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white">
                                <Link to={'/fitur'} className="text-xs font-semibold lg:text-base font-roboto">Lihat lebih lanjut
                                </Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent'>
                    <div className="flex items-center justify-center m-12 ">
                        <div className="w-full p-12 h-full rounded-2xl shadow-x" style={{ backgroundImage: `url('/bg.png')` }}>
                            <img src='/FitMedicine.svg' alt="Content Image" className="max-w-28 object-cover mb-4 rounded-md m-auto" />
                            <h2 className="text-2xl font-semibold mb-2">Fitur Medicine</h2>
                            <p className="text-gray-700 mx-28">Cek info obat, unduh eResep, hingga layanan pesan antar obat. Semua bisa kamu akses di sini.</p>
                            <button
                                className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white">
                                <Link to={'/fitur'} className="text-xs font-semibold lg:text-base font-roboto">Lihat lebih lanjut
                                </Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent'>
                    <div className="flex items-center justify-center m-12 ">
                        <div className="w-full p-12 h-full rounded-2xl shadow-xl" style={{ backgroundImage: `url('/bg.png')` }}>
                            <img src='/FitCode.svg' alt="Content Image" className="max-w-28 object-cover mb-4 rounded-md m-auto" />
                            <h2 className="text-2xl font-semibold mb-2">Fitur Code</h2>
                            <p className="text-gray-700 mx-32">Dapat melakukan pengajuan klaim lebih mudah dan praktis, bisa pantau status klaim secara berkala.</p>
                            <button
                                className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white">
                                <Link to={'/fitur'} className="text-xs font-semibold lg:text-base font-roboto">Lihat lebih lanjut
                                </Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent'>
                    <div className="flex items-center justify-center m-12 ">
                        <div className="w-full p-12 h-full rounded-2xl shadow-xl" style={{ backgroundImage: `url('/bg.png')` }}>
                            <img src='/FitClaim.svg' alt="Content Image" className="max-w-28 object-cover mb-4 rounded-md m-auto" />
                            <h2 className="text-2xl font-semibold mb-2">Fitur Claim</h2>
                            <p className="text-gray-700 mx-32">Solusi daftar fasilitas kesehatan lebih cepat dan data akurat. Scan Barcode, tunggu nomor atrean.</p>
                            <button
                                className="m-auto flex items-center justify-center transition-all duration-300 bg-white border lg:mt-4 lg:px-8 lg:py-1 rounded-2xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white">
                                <Link to={'/fitur'} className="text-xs font-semibold lg:text-base font-roboto">Lihat lebih lanjut
                                </Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

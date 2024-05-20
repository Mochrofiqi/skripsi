import ArtikelBerkolaborasi from "../blog/ArtikelBerkolaborasi";
import ArtikelKolaborasi from "../blog/ArtikelKolaborasi";
import ArtikelPenandatanganan from "../blog/ArtikelPenandatangan";
import { Link } from "react-router-dom";

const Cerita = () => {
    return (
        <>
            <div
                className="relative flex flex-col items-center justify-center w-full overflow-hidden px-7 lg:px-[76px] xl:px-[108px] 2xl:px-[140px] mb-6">
                <section
                    className="testimonySwipper w-full md:w-11/12 min-[840px]:w-10/12 lg:w-full overflow-hidden lg:px-5 py-6 box-content">
                    <h1 data-aos="fade-up" data-aos-delay="250"
                        className="mt-8 mb-8 text-2xl font-semibold text-center md:text-3xl lg:text-4xl">Kumpulan Cerita</h1>
                    <div data-aos="fade-up" data-aos-delay="500"
                        className="flex lg:gap-16 lg:justify-center lg:items-center swiper-wrapper">
                        <ArtikelBerkolaborasi />
                        <ArtikelPenandatanganan />
                        <ArtikelKolaborasi />
                    </div>
                </section>
                <Link to={'/news'}
                    className="px-8 py-2 mx-auto mt-4 mb-8 text-base font-semibold transition-all duration-300 border rounded-full sm:px-10 show-modal text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white hover:cursor-pointer"
                >
                    <a
                        data-modal="modal-2"
                    >
                        Lihat Lebih Banyak
                    </a>
                </Link>
            </div>

        </>
    )
}

export default Cerita
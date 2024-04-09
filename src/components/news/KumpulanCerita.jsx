import ArtikelBerkolaborasi from "../blog/ArtikelBerkolaborasi";
import ArtikelHadiri from "../blog/ArtikelHadiri";
import ArtikelKolaborasi from "../blog/ArtikelKolaborasi";
import ArtikelMerangkul from "../blog/ArtikelMerangkul";
import ArtikelPenandatanganan from "../blog/ArtikelPenandatangan";
import ArtikelPeresmian from "../blog/ArtikelPeresmian";
import ArtikelPerkuat from "../blog/ArtikelPerkuat";
import ArtikelTampilBeda from "../blog/ArtikelTampilBeda";
import Sorotan from "./Sorotan";
import SorotanGaleri from "./SorotanGaleri";
import SorotanVideo from "./SorotanVideo";

const KumpulanCerita = () => {
  return (
    <>
      <Sorotan />
      <div className="flex items-center justify-between w-4/5 mx-auto gap-8">
      </div>

      {/* <div className="relative flex flex-col items-center justify-center w-full overflow-hidden px-7 lg:px-[76px] xl:px-[108px] 2xl:px-[140px] mb-6">
        <section className="testimonySwipper w-full md:w-11/12 min-[840px]:w-10/12 lg:w-full overflow-hidden lg:px-5 box-content">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex lg:gap-16 lg:justify-center lg:items-center swiper-wrapper"
          >
            <ArtikelHadiri />
            <ArtikelKolaborasi />
            <ArtikelTampilBeda />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex lg:gap-16 lg:justify-center lg:items-center swiper-wrapper"
          >
            <ArtikelPeresmian />
            <ArtikelPerkuat />
            <ArtikelMerangkul />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex lg:gap-16 text-left lg:justify-center lg:items-center swiper-wrapper"
          >
            <ArtikelPenandatanganan />
            <ArtikelBerkolaborasi />
          </div>
        </section>
      </div> */}
    </>
  );
};

export default KumpulanCerita;
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fitur from "../components/Fitur";
import Partner from "../components/Partner";
import Partner2 from "../components/Partner2";
import Review from "../components/Review";
import Preview from "../components/Preview";
import Cerita from "../components/Cerita";

function Home() {
  return (
    <>
      <NavBar />
      <div>
        <img src="/public/banner.jpg"></img>
      </div>

      <div className="flex m-20">
        <div className="w-1/2">
          <img src="/public/banner.jpg" alt="Banner Image" className="w-full"></img>
        </div>

        <div className="m-8">

        </div>
        <section className="flex flex-col items-center justify-center w-1/2">
          <h2
            data-aos="fade-up"
            data-aos-delay="500"
            className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-4xl"
          >
            Layanan Kesehatan Digital Terintegrasi untuk Indonesia Sehat
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="750"
            className="text-lg text-justify xl:text-xl font-roboto"
          >
            Sebagai <i>platform SuperApp</i> kesehatan digital, FitAja! dibuat untuk
            memenuhi semua kebutuhan pengguna agar dapat mengakses berbagai layanan
            kesehatan dalam satu aplikasi. Menghadirkan berbagai fitur dan kemudahan
            dalam mengakses layanan kesehatan dari mulai pencegahan hingga pengobatan,
            seperti: layanan konsultasi kesehatan <i>online</i>, resep digital, pesan
            antar obat, pengajuan klaim asuransi <i>online</i>, info provider, dan
            banyak fitur bermanfaat lainnya.
          </p>
        </section>
      </div>
      <Fitur />
      <Partner />
      <Partner2 />
      <Review />
      <Preview />
      <Cerita />
      <Footer />
    </>
  );
}

export default Home;

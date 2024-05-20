import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fitur from "../components/home/Fitur";
import Partner from "../components/home/Partner";
import Partner2 from "../components/home/Partner2";
import Review from "../components/home/Review";
import Preview from "../components/home/Preview";
import Cerita from "../components/home/Cerita";
import Banner from "../components/home/Banner";

function Home() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <NavBar />
      <Banner />
      <div className="flex m-24">
        <div className="w-1/2">
          <div className="relative aspect-video w-full ">
            <img
              className=" aspect-video w-full rounded-2xl"
              onClick={openModal}
              src="/ytb.png"
              alt="Youtube Thumbnail"
            />
            <img
              onClick={openModal}
              className="absolute inset-0 flex items-center justify-center m-auto w-16 border-white"
              src="/play.png"
              alt="Play Button"
            />
          </div>
        </div>

        <div className="m-8">

        </div>
        <section className="flex flex-col items-center justify-center w-1/2">
          <h2
            className="pb-4 font-semibold text-center md:text-3xl lg:text-left xl:text-4xl text-primary-100"
          >
            Layanan Kesehatan Digital Terintegrasi untuk Indonesia Sehat
          </h2>
          <p
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
        {modal ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
            <div className="rounded">
              <div className="relative">
                <h1
                  onClick={openModal}
                  className="absolute top-0 border text-xl bg-white border-white rounded-full p-1 -right-10 text-gray-800 cursor-pointer"
                >
                  ❌
                </h1>
                <iframe
                  loading="lazy"
                  width="1200"
                  height="600"
                  src="https://www.youtube.com/embed/mTNNR4Ikwv4?si=DWpoNI9TqDKYpMqW?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ) : null}
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

import React from "react";
import FaqCard from "./FaqCard";

const Faq = ({ umum }) => {

  return (
    <div className="space-y-8 overflow-hidden pt-6 pb-2 px-14 md:px-28 lg:px-28">
     <div
        data-aos="fade-up"
        data-aos-delay={250}
        className="inline-flex flex-col items-start justify-center gap-4"
      >
        <div className="text-3xl font-normal md:text-4xl lg:text-4xl text-neutral-900">
          Pertanyaan yang Sering Diajukan
        </div>
        <div className="text-xl font-medium md:text-3xl lg:text-3xl text-primary-100">
          Ketahui informasi terkait FitAja! melalui pertanyaan dan jawaban yang
          sering diajukan oleh pengguna.
        </div>
      </div>
      <div className="space-y-5">
        <FaqCard question="Bagaimana jika terdapat kendala login atau Hubungkan Kartu Asuransi dengan Pop Up?" answer="Anda dapat klik “Pusat Resolusi”, kemudian lengkapi data yang diminta. Tunggu , dan cek email secara berkala untuk melihat hasil pengajuan" />
        <FaqCard question="Bagaimana jika fitur aplikasi FitAja! Tidak dapat digunakan atau greyout?" answer="Pastikan anda sudah berhasil menghubungkan kartu asuransi, update aplikasi ke versi terbaru, dan coba login Kembali." />
        <FaqCard
          question="Bagaimana cara mengaktifkan akun FitAja! yang terblokir karena terlalu banyak memasukkan PIN yang salah?"
          answer={
            <>
              Untuk mengaktifkan akun yang terblokir, silakan ikuti langkah berikut: <br />
              - Tunggu 1x24 jam (terhitung sejak akun terblokir). <br />
              - Masuk akun kembali, dan pastikan PIN yang dimasukkan benar. <br />
              - Jika kamu tidak mengingat PIN, silakan klik Lupa PIN, untuk membuat PIN baru.
            </>
          }
        />
      </div>
    </div>
  );
};

export default Faq;

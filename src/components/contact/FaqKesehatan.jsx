import React from "react";
import FaqCard from "./FaqCard";

const FaqKesehatan = ({ kesehatan }) => {

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
        <FaqCard question="Apakah saya dapat mencari provider (rumah sakit/klinik) yang ada di luar kota/di luar area yang saya tinggali?" answer={
          <>
            Kamu dapat mencari provider mitra di luar kota/area yang ditinggali saat ini. Begini caranya:<br />
            - Buka Aplikasi FitAja<br />
            - Klik Lainnya<br />
            - Klik Menu FitProvider <br />
            - Klik Filter<br />
            - Ketik area yang ingin kamu cari<br />
            - Pilih jarak dan jenis provider yang dicari<br />
            -Terakhir, klik Apply
          </>
        } />
        <FaqCard question="Bagaimana cara mengecek E-resep setelah melakukan konsultasi online?" answer={
          <>
            Untuk mengecek E-resep, kamu dapat mengikuti langkah berikut:<br />
            - Buka Aplikasi FitAja!<br />
            - Klik FitTele<br />
            - Klik Dokter online<br />
            - Klik Setuju dan Lanjutkan<br />
            - Klik Aktivitas & Transaksi <br />
            - Klik Lihat Resep
          </>
        } />
        <FaqCard question="Bagaimana cara melakukan registrasi menggunakan FitCode di Rumah Sakit/Klinik?" answer={
          <>
            Begini cara mudah daftar Rumah Sakit/Klinik pakai QR code:<br />
            - Buka aplikasi FitAja!<br />
            - Buka menu FitCode<br />
            - Pilih peserta yang akan mendaftar<br />
            - Scan barcode di RS/Klinik yang kamu kunjungi.<br />
            - Tunggu nomor antrean keluar, dan selesai.
          </>
        } />
      </div>
    </div>
  );
};

export default FaqKesehatan;

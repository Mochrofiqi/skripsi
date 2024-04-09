import React from "react";
import FaqCard from "./FaqCard";

const FaqAsuransi = ({ asuransi }) => {

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
        <FaqCard question="Bagaimana cara menampilkan kartu asuransi elektronik di FitAja!?" answer={
          <>
            Terdapat 2 cara untuk menampilkan kartu asuransi digital, berikut penjelasannya: <br/>
            A. Menampilkan Kartu Asuransi Digital Pemilik Akun FitAja!<br/>
            - Buka aplikasi FitAja!<br/>
            - Klik Tampilkan FitCard pada halaman Homepage/beranda<br/>
            - Kartu asuransi digital kamu akan muncul.
            <br/><br/>
            B. Menampilkan Kartu Asuransi Digital Anggota Keluarga<br/>
            - Buka aplikasi FitAja!<br/>
            - Buka menu FitMe<br/>
            - Pilih peserta/anggota keluarga<br/>
            - Klik Kartu dan QR Code pada halaman Info Detail Peserta<br/>
            - Klik Tampilkan FitCard<br/>
            - Kartu asuransi digital akan muncul.
          </>
        } />
        <FaqCard question="Bagaimana cara pengajuan E-claim di aplikasi FitAja!?" answer={
          <>
            Untuk melakukan pengajuan E-Claim di aplikasi FitAja!, kamu dapat menggikuti langkah berikut:<br/>
            1. Buka Aplikasi FitAja!<br/>
            2. Klik menu FitClaim<br/>
            3. Klik Pengajuan, dan pilih peserta yang akan melakukan pengajuan<br/>
            4. Isi semua data yang diminta, dan pastikan data yang dimasukkan benar.<br/>
            5. Setelah data lengkap, klik Upload
          </>
        } />
        <FaqCard question="Apakah di aplikasi FitAja! bisa cek benefit asuransi?" answer={
          <>Untuk mengetahui benefit asuransi, kamu dapat mengikuti langkah berikut:<br/>
            - Buka Aplikasi FitAja!<br/>
            - Klik Lainnya<br/>
            - Klik FitBenefit
          </>
        }/>
        </div>
    </div>
  );
};

export default FaqAsuransi;

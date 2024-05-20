import { useState } from "react";

export default function FiturKesehatan() {
    const [feature, setFeature] = useState("");
    const renderComponent = () => {
        switch (feature) {
            case "fitur1":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/tele.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/tele2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Tele</h2>
                                <p className='text-xl font-semibold mt-4'>Konsultasi Online dengan Dokter Pilihan</p>
                                <p className='text-xl mt-4'>Layanan konsultasi kesehatan online yang akan bantu kamu untuk mendapatkan solusi kesehatan secara tepat, cepat, dan aman.</p> <br />
                                <p className='text-xl mt-4'>Pilih dokter, konsultasikan keluhan yang dialami, dan dapatkan resep digital ataupun saran sesuai dengan diagnosa dokter.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur2":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/code.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/code2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Code</h2>
                                <p className='text-xl font-semibold mt-4'>Daftar Fasilitas Kesehatan Tinggal Scan</p>
                                <p className='text-xl mt-4'>Hemat waktu kamu dengan melakukan pendaftaran ke rumah sakit atau klinik melalu FitCode. Tidak perlu isi formulir pendaftaran secara manual, tinggal scan, dan pendaftaran beres.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur3":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/medicine.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/medicine2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Medicine</h2>
                                <p className='text-xl font-semibold mt-4'>Lihat Info Obat dan Unduh Resep Digital</p>
                                <p className='text-xl mt-4'>Bisa cek info obat formularium dari pakar terpercaya, dan unduh resep digital untuk tebus resep obat di apotek provider asuransi kamu. Tunjukkan resepnya, dan dapatkan obatnya.</p>
                            </div>
                        </div>
                    </section>

                );
            case "fitur4":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/provider.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/provider2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Provider</h2>
                                <p className='text-xl font-semibold mt-4'>Cari dan Lihat Informasi Provider di Sekitar Kamu</p>
                                <p className='text-xl mt-4'>Dapatkan informasi dan petunjuk arah ke rumah sakit atau klinik terdekat yang ditanggung oleh asuransi kamu dengan melakukan pencarian pada fitur FitProvider.</p>
                                <p className='text-xl mt-4'>FitProvider membantu kunjungan ke fasilitas kesehatan lebih cepat tanpa nyasar.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur5":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/referral.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/referral2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Referral</h2>
                                <p className='text-xl font-semibold mt-4'>Riwayat Rujukan</p>
                                <p className='text-xl mt-4'>Dokumen rujukan menjadi lebih aman dan anti hilang. Cukup tunjukan rujukan digital dan dapatkan pelayanan yang direkomendasikan oleh dokter.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur6":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/confirm.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/confirm2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Confirm</h2>
                                <p className='text-xl font-semibold mt-4'>Bantuan Proses Konfirmasi Penjaminan Awal dan Akhir Rawat Inap</p>
                                <p className='text-xl mt-4'>Membantu administrasi kepulangan menjadi lebih cepat setelah kamu menjalani rawat inap di rumah sakit.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur7":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <div className='text-center w-2/6'>
                                <div className="relative group w-screen">
                                    <img src='/fitur/rating.svg' className='w-80' alt="BenefitImage" />
                                    <img
                                        className="absolute w-80 h-full transition-opacity duration-1000 transform justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 left-40 top-1/2 hover:opacity-100 preview-hover"
                                        src="/fitur/rating2.svg"
                                        alt="MeImage"
                                    />
                                </div>
                            </div>
                            <div className='text-center my-8 w-4/6'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Rating</h2>
                                <p className='text-xl font-semibold mt-4'>Penilaian dan Ulasan Layanan</p>
                                <p className='text-xl mt-4'>Berikan pelayanan dan ulasan terkait layanan kesehatan yang telah kamu dapatkan agar kualitas layanan terus meningkat dan sesuai dengan harapan kamu.</p>
                            </div>
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };
    return (
        <div className="py-8 mb-10">
            <div className='mx-28 py-4'>
                <div className="text-4xl font-semibold text-neutral-900">
                    Fitur Kesehatan Asuransi
                </div>
                <div className="text-2xl font-medium pt-4 text-center text-primary-100">
                    Dapatkan akses layanan kesehatan lebih mudah dan cepat menggunakan Fitur Kesehatan Asuransi. Segera dapatkan layanannya sekarang juga dengan aplikasi FitAja!
                </div>

                <div className='flex py-6 justify-center'>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur1' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur1")}>
                        <img src='/fitur/tele.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center hover:text-neutral-500">
                            FitTele
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur2' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur2")}>
                        <img src='/fitur/code.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitCode
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur3' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur3")}>
                        <img src='/fitur/medicine.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitMedicine
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur4' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur4")}>
                        <img src='/fitur/provider.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitProvider
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur5' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur5")}>
                        <img src='/fitur/referral.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitReferral
                        </h1>
                    </div>
                </div>

                <div className='flex py-4 mb-2 justify-center'>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur6' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur6")}>
                        <img src='/fitur/confirm.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center hover:text-neutral-500">
                            FitCofirm
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur7' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur7")}>
                        <img src='/fitur/rating.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitRating
                        </h1>
                    </div>
                </div>

            </div>
            {renderComponent()}
        </div>
    );
}
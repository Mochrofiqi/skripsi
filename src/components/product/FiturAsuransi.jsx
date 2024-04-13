import { useState } from "react";

export default function FiturAsuransi() {
    const [feature, setFeature] = useState("");
    const renderComponent = () => {
        switch (feature) {
            case "fitur1":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/public/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <img src='/public/fitur/hp.svg' className='w-60' />
                            <div className='text-center my-8'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Benefit</h2>
                                <p className='text-xl font-semibold mt-4'>Informasi Benefit Kepesertaaan Asuransi Kamu</p>
                                <p className='text-xl mt-4'>Ketahui berbagai benefit dari kepesertaan asuransi kamu. Gunakan manfaat asuransi sesuai dengan benefit secara bijak dan tepat.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur2":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/public/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <img src='/public/fitur/hp.svg' className='w-60' />
                            <div className='text-center my-8'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Guide</h2>
                                <p className='text-xl font-semibold mt-4'>
                                Ketentuan dan Prosedur Pelayanan Manfaat Asuransi</p>
                                <p className='text-xl mt-4'>Cerdas menggunakan manfaat asuransi dengan memahami ketentuan dan prosedur pelayanan melalui Buku Saku Elektronik pada Fitur Guide.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur3":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/public/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <img src='/public/fitur/hp.svg' className='w-60' />
                            <div className='text-center my-8'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Claim</h2>
                                <p className='text-xl font-semibold mt-4'>Pengajuan dan Cek Status Claim Online</p>
                                <p className='text-xl mt-4'>
                                Bantu kamu untuk melakukan pengajuan klaim secara online serta bisa cek status klaim dengan mudah, bisa akses kapan saja dan dimana saja.</p> <br/>
                                <p className='text-xl mt-4'>Pengajuan jadi lebih cepat, dokumen tersimpan aman.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur4":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/public/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <img src='/public/fitur/hp.svg' className='w-60' />
                            <div className='text-center my-8'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Card</h2>
                                <p className='text-xl font-semibold mt-4'>Kartu Asuransi Digital</p>
                                <p className='text-xl mt-4'>Kartu asuransi digital sebagai identitas kepesertaan asuransi untuk mendapatkan layanan kesehatan sesuai dengan manfaat asuransi kamu.</p>
                                <p className='text-xl mt-4'>Dengan FitCard, kamu tidak perlu lagi khawatir kartu hilang atau tertinggal.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur5":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/public/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <img src='/public/fitur/hp.svg' className='w-60' />
                            <div className='text-center my-8'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Lindungi</h2>
                                <p className='text-xl font-semibold mt-4'>Kumpulan Produk Asuransi</p>
                                <p className='text-xl mt-4'>Akses informasi ke berbagai produk asuransi yang dapat menjadi pilihan untuk menjaga aset berharga kamu.</p>
                            </div>
                        </div>
                    </section>
                );
            case "fitur6":
                return (
                    <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{ backgroundImage: 'url(/public/bg.png)' }}>
                        <div className='flex items-center justify-center mx-32 py-8 gap-12'>
                            <img src='/public/fitur/hp.svg' className='w-60' />
                            <div className='text-center my-8'>
                                <h2 className='text-4xl font-semibold text-primary-100'>Fitur Me</h2>
                                <p className='text-xl font-semibold mt-4'>Informasi Data Kepesertaan</p>
                                <p className='text-xl mt-4'>Menyediakan detail informasi kepesertaan asuransi milik peserta dan keluarga dari mulai data peserta, dokter keluarga, hingga kartu asuransi digital.</p>
                            </div>
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className='mx-28 py-4'>
                <div className="text-4xl font-semibold text-neutral-900">
                    Fitur Asuransi
                </div>
                <div className="text-2xl font-medium pt-4 text-center text-primary-100">
                    Dapatkan informasi lebih mendalam dan keuntungan dari asuransi melalui Fitur Asuransi Jiwa. Ajukan klaim anda dengan proses yang mudah dan cepat dengan aplikasi FitAja!.
                </div>

                <div className='flex py-6 justify-center'>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur1' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur1")}>
                        <img src='/public/fitur/benefit.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitBenefit
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur2' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur2")}>
                        <img src='/public/fitur/guide.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitGuide
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur3' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur3")}>
                        <img src='/public/fitur/claim.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitClaim
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur4' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur4")}>
                        <img src='/public/fitur/card.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitCard
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur5' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur5")}>
                        <img src='/public/fitur/lindungi.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitLindungi
                        </h1>
                    </div>
                    <div className={`bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-neutral-500 shadow-xl ${feature === 'fitur6' ? 'bg-primary-200 text-white' : ''}`}
                        onClick={() => setFeature("fitur6")}>
                        <img src='/public/fitur/me.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitMe
                        </h1>
                    </div>
                </div>
            </div>
            {renderComponent()}
        </>
    );
}
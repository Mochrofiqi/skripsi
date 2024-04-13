import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Fitur() {
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
                                <p className='text-xl font-semibold mt-4'>Informasi Benefit Kepesertaaan Asuransi Kamu</p>
                                <p className='text-xl mt-4'>Ketahui berbagai benefit dari kepesertaan asuransi kamu. Gunakan manfaat asuransi sesuai dengan benefit secara bijak dan tepat.</p>
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
                                <p className='text-xl font-semibold mt-4'>Informasi Benefit Kepesertaaan Asuransi Kamu</p>
                                <p className='text-xl mt-4'>Ketahui berbagai benefit dari kepesertaan asuransi kamu. Gunakan manfaat asuransi sesuai dengan benefit secara bijak dan tepat.</p>
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
            <NavBar />
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
                </div>
            </div>
            {renderComponent()}
            <Footer />
        </>
    );
}

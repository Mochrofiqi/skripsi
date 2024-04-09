import React from 'react'

function FiturKesehatan() {
    return (
        <>
            <div className='mx-28 py-8'>
                <div className="text-4xl font-semibold text-neutral-900">
                    Fitur Kesehatan Asuransi
                </div>
                <div className="text-2xl font-medium pt-4 text-center text-primary-100">
                    Dapatkan akses layanan kesehatan lebih mudah dan cepat menggunakan Fitur Kesehatan Asuransi. Segera dapatkan layanannya sekarang juga dengan aplikasi FitAja!
                </div>

                <div className='flex py-6 justify-center'>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/tele.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center hover:text-neutral-500">
                            FitTele
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/code.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitCode
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/medicine.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitMedicine
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/provider.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitProvider
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/referral.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitReferral
                        </h1>
                    </div>
                </div>

                <div className='flex py-6 justify-center'>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/confirm.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center hover:text-neutral-500">
                            FitCofirm
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/rating.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitRating
                        </h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FiturKesehatan
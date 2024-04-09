import React from 'react'

function FiturAsuransi() {
    return (
        <>
            <div className='mx-28 py-8'>
                <div className="text-4xl font-semibold text-neutral-900">
                    Fitur Asuransi
                </div>
                <div className="text-2xl font-medium pt-4 text-center text-primary-100">
                    Dapatkan informasi lebih mendalam dan keuntungan dari asuransi melalui Fitur Asuransi Jiwa. Ajukan klaim anda dengan proses yang mudah dan cepat dengan aplikasi FitAja!.
                </div>

                <div className='flex py-6 justify-center'>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/benefit.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center hover:text-neutral-500">
                            FitBenefit
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/guide.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitGuide
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/claim.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitClaim
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/card.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitCard
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/lindungi.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitLindungi
                        </h1>
                    </div>
                    <div className='bg-neutral-500 rounded-2xl py-3 w-40 mx-4 items-center justify-center text-primary-100 hover:bg-primary-200 hover:text-white shadow-xl'>
                        <img src='/public/fitur/me.png' className='w-20 py-3 mx-auto' alt="FitBenefit" />
                        <h1 className="text-[22px] font-semibold text-center">
                            FitMe
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiturAsuransi
import React from 'react'

const Layanan = () => {
    return (
        <>
            <section>
                <h2
                    className="font-semibold mt-10 text-center text-4xl"
                >
                    Layanan FitAja!
                </h2>
                <img src="/public/layanan/layanan.png" className="mx-auto pt-6 w-2/5" alt="Frame Image" />

                <div className='flex mt-8 gap-12 justify-center'>
                    <img src='/public/layanan/layanan1.svg' className='w-2/6'/>
                    <img src='/public/layanan/layanan2.svg' className='w-2/6'/>
                </div>

                <div className='flex gap-12 justify-center'>
                    <img src='/public/layanan/layanan3.svg' className='w-2/6'/>
                    <img src='/public/layanan/layanan4.svg' className='w-2/6'/>
                </div>
                 <div className='flex justify-center'>
                    <img src='/public/layanan/layanan5.svg' className='w-2/6'/>
                </div>
            </section>

        </>
    )
}

export default Layanan
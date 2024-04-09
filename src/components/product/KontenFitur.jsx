import React from 'react';

function KontenFitur() {
    return (
        <section className='mx-48 rounded-3xl bg-cover shadow-xl' style={{backgroundImage: 'url(/public/bg.png)'}}>
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
}

export default KontenFitur;

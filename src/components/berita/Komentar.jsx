import React, { useState } from 'react';
import Toast from '../Toast';

const Komentar = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        komentar: "",
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormData({
            komentar: "",
        });
        setShowToast(true);
      };
  return (
    <>
    <Toast isShow={showToast} isHide={() => setShowToast(false)} message="Komentar berhasil dikirim" />
        <div className='justify-center bg-neutral-400 mx-32 rounded-3xl py-4 mb-8'>
                <h1 className="text-2xl font-semibold px-10 py-2">
                    Komentar
                </h1>
                <div className="px-20 py-1 mx-auto">
                        <form onSubmit={handleFormSubmit}>
                    <div className="flex w-full overflow-hidden rounded-xl">
                        <input
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            name='komentar'
                            onChange={handleInputChange}
                            value={formData.komentar}
                            id="searchArticles"
                            type="text"
                            placeholder="Tuliskan komentar disini"
                            className="w-full border-2 border-primary-400 px-4 py-1.5 rounded-r-none outline-none rounded-l-xl focus:border-primary-200"
                        />
                        <button
                        type='submit'
                            className={`${isFocus ? "bg-primary-200" : "bg-primary-400"
                                } px-6 py-2 font-semibold text-white text-base rounded-r-xl`}
                        >
                            Kirim
                        </button>
                    </div>
                        </form>
                </div>
                <div className='flex gap-4 mx-20 my-2 items-center'>
                    <img src='/komentar.png' className='w-12 rounded-full' />
                    <div className=''>
                        <p className='text-neutral-300'>
                            1 hari yang lalu
                        </p>
                        <p className='text-base'>
                            Wow perusahaan semakin berkembang dengan banyaknya perusahaan yang bekerja sama
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 mx-20 my-2 items-center'>
                    <img src='/komentar.png' className='w-12 rounded-full' />
                    <div className=''>
                        <p className='text-neutral-300'>
                            4 hari yang lalu
                        </p>
                        <p className='text-base'>
                        Selamat ya atas kerja samanya
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Komentar
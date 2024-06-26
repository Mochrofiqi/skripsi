import React from 'react';
import NavBar from '../components/NavBar';
import Layanan from '../components/product/Layanan';
import Footer from '../components/Footer';
import FiturKesehatan from '../components/product/FiturKesehatan';
import FiturAsuransi from '../components/product/FiturAsuransi';

const Produk = () => {
  return (
    <div className='bg-primary-500'>
        <NavBar/>
        <div className="relative">
        <img src="/page/frame.png" className="w-full shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[48px] font-bold text-primary-200">Fitur & Layanan</h2>
        </div>
      </div>
      <Layanan/>
      <FiturAsuransi/>
      <FiturKesehatan/>
      <Footer/>
    </div>
  )
}

export default Produk
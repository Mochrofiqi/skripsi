import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FeaturesSyarat from '../components/syarat/FeaturesSyarat'

const Syarat = () => {
  return (
    <>
        <NavBar/>
        <div className="relative">
        <img src="/public/page/frame.png" className="w-full pt-16 mt-2 shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[48px] font-bold text-primary-200">Syarat & Ketentuan</h2>
        </div>
      </div>
        <FeaturesSyarat/>
        <Footer/>
    </>
  )
}

export default Syarat
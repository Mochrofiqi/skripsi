import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Form from '../components/contact/Form'
import Faq from '../components/contact/Faq'
import Maps from '../components/contact/Maps'
import ContactPerson from '../components/contact/ContactPerson'
import FeaturesFaq from '../components/contact/FeaturesFaq'

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="relative">
        <img src="/page/frame.png" className="w-full shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[48px] font-bold text-primary-200">Hubungi Kami</h2>
        </div>
      </div>
      <FeaturesFaq />
      <Form />
      <Maps />
      <ContactPerson />
      <Footer />
    </>
  )
}

export default ContactUs
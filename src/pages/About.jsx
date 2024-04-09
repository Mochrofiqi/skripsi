import NavBar from "../components/NavBar"
import Deskripsi from "../components/tentang/Deskripsi"
import Visi from "../components/tentang/Visi"
import Milestone from "../components/tentang/Milestone"
import Komisaris from "../components/tentang/Komisaris"
import Direksi from "../components/tentang/Direksi"
import Vpmanager from "../components/tentang/Vpmanager"
import Carouseltim from "../components/tentang/Carouseltim"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <NavBar />
      <div className="relative">
        <img src="/public/page/frame.png" className="w-full pt-16 mt-2 shadow-lg" alt="Frame Image" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white font-semibold">
          <h2 className="text-[48px] font-bold text-primary-200">Tentang</h2>
        </div>
      </div>

      <div className="bg-primary-200 mb-20 mx-20 rounded-bl-[44px] rounded-br-[44px]">
        <div className="py-4 mx-28">
          <Deskripsi />
          <Visi />
          <Milestone />
          <Komisaris />
          <Direksi />
          <Vpmanager />
          <Carouseltim />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About

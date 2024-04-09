import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Galeri from './pages/Galeri';
import Syarat from './pages/Syarat';
import Kebijakan from './pages/Kebijakan';
import Kolaborasi from './components/berita/Kolaborasi';
import Berkolaborasi from './components/berita/Berkolaborasi';
import TampilBeda from './components/berita/TampilBeda';
import Merangkul from './components/berita/Merangkul';
import Peresmian from './components/berita/Peresmian';
import Perkuat from './components/berita/Perkuat';
import Penandatanganan from './components/berita/Penandatanganan';
import Hadiri from './components/berita/Hadiri';
import GaleriPenandatanganan from './components/galeri/GaleriPenandatanganan';
import GaleriMerangkul from './components/galeri/GaleriMerangkul';
import GaleriPeresmian from './components/galeri/GaleriPeresmian';
import GaleriTampilBeda from './components/galeri/GaleriTampilBeda';
import Produk from './pages/Produk';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/fitur" element={<Produk />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/syarat-ketentuan" element={<Syarat />} />
          <Route path="/kebijakan-privasi" element={<Kebijakan />} />
          <Route path="/kolaborasi" element={<Kolaborasi />} />
          <Route path="/berkolaborasi" element={<Berkolaborasi />} />
          <Route path="/tampil-beda" element={<TampilBeda />} />
          <Route path="/merangkul" element={<Merangkul />} />
          <Route path="/peresmian" element={<Peresmian />} />
          <Route path="/perkuat" element={<Perkuat />} />
          <Route path="/penandatanganan" element={<Penandatanganan />} />
          <Route path="/hadiri" element={<Hadiri />} />
          <Route path="/galeri-penandatanganan" element={<GaleriPenandatanganan />} />
          <Route path="/galeri-merangkul" element={<GaleriMerangkul />} />
          <Route path="/galeri-peresmian" element={<GaleriPeresmian />} />
          <Route path="/galeri-tampil-beda" element={<GaleriTampilBeda />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

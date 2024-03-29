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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/syarat-ketentuan" element={<Syarat />} />
          <Route path="/kebijakan-privasi" element={<Kebijakan />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

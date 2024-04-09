import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar bg-neutral-500 flex items-center justify-between">
          <Link to="/" className=''>
            <img src='/public/logo.png' className='pl-20 w-36' alt="Logo" />
          </Link>
          <ul className="flex gap-6">
            <Link to="/">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="home">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold " id="about">
                Tentang
              </li>
            </Link>
            <Link to="/fitur">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="product">
                Fitur 
              </li>
            </Link>
            <Link to="/news">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="news">
                Cerita
              </li>
            </Link>
            <Link to="/contact-us">
              <li className="text-primary-200 px-6 py-1 transition-all duration-300 list hover:bg-primary-200 hover:text-white hover:rounded-lg hover:font-semibold" id="contactus">
                Hubungi Kami
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;

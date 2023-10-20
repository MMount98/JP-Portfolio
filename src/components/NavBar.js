import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <div className="navbar bg-gray-500">
        <div className="flex-1 justify-center md: ml-64">
          <Link to="/" className="btn btn-ghost normal-case text-4xl lg:text-5xl font-custom text-primary bg-gray-500">
            Jacob Paulson
          </Link>
        </div>

        <div className="flex-none">
          {/* Desktop Version - Always Display */}
          <div className="flex mx-3 hidden md:flex "> 
            <a
              href="https://www.instagram.com/_jacobpaulson_/"
              target="_blank"
              rel="noreferrer"
              className="instaBtn text-white px-1 "
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@jacobryanpaulson"
              target="_blank"
              rel="noreferrer"
              className="tikBtn text-white px-1 "
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitter.com/JRPaulyStreams"
              target="_blank"
              rel="noreferrer"
              className="twitterBtn text-white px-1 "
            >
              <FaTwitter />
            </a>
          </div>

          {/* Mobile Version - Dropdown Menu */}
          <div className="dropdown dropdown-end md:hidden mx-6">
            <button onClick={toggleMenu} className="btn">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            <ul tabIndex="0" className={`p-2 shadow menu dropdown-content bg-secondary text-primary ${isMenuOpen ? 'block' : 'hidden'}`}>
              <li>
                <a
                  href="https://www.instagram.com/_jacobpaulson_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@jacobryanpaulson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/JRPaulyStreams"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>

          <Link to="/Contact" className="btn btn-outline btn-primary lg:mr-6 ">
            Contact Me!
          </Link>
        </div>
      </div>
    </>
  );
}
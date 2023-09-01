import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-5xl font-custom text-primary">
            Jacob Paulson
          </a>
        </div>

        <div className="flex-none">
          <div className="flex mx-3 ">
            <a
              href="https://www.instagram.com/_jacobpaulson_/"
              target="_blank"
              rel="noreferrer"
              className="px-1 "
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@jacobryanpaulson"
              target="_blank"
              rel="noreferrer"
              className="px-1 "
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitter.com/JRPaulyStreams"
              target="_blank"
              rel="noreferrer"
              className="px-1 "
            >
              <FaTwitter />
            </a>
          </div>
          <Link to="/Contact" className="btn btn-outline btn-primary lg:mr-6 ">
            Contact Me!
          </Link>
        </div>
      </div>
    </>
  );
}

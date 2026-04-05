import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#000000] pt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-6 gap-8 text-center md:text-left">
          {/* logo details */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-4">
              <a href="#" className="font-extrabold text-white">
                DigiTools
              </a>
            </h1>
            <p className="md:mr-[12px] text-white">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-white mb-4">Product</h2>
            <ul className="list-none">
              <li className="text-white">
                <a href="#">Features</a>
              </li>
              <li className="text-white">
                <a href="#">Pricing</a>
              </li>
              <li className="text-white">
                <a href="#">Templates</a>
              </li>
              <li className="text-white">
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-white mb-4">Resources</h2>
            <ul className="list-none">
              <li className="text-white">
                <a href="#">Documentation</a>
              </li>
              <li className="text-white">
                <a href="#">Help Center</a>
              </li>
              <li className="text-white">
                <a href="#">Community</a>
              </li>
              <li className="text-white">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-white mb-4">Company</h2>
            <ul className="list-none">
              <li className="text-white">
                <a href="#">About</a>
              </li>
              <li className="text-white">
                <a href="#">Blog</a>
              </li>
              <li className="text-white">
                <a href="#">Career</a>
              </li>
              <li className="text-white">
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-white mb-4 text-center md:text-left">
              Social Links
            </h2>
            <ul className="list-none flex flex-col items-center md:items-start gap-2">
              <li>
                <a href="#" className="flex items-center gap-1 text-white">
                  <FaFacebook size={20} /> FaceBook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 text-white">
                  <AiOutlineTwitter size={20} /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 text-white">
                  <IoLogoInstagram size={20} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 ">
        <hr className="text-gray-500/90 my-3" />
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-white">
            &copy; {new Date().getUTCFullYear()}
            Digitools. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex gap-5 text-white">
            <a href="#">Terms of Service</a>
            <a href="#" className="ml-2" to={"/"}>
              Privacy Policy
            </a>
            <a href="#" className="ml-2" to={"/"}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

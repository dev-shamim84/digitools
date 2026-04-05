import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F2F2F2] shadow sticky top-0  z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* left side brand/title */}
          <div className=" font-bold flex gap-2 items-center">
            <span className=" font-bold text-2xl bg-linear-to-l from-purple-500 to-purple-900 bg-clip-text text-transparent line-clamp-1">
              DigiTools
            </span>
          </div>

          {/* right side menu, sign-in button & logo */}
          <ul className="hidden md:flex items-center text-[15px] gap-4 font-semibold">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className="hidden md:flex gap-3 items-center">
            <div className="relative">
              <span className="absolute bg-red-500 rounded-full right-[-8px] top-[-10px] text-white px-2">
                {cart.length}
              </span>
              <CiShoppingCart size={30} />
            </div>
            <button className="font-semibold">Log In</button>

            <button className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-900 text-white rounded-full">
              Get Started
            </button>
          </div>

          {/* mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={25} /> : <IoMdMenu size={25} />}
          </button>
        </div>

        {/* mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col justify-center items-center gap-2 pb-4 font-semibold">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <div className="relative">
              <span className="absolute bg-red-500 rounded-full right-[-8px] top-[-10px] text-white px-2">
                {cart.length}
              </span>
              <CiShoppingCart size={30} />
            </div>
            <button className="font-semibold">Log In</button>
            <button className="px-4 py-2 bg-linear-to-l from-purple-400 to-purple-900 text-white rounded-full">
              Get Started
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

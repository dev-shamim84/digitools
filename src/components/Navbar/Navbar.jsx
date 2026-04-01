import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F2F2F2] shadow ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Left side brand/title */}
          <div className=" font-bold flex gap-2 items-center">
            <span>DigiTools</span>
          </div>

          {/* Right side menu, sign-in button & logo */}
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
            <CiShoppingCart />

            <button>Log In</button>

            <button className="px-4 py-2 bg-[#4D2C5E] text-white rounded-full">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdMenu /> : <IoClose />}
          </button>
        </div>

        {/* Mobile Menu */}
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
            <CiShoppingCart />
            <button>Log In</button>

            <button className="px-4 py-2 bg-[#4D2C5E] text-white rounded-full">
              Get Started
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

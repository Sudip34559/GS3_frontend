import { Button } from "@/components/ui/button";
import { ChevronsRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const QuarterCircleMenu = ({
  isXL = true, // Default to true for larger screens
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (fixed in top-right corner) */}
      {/* Toggle Button (fixed in top-right corner) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` z-50 w-[45px] h-[45px] cursor-pointer  rounded-full flex items-center justify-center shadow-xl 
          bg-white text-black
         transition-colors duration-300`}
      >
        {isXL ? <ChevronsRight /> : <Menu />}
      </button>

      {/* Quarter Circle Menu Container */}
      <div
        className={`fixed top-0 right-0 z-0 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen && !isXL ? "w-[300px] h-[300px]" : "w-0 h-0"
        }`}
      >
        <div className="relative w-[300px] h-[300px] bg-gray-100  rounded-bl-full p-2 font-orbitron">
          {/* Menu Items on arc */}

          <div className="absolute text-black w-full top-[5px] right-[-4px] text-left pl-3 transform origin-right">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative pb-1 font-medium transition-all duration-200 ${
                  isActive ? "after:w-full" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Home
            </NavLink>
          </div>
          <div className=" absolute text-black w-full top-[-4px] right-[-4px]  text-left pl-3  transform origin-right -rotate-z-[20deg]">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative pb-1 font-medium transition-all duration-200 ${
                  isActive ? "after:w-full" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              About
            </NavLink>
          </div>
          <div className=" absolute text-black w-full top-[-7px] right-[-7px]  text-left pl-3  transform origin-right -rotate-z-[40deg]">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative pb-1 font-medium transition-all duration-200 ${
                  isActive ? "after:w-full" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Services
            </NavLink>
          </div>
          <div className=" absolute text-black w-full top-[-10px] right-[-10px] text-left pl-3  transform origin-right -rotate-z-[60deg]">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative pb-1 font-medium transition-all duration-200 ${
                  isActive ? "after:w-full" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className=" absolute text-ls font-semibold text-black w-full top-[-10px] right-[-10px] text-left pl-3  transform origin-right -rotate-z-[80deg]">
            <Button className="rounded-full w-[40px] h-[40px] ml-3 rotate-90  cursor-pointer">
              »
            </Button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute cursor-pointer top-2 right-2 text-black hover:text-gray-700 transition-colors duration-300"
          >
            <X />
          </button>
        </div>
      </div>
    </>
  );
};

export default QuarterCircleMenu;

import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Navbar from "../03-Navbar/Navbar";
import MobileNavbar from "../03-Navbar/MobileNavbar";
import logo from "../../assets/Logo/Logo.png";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // If scrolled more than 50vh
      if (scrollY > viewportHeight * 0.05) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full h-[8.9vh] fixed flex justify-center z-[999] items-center bg-[${
          scrolled ? "#123f49" : "transparent"
        }] ${
          scrolled ? "backdrop-blur-sm" : "backdrop"
        } transition-all duration-100 ease-in-out`}
      >
        <div className="lg:w-[80%] w-[95%] flex h-[100%] justify-between rounded-b-2xl px-5 py-1 ">
          <div className=" w-[50%] lg:w-[15%] h-[100%] flex items-center cursor-pointer">
            <img src={logo} className=" h-[50px]" alt="logo" /><span className="text-[#fff] font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}> KANDASWARNA</span>
          </div>

          <div className=" w-[20%] lg:w-[80%] flex justify-end">
            <div className="flex lg:hidden justify-center items-center">
              <Sheet>
                <SheetTrigger>
                  <Menu className="w-[30px] h-[30px] text-[#8db580] " />
                </SheetTrigger>
                <SheetContent className="w-[75%] bg-[#fff]">
                  <MobileNavbar />
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden lg:flex  justify-center items-center">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      {scrolled && (
        <>
          <div
            className={`w-full fixed flex justify-center pt-[8.9vh] z-50 items-center`}
          >
            <div className="w-[80%]">
              <div className="w-[50px] bg-[#8db580] rounded-bl-[2px] rounded-br-[20px] flex justify-center items-center flex-col">
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="font-bold font-Poppins text-[18px] text-white"
                >
                  10
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="font-[500] -mt-1 font-Poppins pb-2 text-[12px] text-white"
                >
                  Years
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;

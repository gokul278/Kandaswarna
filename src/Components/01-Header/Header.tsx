import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Navbar from "../03-Navbar/Navbar";
import logoLight from "../../assets/Logo/logo-dark.png";
import MobileNavbar from "../03-Navbar/MobileNavbar";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full h-[8.9vh] fixed flex justify-center items-center bg-[#1dcd9eb8] backdrop-blur-sm">
      <div className="lg:w-[80%] w-[95%] flex h-[100%] justify-between rounded-b-2xl px-5 py-1 ">
        <div className=" w-[50%] lg:w-[15%] h-[100%] flex justify-center items-center cursor-pointer">
          <img src={logoLight} className=" h-[35px]" alt="" />
        </div>

        <div className=" w-[20%] lg:w-[80%] flex justify-end">
          <div className="flex lg:hidden justify-center items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-[30px] h-[30px] text-[#ff0b55] " />
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
  );
};

export default Header;

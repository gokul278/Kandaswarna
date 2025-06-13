import {
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import logoLight from "../../assets/Logo/logo-light.png";
import logo from "../../assets/Logo/Logo.png";
import { useNavigate } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[100%] relative bg-[#123f49] backdrop-blur-sm flex justify-center items-center border-b-1 border-[#fff] z-0">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-center items-center py-10 lg:py-5">
          <div className="w-[100%] lg:w-[45%] flex gap-3 justify-start">
            <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
              <Facebook className="w-[20px] h-[20px] mr-[1px] text-[#fff] group-hover:text-[#777] transition-all duration-300" />
            </div>
            <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
              <Twitter className="w-[20px] h-[20px] text-[#fff]  group-hover:text-[#777] transition-all duration-300 " />
            </div>
            <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
              <Youtube className="w-[20px] h-[20px] text-[#fff] group-hover:text-[#777] transition-all duration-300" />
            </div>
            <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
              <Linkedin className="w-[20px] h-[20px] text-[#fff] group-hover:text-[#777] transition-all duration-300" />
            </div>
          </div>
          <div className="w-[100%] lg:w-[55%]  flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[100%] lg:w-[50%] flex gap-4 mt-8 lg:mt-0 justify-start lg:justify-end">
              <div className="h-[40px] flex justify-center items-center">
                <Phone className="w-[35px] h-[35px] mt-[5px] text-[#fff]" />
              </div>
              <div className="h-[40px] flex flex-col justify-center ">
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="h-[20px] text-[#fff] font-[Poppins] font-[700] text-[15px]"
                >
                  +91 9842653413
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="h-[20px] text-[#fff] font-[Poppins] font-[400] text-[15px]"
                >
                  Any questions? Call us.
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex justify-start lg:justify-end gap-4 mt-8 lg:mt-0">
              <div className="h-[40px] flex justify-center items-center">
                <MapPin className="w-[35px] h-[35px] mt-[5px] text-[#fff]" />
              </div>
              <div className="h-[40px] flex flex-col justify-center ">
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="h-[20px] text-[#fff] font-[Poppins] font-[700] text-[15px]"
                >
                  19th West Street, Apt 84
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="h-[20px] text-[#fff] font-[Poppins] font-[400] text-[15px]"
                >
                  San Francisco, CA 94103
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#123f49] backdrop-blur-sm flex justify-center items-center border-b-1 border-[#fff]">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between py-15">
          <div className="w-[100%] lg:w-[30%]">
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[#fff] flex flex-row  text-[18px] font-[Poppins] font-[700]"
            >
              <span>
                <img src={logo} className=" h-[40px] w-[40px]" alt="" />{" "}
              </span>
              <span className="mt-2">KANDASWARNA</span>
            </div>
            <div className="w-[100%] flex mt-5">
              <div className="w-[30%] bg-[#8db580] h-[3px]"></div>
              <div className="w-[70%] bg-[#fff] h-[3px]"></div>
            </div>

            <div
              style={{ fontFamily: "Poppins" }}
              className="mt-5 text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              rem earum minima voluptatibus odit cumque exercitationem placeat
              deserunt corporis quos! Odio iure molestias eum deserunt dolor.
              Magni perspiciatis reprehenderit eos.
            </div>
          </div>
          <div className="w-[30%] flex flex-col mt-10 lg:mt-0">
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#fff] text-[18px] font-[Poppins] font-[700]"
            >
              MENU
            </div>
            <div className="w-[100%] flex mt-5">
              <div className="w-[30%] bg-[#8db580] h-[3px]"></div>
              <div className="w-[70%] bg-[#fff] h-[3px]"></div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-7 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                HOME
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                SERVICES
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                PRODUCTS
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                CONTACT US
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col mt-10 lg:mt-0">
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#fff] text-[18px] font-[Poppins] font-[700]"
            >
              SERVICES
            </div>
            <div className="w-[100%] flex mt-5">
              <div className="w-[30%] bg-[#8db580] h-[3px]"></div>
              <div className="w-[70%] bg-[#fff] h-[3px]"></div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="relative group mt-7 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                Textiles
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                Retail Mall
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                Construction
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#fff] backdrop-blur-sm flex justify-center items-center border-b-1 border-[#fff]">
        <div
          style={{ fontFamily: "Poppins" }}
          className="w-[90%] lg:w-[80%] flex py-5 text-[#7d7a7a] font-[Poppins] font-[400] text-[12px]"
        >
          Copyright © 2025, Kandaswarna Groups
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <section
        className="w-full bg-black m-auto grid lg:grid-cols-3 grid-col-1
      justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10"
      >
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold font-ubuntu text-[40px] leading-[50px]">
            Let's Start working togather get in touch!
          </h1>
          <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black">
            Get Started Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Contact Information
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3">
              <FaMapMarkedAlt className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                567 University Road, Islamia College Peshawer Kp PAKISTAN
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaPhoneVolume className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                +92 3368865717
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoIosMailOpen className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                zohaiby737@gmail.com
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime className="text-limegreen size-8" />
              <span className="text-[17px] font-ubuntu text-slate-100">
                10AM to 11PM
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Subscribe Newsletter
          </h1>
          <p className="text-[16px] font-ubuntu text-slate-100">
            Loram ipsum dolar sit amet consectetur adipisicing elit. At,ex.
          </p>
          <div className="flex flex-col justify-center items-start gap-6 w-full">
            <input
              type="email"
              placeholder="Enter your valid email"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu text-white"
            />
            <button className="bg-limegreen px-6 py-4 rounded-xl text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-black m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6">
        <div>
          <h1 className="text-white text-[17px] font-ubuntu text-center">
            Copyright 2024, Web Pulse, All Rights Reserved
          </h1>
        </div>
        <div>
          <p className="text-white text-3xl text-center font-ubuntu font-bold">
            Web
            <span className="text-limegreen italic"> Pulse</span>
          </p>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-4">
          <FaFacebook className="text-limegreen size-6" />
          <FaInstagram className="text-limegreen size-6" />
          <FaYoutube className="text-limegreen size-6" />
          <FaTwitter className="text-limegreen size-6" />
        </div>
      </section>
      <div id="icon-box" className="bg-limegreen to-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <Link to='hero' spy={true} offset={-100} smooth={true}><FaArrowUp className="w-[35px] h-[35px]"/></Link>
      </div>
    </>
  );
};

export default Footer;

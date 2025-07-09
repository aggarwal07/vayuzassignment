"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <div className="xl:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl focus:outline-none"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-[var(--background)] border-r border-[#FFFFFF33] 
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 xl:static xl:flex`}
      >
        <div className="flex flex-col items-center p-5 px-4 xl:px-8 h-full w-64">
          <Image
            alt="Vayuz Logo"
            src="/images/vayuzLogo.png"
            height={130}
            width={130}
          />
          <button className="mt-8 border border-white py-2 2xl:py-3 px-4 2xl:px-6 uppercase rounded-full font-bold max-2xl:text-sm">
            Contact Us
          </button>
          <ul className="w-full mt-8 flex flex-col gap-8 list-none text-sm xl:text-[15px] font-medium">
            <li>App Development</li>
            <li>Challenges</li>
            <li>Hire Developer</li>
            <li>Community</li>
          </ul>
          <div className="mt-8">
            <Image
              alt="Thumbnail"
              src="/images/pcThumbnail.jpg"
              className="w-full rounded-sm"
              height={130}
              width={130}
            />
            <p className="mt-2 text-sm font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit sasd
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Accordian from "./Accordian";

const HomePage = () => {
  return (
    <div className="py-6 bg-[var(--background)] px-4">
      {/* section 1 starts */}
      <div className="flex justify-between items-center">
        <div className="w-[35%] font-medium">
          <p className="text-[43px] fontPlayfair">
            Unlock the Potential of Flutter
          </p>
          <p className=" text-xl mt-4">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="bg-[#08A7CE] rounded-full uppercase px-7 py-3 mt-14 font-bold">
            Upgrade Your Tech
          </button>
        </div>
        <div className="w-[63%] relative">
          <img
            src="/images/codeImage.jpg"
            alt="codeImage"
            className="w-[80%] h-auto rounded-md"
          />
          <img
            src="/images/snippet1.png"
            alt="snippet1"
            className="w-[43%] h-auto absolute top-52 right-0 rounded-md"
          />
          <img
            src="/images/snippet2.png"
            alt="snippet2"
            className="w-[43%] h-auto relative -top-18 left-60 rounded-md"
          />
        </div>
        <div></div>
      </div>
      {/* section 1 ends */}

      {/* section 2 starts */}
      <div className="flex justify-between mt-24 items-center">
        <div>
          <p className="text-[40px] font-medium fontPlayfair">
            Flutter's <br /> Dawn
          </p>
          <p className="font-semibold">History of flutter</p>
        </div>
        <div className="w-[35%]">
          <p className="font-semibold">
            Uncover the fascinating story of Flutter in 'Flutter's Dawn: History
            of Flutter.' From humble origins to global acclaim, delve into its
            captivating narrative. Explore milestones, triumphs, and challenges.
            Whether tech enthusiast or curious mind, join us on this captivating
            journey!{" "}
            <span className=" cursor-pointer text-cyan-500">
              Click to begin!
            </span>
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#08A7CE] px-7 py-3 rounded-full font-bold place-self-end">
          BEGIN <GoArrowUpRight size={23} />
        </button>
      </div>
      {/* section 2 ends */}

      {/* section 3 starts */}
      <div className="flex flex-col items-center mt-24">
        <p className="fontPlayfair text-[40px]">Our Dynamic Services Suite!</p>
        <p className="font-medium text-[22px] mt-3">
          Embrace Innovation: Let's Create Together!
        </p>
        <p className="font-medium text-[14px] mt-4">
          Step into innovation! Explore our range of services and let's create
          something extraordinary together.
        </p>
        <p className="font-medium text-[14px]">
          Your vision, our expertise. Let's begin!
        </p>

        <div className="mt-18 flex justify-between w-full">
          <div className="w-[59%]">
            <Accordian />
          </div>
          <div className="w-[38%]">
            <Image
              alt="Details"
              src="/images/displayMid.jpg"
              className="w-full rounded-sm h-[550px] object-cover"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
      {/* section 3 ends */}

      {/* section 4 starts */}
      <div className="mt-24 flex justify-between w-full">
        <div className="w-[60%] font-semibold h-[55vh] flex flex-col justify-between">
          <ul className="flex list-none gap-10">
            <li>Events</li>
            <li>Gen Ai</li>
            <li>Careers</li>
            <li>Case Study</li>
            <li>SME Talks</li>
          </ul>
          <div className="text-[28px] w-[50%]">
            <p>
              For any collaborative projects or enquiries feel free to connect
              with us.
            </p>
          </div>
          <ul className="flex list-none gap-10 text-[14px] font-medium">
            <li>About</li>
            <li>Insights</li>
            <li>Community</li>
            <li>Privacy & Policies</li>
          </ul>
        </div>
        <div className="w-[30%] flex flex-col items-end">
          <p className="font-medium text-[75px] text-right fontPlayfair">
            Connect <br /> With Us
          </p>
          <form className="flex flex-col gap-6 w-full mt-12">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b-2 border-[#FFFFFF33] bg-transparent focus:outline-none focus:border-cyan-500 py-2 text-sm"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 border-[#FFFFFF33] bg-transparent focus:outline-none focus:border-cyan-500 py-2 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-b-2 border-[#FFFFFF33] bg-transparent focus:outline-none focus:border-cyan-500 py-2 text-sm"
            />
            <button
              type="submit"
              className="mt-4 border border-[#08A7CE] bg-[#08A7CE66] font-semibold px-4 py-2 rounded-full item-end w-36"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      {/* section 4 ends */}
    </div>
  );
};

export default HomePage;

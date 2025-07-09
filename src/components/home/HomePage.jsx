import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Accordian from "./Accordian";

const HomePage = () => {
  return (
    <div className="py-6 bg-[var(--background)] px-4">
      {/* section 1 starts */}
      <div className="flex max-md:flex-col justify-between items-center">
        <div className="md:w-[35%] font-medium max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <p className="text-3xl sm:text-[38px] xl:text-[43px] fontPlayfair">
            Unlock the Potential of Flutter
          </p>
          <p className="sm:text-lg xl:text-xl mt-4">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="bg-[#08A7CE] rounded-full uppercase px-7 py-3 mt-5 md:mt-14 font-bold">
            Upgrade Your Tech
          </button>
        </div>
        <div className="md:w-[50%] min-[1032px]:w-[63%] relative max-md:mt-10">
          <img
            src="/images/codeImage.jpg"
            alt="codeImage"
            className="h-auto rounded-md"
          />
          <img
            src="/images/snippet1.png"
            alt="snippet1"
            className="w-[50%] h-auto absolute top-40 min-[1352px]:top-52 -right-14 rounded-md max-[1032px]:hidden"
          />
          <img
            src="/images/snippet2.png"
            alt="snippet2"
            className="w-[50%] h-auto relative -top-18 left-60 rounded-md max-[1032px]:hidden"
          />
        </div>
        <div></div>
      </div>
      {/* section 1 ends */}

      {/* section 2 starts */}
      <div className="flex max-md:flex-col justify-between mt-24 items-center">
        <div>
          <p className="text-[40px] font-medium fontPlayfair max-md:text-center">
            Flutter's <br /> Dawn
          </p>
          <p className="font-semibold max-md:mt-3">History of flutter</p>
        </div>
        <div className="md:w-[35%] max-md:mt-5">
          <p className="font-semibold max-md:text-center">
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

        <button className="flex items-center gap-2 bg-[#08A7CE] px-7 py-3 rounded-full font-bold max-md:mt-5 md:place-self-end">
          BEGIN <GoArrowUpRight size={23} />
        </button>
      </div>
      {/* section 2 ends */}

      {/* section 3 starts */}
      <div className="flex flex-col items-center mt-24 max-md:text-center">
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
          <div className="md:w-[59%]">
            <Accordian />
          </div>
          <div className="max-md:hidden w-[38%]">
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
      <div className="mt-24 flex max-md:flex-col justify-between w-full">
        <div className="md:w-[60%] font-semibold md:h-[55vh] flex flex-col max-md:gap-5 justify-between">
          <ul className="flex list-none gap-10 max-md:text-sm">
            <li>Events</li>
            <li>Gen Ai</li>
            <li>Careers</li>
            <li>Case Study</li>
            <li>SME Talks</li>
          </ul>
          <div className="text-lg max-md:text-center md:text-[28px] md:w-[50%]">
            <p>
              For any collaborative projects or enquiries feel free to connect
              with us.
            </p>
          </div>
          <ul className="flex list-none gap-10 text-xs md:text-[14px] font-medium">
            <li>About</li>
            <li>Insights</li>
            <li>Community</li>
            <li>Privacy & Policies</li>
          </ul>
        </div>
        <div className="md:w-[30%] flex flex-col items-end max-md:mt-10">
          <p className="font-medium text-5xl md:text-[75px] text-right fontPlayfair">
            Connect <br /> With Us
          </p>
          <form className="flex flex-col gap-6 w-full mt-5 md:mt-12">
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

import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-[var(--background)] p-5 px-8 border-r border-[#FFFFFF33]">
      <Image
        alt="Vayuz Logo"
        src="/images/vayuzLogo.png"
        height={130}
        width={130}
      />
      <button className="mt-8 border border-white py-3 px-6 uppercase rounded-full font-bold">
        Contact Us
      </button>
      <ul className="w-full mt-8 flex flex-col gap-8 list-none text-[15px] font-medium">
        <li>App Development</li>
        <li>Challenges</li>
        <li>Hire Developer</li>
        <li>Community</li>
      </ul>
      <div className="mt-36">
        <Image
          alt="Vayuz Logo"
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
  );
};

export default Sidebar;

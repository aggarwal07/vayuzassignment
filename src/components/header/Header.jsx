import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  return (
    <div className="border-b border-[#FFFFFF33] px-4 py-6 bg-[var(--background)] flex gap-15 items-center">
      <div className="min-[1029px]:hidden">
        <Sidebar />
      </div>
      <p className="font-semibold max-md:text-center max-md:text-sm">
        Securing Your Flutter App: Best Practices and Techniques
      </p>
    </div>
  );
};

export default Header;

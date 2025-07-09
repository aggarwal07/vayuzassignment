import React from "react";

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
    </div>
  );
};

export default HomePage;

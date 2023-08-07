import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('../public/assets/Ulaanbaatar2.jpg')] bg-cover bg-center">
        <div className="w-screen h-screen bg-gradient-to-b from-black/90 to-black/30 absolute flex justify-center items-center">
          <div className="top-0 w-full h-24 md:h-48 absolute flex justify-between">
            <div className="w-24 h-24 md:w-48 md:h-48 flex justify-center items-center">
              <Link
                className="w-10 h-10 md:w-16 md:h-16 bg-[url('../public/assets/logo.png')] bg-contain hover:scale-105"
                href={"/download"}
              ></Link>
            </div>
            <div className="w-24 h-24 md:w-48 md:h-48 flex justify-center items-center">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[url('../public/assets/settings.png')] bg-contain hover:scale-105 duration-200"></div>
            </div>
          </div>
          <div className="w-80 h-80 md:w-[600px]  justify-center">
            <div className="w-full h-48 border-b-2 border-gray-500 flex justify-center flex-col">
              <div className="text-2xl md:text-3xl text-white font-semibold flex justify-center">
                Welcome back to GARHU!
              </div>
              <div className="w-full h-12 flex justify-center">
                <button className="w-60 h-12 bg-white mt-6 rounded-md bg-gradient-to-r from-[#D01D4F] to-[#BA1F5A] flex justify-center items-center hover:scale-105 duration-150">
                  <Link className="text-white font-semibold" href={"/app"}>
                    Download App
                  </Link>
                </button>
              </div>
            </div>
            <div className="w-full h-16 flex items-center justify-center flex-row space-x-4">
              <div className="text-lg md:text-2xl font-semibold text-[#b8b8b8]">
                Add business?
              </div>
              <button className="text-lg md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#E5193E] to-[#8C256D] hover:scale-105 duration-150">
                Business site
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

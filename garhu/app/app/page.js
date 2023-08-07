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
          </div>
          <div className="w-40 h-96 md:space-x-40 md:space-y-0 flex justify-center items-center flex-col md:flex-row">
            <button className="w-40 h-52 md:w-52 md:h-80 flex justify-center flex-col hover:scale-105 duration-150">
              <div className="w-20 h-20 md:w-52 md:h-52 bg-[url('../public/assets/square.png')] bg-contain bg-no-repeat flex justify-center items-center ml-10 md:ml-0">
                <div className="w-10 h-10 md:w-28 md:h-28 bg-[url('../public/assets/playstore.png')] bg-contain bg-no-repeat ml-2 md:ml-4"></div>
              </div>
              <div className="w-40 md:w-52 md:h-20 text-[#BCBCBC] text-lg md:text-2xl font-medium mt-3 md:mt-8">
                PLAY STORE
              </div>
            </button>
            <button className="w-full h-52 md:w-52 md:h-80 flex justify-start flex-col  hover:scale-105 duration-150">
              <div className="w-20 h-20 md:w-52 md:h-52 bg-[url('../public/assets/appstore.png')] bg-contain bg-no-repeat flex justify-center items-center ml-10 md:ml-0"></div>
              <div className="w-40 md:w-52 md:h-20 text-[#BCBCBC] text-lg md:text-2xl font-medium mt-3 md:mt-8">
                APP STORE
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

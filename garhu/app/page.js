import React from "react";
import img1 from "../public/assets/Ulaanbaatar2.jpg";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="w-screen h-screen bg-[url('../public/assets/Ulaanbaatar2.jpg')] bg-cover bg-center">
        <div className="w-screen h-screen bg-gradient-to-b from-black/90 to-black/30 absolute flex justify-center items-center">
          <Link
            className="w-96 h-60 md:w-[600px] flex items-center justify-center hover:scale-105 duration-300"
            href={"/download"}
          >
            <div className="w-40 h-40 bg-[url('../public/assets/logo.png')] bg-contain"></div>
            <div className="w-0 text-[0px] ml-0 lg:m-16 h-0 lg:text-6xl lg:h-16 lg:w-60  text-white text-6xl font-bold">
              {" "}
              GARHU!
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;

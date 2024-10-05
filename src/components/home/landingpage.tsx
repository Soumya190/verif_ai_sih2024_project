"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="grid place-content-center h-screen bg-gradient-to-b from-[#015DE7] to-[#061388] gap-5 p-4 md:p-0">
        <div className="grid place-content-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            Welcome to
          </h1>
        </div>

        <div className="grid place-content-center">
          <Image
            src="/images/Verif@3x.svg"
            alt="Verif ai image"
            width={457}
            height={156}
            className="w-[70%] sm:w-[60%] md:w-[457px] mx-auto ml-[0rem]"
          />
          <Image
            className="mt-[-3rem] sm:mt-[-18rem]  md:mt-[-10rem] lg:mt-[-14rem] w-[80%] sm:w-[70%] md:w-[80%] lg:w-auto mx-auto"
            src="/images/img1.svg"
            alt="Verif ai image"
            width={794}
            height={277}
          />
        </div>

        {/* Description paragraph */}
        <p className="text-center font-semibold text-xl sm:text-2xl text-white mt-5">
          Streamlined verification for all your <br /> important documents.
        </p>

        {/* Buttons section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-8">
          <div className="w-full sm:w-[250px] md:w-[300px] h-[70px] sm:h-[80px] bg-white rounded-full grid place-content-center shadow-lg">
            <Link href="/signup-form-demo">
              <button className="text-[16px] sm:text-[18px] font-semibold text-[#015DE7]">
                Register
              </button>
            </Link>
          </div>

          <div className="w-full sm:w-[250px] md:w-[300px] h-[70px] sm:h-[80px] bg-[#051A92] rounded-full grid place-content-center shadow-lg">
            <Link href="/login">
              <button className="text-[16px] sm:text-[18px] font-semibold text-white">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

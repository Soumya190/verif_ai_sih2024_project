"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Login from "@/app/login/page";

const Page = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setShowNextPage(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const NextPageContent = () => <Login />;

  return (
    <>
      {!showNextPage ? (
        <div className="grid place-content-center h-screen overflow-hidden bg-gradient-to-b from-[#015DE7] to-[#061388] gap-5 p-4 md:p-0">
          <div className="grid place-content-center gap-[5rem] md:gap-[10rem]">
            {" "}
            <div className="grid gap-9">
              <h1 className="text-white text-3xl sm:text-4xl font-normal text-center">
                Welcome to
              </h1>

              <div className="grid place-content-center relative">
                <div
                  className={`transition-transform duration-1000 ${
                    isAnimating
                      ? "scale-50 translate-x-[8rem] translate-y-[-8rem] md:translate-x-[16rem] md:translate-y-[-16rem] absolute top-0 right-0" // Different translate values for mobile and tablet
                      : "scale-100 translate-x-0 translate-y-0"
                  }`}
                >
                  <Image
                    src="/images/Verif@3x.svg"
                    alt="Verif AI image"
                    width={457}
                    height={156}
                    className="w-[200px] h-auto md:w-[321px]" // Smaller width for mobile
                  />
                  <Image
                    className="w-[18rem] sm:w-[24rem] md:w-[30rem] mt-[-5rem] md:mt-[-8rem] ml-[1rem] md:ml-[2rem]" // Adaptive width and margins
                    src="/images/img1.svg"
                    alt="Verif AI image"
                    width={794}
                    height={277}
                  />
                </div>
              </div>
            </div>
            <p className="text-center font-semibold text-lg sm:text-xl md:text-2xl text-white mt-3 sm:mt-5">
              Streamlined verification for all your important documents.
            </p>
          </div>
        </div>
      ) : (
        <NextPageContent />
      )}
    </>
  );
};

export default Page;

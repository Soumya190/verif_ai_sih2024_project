"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Login from '@/app/login/page';

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

  const NextPageContent = () => (
    <Login/>
  );

  return (
    <>
      {!showNextPage ? (
        <div className="grid place-content-center h-screen bg-gradient-to-b from-[#015DE7] to-[#061388] gap-5 p-4 md:p-0">
          <div className="grid place-content-center gap-[10rem]">
            <div className="grid gap-9">
              <h1 className="text-white text-3xl sm:text-4xl font-normal text-center">
                Welcome to
              </h1>

              <div className="grid place-content-center relative">
              <div
                  className={`transition-transform duration-1000 ${
                    isAnimating
                      ? "scale-50 translate-x-[16rem] translate-y-[-16rem] absolute top-0 right-0"
                      : "scale-100 translate-x-0 translate-y-0"
                  }`}
                >
                  <Image
                    src="/images/Verif@3x.svg"
                    alt="Verif AI image"
                    width={457}
                    height={156}
                    className="w-[321px] h-[120.66px]"
                  />
                <Image
                  className="w-[30rem] mt-[-8rem] ml-[2rem]"
                  src="/images/img1.svg"
                  alt="Verif AI image"
                  width={794}
                  height={277}
                />
                </div>
              </div>
            </div>

            <p className="text-center font-semibold text-xl sm:text-2xl text-white mt-5">
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

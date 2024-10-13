"use client";

import { useState } from "react";
import Input from "../../components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Component() {
  const [isAnimating] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();

    if (validateForm()) {
      window.location.href = "/jobs";
    }
  };

  return (
    <>
      <div className="grid gap-5 min-h-screen sm bg-gradient-to-b from-[#015DE7] to-[#061388] px-4 sm:px-6 lg:px-8 place-content-center overflow-hidden">
        <h1 className="text-center text-white text-2xl">Welcome to</h1>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div
            className={`transition-transform duration-1000 ${
              isAnimating
                ? "scale-50 translate-x-[16rem] translate-y-[16rem] absolute top-0 left-0"
                : "scale-100 translate-x-0 translate-y-0"
            }`}
          >
            <Image
              src="/images/Verif@3x.svg"
              alt="Verif ai image"
              width={457}
              height={156}
              className="w-[100px] sm:w-[150px] md:h-[3rem] md:w-[180px] lg:w-[190px] h-[30px] lg:h-auto"
            />
            <Image
              src="/images/img1.svg"
              alt="Verif ai image"
              width={457}
              height={156}
              className="w-[150px] sm:w-[200px] md:mt-[-7.5rem]   md:w-[250px] lg:mt-[-7rem] lg:ml-[1rem] lg:w-[300px] h-[6rem] sm:h-[8rem] md:h-[15rem] lg:h-[12rem]"
            />
          </div>
        </div>

        <div className="flex justify-center overflow-hidden">
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md w-full max-w-[25rem] sm:max-w-md lg:max-w-lg overflow-hidden">
            <div className="flex items-center mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Log In
              </h1>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="peer w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:border-blue-600"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute bg-white px-1 text-gray-500 duration-300 opacity-80 text-base transform -translate-y-6 scale-75 top-2 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Must be at least 8 characters"
                  className="peer w-full border-2 border-gray-300 p-3 rounded-xl focus:outline-none focus:border-blue-600"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute bg-white px-1 text-gray-500 duration-300 opacity-80 text-base transform -translate-y-6 scale-75 top-2 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <div className="grid place-content-center">
                <button
                  onClick={handleContinue}
                  className="w-[13rem] bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
                >
                  Continue
                </button>
              </div>
              <div className="flex justify-start">
                <div>
                  <p className="opacity-45">New to VerifAI?</p>
                </div>
                <Link href="/signup-form">
                  <div>
                    <button className="text-blue-600">Register</button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="grid place-content-center">
          <p className="text-white text-center text-lg">
            Efficiency meets intelligence—verifAI with confidence.
          </p>
        </div>
      </div>
    </>
  );
}

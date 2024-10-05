"use client";

import { useState } from "react";
import Input from "../../components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link"; 
import React from "react";
import Image from "next/image";

export default function Component() {
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

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (validateForm()) {
      // If the form is valid, navigate to the jobs page
      window.location.href = "/jobs"; // Change this to Link if you want to use Next.js routing
    }
  };

  return (
    <>
      <div className="grid gap-5 min-h-screen bg-gradient-to-b from-[#015DE7] to-[#061388] px-4 sm:px-6 lg:px-8 place-content-center h-screen">
        <h1 className="text-center text-white text-2xl">Welcome to</h1>
        <div className="flex-col justify-center items-center">
        <Image
          src="/images/Verif@3x.svg"
          alt="Verif ai image"
          width={457}
          height={156}
          className="w-3/4 sm:w-1/2 md:w-[190px]"
        />
        <Image
          src="/images/img1.svg"
          alt="Verif ai image"
          width={457}
          height={156}
          className="w-3/4 sm:w-1/2 md:w-[300px] mt-[-5rem] ml-[0.8rem]"
        />
        </div>
        <div className="flex ">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-[25rem] max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Log In Header Section */}
            <div className="flex items-center mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Log In
              </h1>
            </div>

            {/* Form Section */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="peer w-full border-2 border-gray-300 opacity-100 p-3 rounded-xl focus:outline-none focus:border-blue-600"
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
                  className="peer w-full border-2 border-gray-300 p-3 opacity-100 rounded-xl focus:outline-none focus:border-blue-600"
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
                <div>
                  <button className="text-blue-600">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Input from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword]=useState<boolean>(false);
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState(20);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [, setError] = useState<string | null>(null);
  const correctPassword = "8228";

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

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateCode = () => {
    return code.every((digit) => digit !== "");
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateForm()) {
      setCurrentStep(2);
      startTimer();
    } else if (currentStep === 2) {
      if (validateCode()) {
        if (code.join("") === correctPassword) {
          setCurrentStep(3);
          setError(null);
        } else {
          setError("Incorrect code. Please try again.");
        }
      } else {
        alert("Please enter all digits of the code.");
      }
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const startTimer = () => {
    setTimer(20);
    setIsResendDisabled(true);
  };

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleResendCode = () => {
    startTimer();
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1); 
    }
  };

  return (
    <>
      <div className="grid grid-col  bg-gradient-to-b from-[#015DE7] to-[#061388] h-screen place-content-center">
        {/* <div className="grid place-content-start"> */}
          <Link href="#">
          <Image
            className="w-3/4 sm:w-2/3 md:w-2/3 lg:w-auto lg:h-[2rem] ml-[-30rem] mt-[-6rem]"
            src="/images/Vector@.svg"
            alt="Arrow image"
            width={794}
            height={277}
            onClick={goToPreviousStep}
          />
          </Link>
        {/* </div> */}
        {currentStep <3 &&
        // <div className="flex justify-center items-center min-h-screen  px-4">
        <div className="bg-white grid place-content-center h-screen p-6 rounded-xl shadow-md w-full max-w-md sm:max-w-lg lg:w-[28rem] lg:max-h-[28.5rem]">
          {currentStep < 4 && (
            <> 
              <div className="grid place-content-center gap-2 ">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  {currentStep === 1
                    ? "Create your account"
                    : currentStep === 2
                    ? "Please check your email"
                    : ""}{" "}
                </h1>

                <p className="text-gray-600 mb-4 sm:mb-6">
                  {currentStep === 1
                    ? "We use your email to identify your account"
                    : currentStep === 2
                    ? `We've sent a code to ${email}`
                    : ""}{" "}
                </p>
              </div>
            </>
          )}

          {currentStep === 1 &&(
            <form className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="peer w-full border-2  border-gray-300 opacity-100 p-3 rounded-xl focus:outline-none focus:border-blue-600"
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
                  Create a password
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

              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat password"
                  className="peer w-full border-2 border-gray-300 p-3 opacity-100 rounded-xl focus:outline-none focus:border-blue-600"
                  required
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute bg-white px-1 text-gray-500 duration-300 opacity-80 text-base transform -translate-y-6 scale-75 top-2 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
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

              <p className="text-sm text-gray-500">
                By tapping Continue, you agree to the{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>
              </p>

              <div className="grid place-content-center">
                <Button
                  className="w-[10rem] bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  onClick={handleNextStep}
                >
                  Continue
                </Button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form className="space-y-4">
              <div className="grid grid-cols-4 gap-2 mb-6 place-content-center">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl border-gray-400 border-2 rounded-xl"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    required
                  />
                ))}
              </div>

              <div className="grid-col place-content-center mb-6">
                <div className="flex justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={isResendDisabled}
                    className={`text-blue-600  ${
                      isResendDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:underline"
                    }`}
                  >
                    Send code again
                  </button>
                  <span className="text-gray-600">
                    {timer.toString().padStart(2, "0")}:00
                  </span>
                </div>
              </div>

              <div className="grid place-content-center">
                <Button
                  className="w-[15rem]  bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  onClick={handleNextStep}
                >
                  Verify
                </Button>
              </div>
            </form>
          )}
      </div>
      }
      {currentStep === 3 && (
            <>
              <div className="grid place-content-center h-screen gap-10 text-white w-full h-[43.7rem] bg-gradient-to-b from-[#015DE7] to-[#061388]">
                  <div className="grid place-content-center">
                  <Image
                    src="/images/Verif@3x.svg"
                    alt="Verif ai image"
                    width={457}
                    height={156}
                    className="w-3/4 sm:w-1/2 md:w-[300px]"
                  /> 
                  <Image
                    className="mt-[-7rem] w-3/4 sm:w-2/3 lg:w-[450px] ml-6"
                    src="/images/img1.svg"
                    alt="Verif ai image"
                    width={794}
                    height={277}
                  />
                  </div>
                  <div className="grid place-content-center">
                  <Image
                    className=" w-[10rem] sm:w-2/3 lg:w-[100px] ml-4"
                    src="/images/Group 36692@3x.svg"
                    alt="Verif ai image"
                    width={200}
                    height={177}
                  />
                  </div>
                  <p className="font-bold text-center text-2xl">REGISTRATION SUCCESSFULL</p>
                  <div className="flex justify-center items-center">
                    <p className="text-xl">Explore Features: </p>
                    <p className="text-sm font-normal"> Dive into our AI-powered tools that enhance your experience ...</p>
                  </div>
                  <div className="grid place-content-center">
                  <Link href="/jobs">
                  <button className="text-[#061388] rounded-full w-[15rem] h-[3rem]  bg-white">
                    Continue
                  </button>
                </Link>
                  </div>
                </div>
            </>
          )}
      </div>
    </>
  );
}

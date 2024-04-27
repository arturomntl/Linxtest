import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from "react";
// import LiNXLogo from "src/images/LiNXLogo.svg";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid(true); // Reset validation when input changes
  };

  const handleJoinWaitlist = () => {
    // Email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setIsValid(false);
    } else {
      // Proceed with joining waitlist
      console.log("Email joined:", email);
    }
  };

  return (
    <main className="mx-auto">
      <div className="NavBar text-black flex flex-row justify-start xs:justify-end w-5/6 mx-auto">
        <Image
        src="/LiNXLogo.svg"
        alt="LiNX Logo"
        width={100}
        height={24}
        priority
        className="mt-4 mr-auto"
        />
      </div>

      <div className="Header text-black mt-24 px-4">
        <h1 className="text-4xl font-bold text-center md:text-7xl">STORE, SEARCH, CONNECT, FIND</h1>
        <p className="mx-auto w-5/6 text-md text-center mt-4 md:text-xl font-light">LiNX connects all saved content for users to search through and connect with like-minded people</p>
      </div>
  
      <div className="flex flex-col mt-12 md:flex-row justify-center">
        <div className="md:mr-2">
          <input
            type="email"
            placeholder="Enter your email"
            className={`border px-4 py-2 rounded-md w-full md:w-96 text-black mb-4 focus:outline-none ${
              isValid ? "border-black" : "border-red-500"
            }`}
            value={email}
            onChange={handleChange}
          />
        </div>
        {!isValid && <p className="text-red-500 text-sm">Please enter a valid email</p>}
        <div>
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full md:ml-2 md:w-auto"
            onClick={handleJoinWaitlist}
            >
            Join the waitlist
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;

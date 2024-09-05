"use client"
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import lottieJson from '@/public/lottie/hero.json';
const HomePage = () => {
  return (
    <section className="w-full relative bg-white sm:py-16 ">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row lg:items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
             VAGT Security Services
          </h1>
          <p className="max-w-3xl mt-6 text-base font-normal leading-7 text-gray-500">
          To work closely with our customers for providing world-class
          security services with optimized solutions.
          </p>

          <ul className="flex items-left  mt-6 space-x-6 sm:space-x-8">
            <li className="flex items-left">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs font-medium text-gray-900 sm:text-sm">Weekly new articles</span>
            </li>

            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs font-medium text-gray-900 sm:text-sm">Join other 1600+ Devs</span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2">
        <Lottie
  animationData={lottieJson}
  className="w-full h-[400px]" // Using Tailwind classes for size
/>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

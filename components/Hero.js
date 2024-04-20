'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";


const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center font-bold px-12 p-4 text-sm ">
        <div>
        <Link href="https://www.tesla.com/">
      
      <Image
        src="/tesla.svg"
        alt="Tesla Logo"
        width={120}
        height={100}
        className="relative "
      />
    
  </Link>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Vehicle
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Energy
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Charging
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Discovery
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Shop
            </li>
          </ul>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <Link href="/">
              <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <RxQuestionMarkCircled className="w-6 h-6" />
              </li>
            </Link>
            
            <Link href="/">
               <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <CiGlobe className="w-6 h-6" />
               </li>
            </Link>
            
            <Link href="/">
               <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <IoMdContact className="w-6 h-6" />
               </li>
            </Link>
            
          </ul>
        </div>

  <div className="absolute top-40 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
  <h1 className="text-5xl font-light p-2 ml-8">Model Y</h1>
  <h3 className="text-2xl font-semibold ml-10 text-ellipsis">From $29,490*</h3>
  <p className="font-light text-sm">After Federal Tax Credit & Est. Gas Savings</p>
</div>



        <div className="lg:hidden">
          <button className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
            Menu
          </button>
        </div>

        <div
          className={
            nav
              ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
              : "fixed right-[-100%]"
          }
        >

          <ul className="pt-8 px-6">
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Model Shop
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Model 3
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Model X
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Model Y
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 Solar Roof
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Solar Panels
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Existing Inventory
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Used Inventory
            </li>
            </Link>
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 Trade-In
            </li>
            </Link>

            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                 Test Drive
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Insurance
            </li>
            </Link>
            
            <Link href="/">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
                Powerwall
            </li>
            </Link>
            
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col lg:flex-row  justify-center mb-32 space-x-4">
        <button className="pl-24 pr-24 pt-2 pb-2 bg-[#FFFFFFCC] text-[#000000] font-semibold rounded " onclick={handleNav}>Order Now</button>
        <button className="pl-24 pr-24 pt-2 pb-2 bg-[#171A20A6] text-white rounded ">Demo Drive</button>
      </div>

      <p className="absolute bottom-20 font-light text-sm left-1/3">*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</p>
      <Link href="/">
         <p className="absolute bottom-16 font-light text-sm left-1/2 -ml-20 underline underline-offset-4 ">Learn about est. gas savings.</p>
      </Link>
    </div>
  );
};

export default Hero;
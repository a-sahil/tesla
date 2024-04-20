import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";


const Hero = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 flex justify-center mt-10 ">
        {/* 1 */}
      <div className="flex items-center absolute left-0 ml-12 -mt-4">
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
 
 {/* 2 */}
      <div className="hidden lg:inline">
        <ul className="list-none flex flex-row space-x-7 -mt-6  text-balance font-semibold">
          <li>Vehicles</li>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discovery</li>
          <li>Shop</li>
        </ul>
      </div>
 
    {/* 3 */}
    <div className=" hidden lg:inline absolute right-0  items-center space-x-4 mr-12 -mt-6">
  <ul className="list-none flex flex-row">
    <Link href="https://www.tesla.com/">
    <li className="mr-3">
      <RxQuestionMarkCircled className="w-6 h-6" />
    </li>
    </Link>

    <Link href="https://www.tesla.com/">
    <li className="mr-3">
      <CiGlobe className="w-6 h-6" />
    </li>
    </Link>
    
    <Link href="https://www.tesla.com/">
    <li>
      <IoMdContact className="w-6 h-6" />
    </li> 
    </Link>

  </ul>
</div>

<div className="lg:hidden">
<button className="inline-flex  rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
            Menu
          </button>
</div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-32 space-x-4">
        <button className="pl-24 pr-24 pt-2 pb-2 bg-[#FFFFFFCC] text-[#000000] font-semibold">Order Now</button>
        <button className="pl-24 pr-24 pt-2 pb-2 bg-[#171A20A6] text-white rounded ">Demo Drive</button>
      </div>

      <p className="absolute bottom-20 font-light text-sm left-1/3">*Price before incentives is $44,990, excluding taxes and fees. Subject to change.</p>
      <Link href="/">
         <p className="absolute bottom-16 font-light text-sm left-1/2 -ml-20 underline underline-offset-4 ">Learn about est. gas savings.</p>
      </Link>



      </div>
      
      
   
  )
}

export default Hero
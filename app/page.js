import React from 'react';

import Navbar from "../components/Hero"; 
import modal from "../components/modal";
export default function Home() { 
  return (
    <div> 
     
      <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png" alt="bg-img" className="h-screen w-full object-cover" />
      <Navbar />
      <modal />
    </div>
  );
}


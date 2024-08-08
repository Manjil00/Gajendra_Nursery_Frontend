import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './index.css';

const Product = () => {
  return (
<div className="main-container">
  {/* NAVIGATION BAR */}
  <Nav/>
  
  <div className="body flex w-full h-[100%]  relative z-[-1]">

    <div className="sidebar h-[100%] w-[20%] md:w-[15%] bg-green-700">
      <ul className='flex flex-col justify-evenly items-center my-10 gap-5'>

        <li className='text-md md:text-3xl text-bgcolor font-LogoFont underline font-semibold'>Products</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Indoor</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Outdoor</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Seasonal</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Others</li>

        <li className='text-md md:text-3xl text-bgcolor font-LogoFont underline'>Decorations</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Stage</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Backdrop</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Mandap</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Entrance</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Photo-Booth</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Name-Board</li>

        <li className='text-md md:text-3xl text-bgcolor font-LogoFont underline'>Ceramics</li>
        <li className='text-md md:text-3xl text-bgcolor font-LogoFont underline'>Fertilizers</li>
        
        <li className='text-md md:text-3xl text-bgcolor font-LogoFont underline'>Gardening</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Rock Garden</li>
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Garden Maintainence</li>



      </ul>



      
    </div>

    <div className="section2">

    </div>

    
  </div>

<Footer/>
  {/* maincontrainer div below */}
</div>
  )
}

export default Product

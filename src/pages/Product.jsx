import React from 'react';

// Components
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './index.css';

// ICONS
import { CiSearch } from "react-icons/ci";


const Product = () => {
  return (
<div className="main-container">
  {/* NAVIGATION BAR */}
  <Nav/>
  
  <div className="body flex w-full h-[100%]  relative z-[-1]">

    <div className="sidebar h-[100%] w-[20%] md:w-[15%] bg-green-700">
      <ul className='flex flex-col justify-evenly items-center my-10 gap-5 mb-[200px] px-5 '>

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
        <li className='text-sm md:text-xl text-appleblack font-writingFont '>Maintainence</li>
      </ul>

    </div>

    <div className="section2 w-[80%] h-full gap-10">

      <div className="searchbar h-[30px] md:h-[50px] w-[70%] bg-green-700  rounded-md mx-auto my-8 
      hover:cursor-text  flex items-center justify-between px-5">

        <input className='bg-transparent text-sm md:text-xl ' placeholder='Search for Products'></input>
        <CiSearch className='h-[20px] w-[20px] md:h-[30px] md:w-[30px]'/>
      </div>

      <div className="cardPlace grid grid-cols-2 md:grid-cols-3 h-auto w-full md:mx-10 gap-5 md:gap-10 p-3">
        
      <div className="card bg-black w-[120px] h-[160px] md:h-[400px] md:w-[300px] rounded-xl ml-3 drop-shadow-2xl">
        <img src='./images/luckybamboo.jpg' className=' rounded-xl h-[90px] md:h-[250px] mx-auto w-[90%] mt-2' alt='Card1'></img>
        <h1 className=''>Lucky Bamboo</h1>

        {/* INCR AND DECR */}
        <button className='button-default'>Add to Cart</button>
      </div>

      <div className="card bg-black w-[120px] h-[160px] md:h-[400px] md:w-[300px] rounded-xl ml-3 drop-shadow-2xl">
        <img src='./images/snakeplant.jpg' className=' rounded-xl h-[90px] md:h-[250px] mx-auto w-[90%] mt-2' alt='Card1'></img>
        <h1 className=''>Lucky Bamboo</h1>

        {/* INCR AND DECR */}
        <button className='button-default'>Add to Cart</button>
      </div>
      <div className="card bg-black w-[120px] h-[160px] md:h-[400px] md:w-[300px] rounded-xl ml-3 drop-shadow-2xl">
        <img src='./images/succulent.jpg' className=' rounded-xl h-[90px] md:h-[250px] mx-auto w-[90%] mt-2' alt='Card1'></img>
        <h1 className=''>Lucky Bamboo</h1>




        {/* INCR AND DECR */}
        <button className='button-default'>Add to Cart</button>
      </div>
      <div className="card bg-black w-[120px] h-[160px] md:h-[400px] md:w-[300px] rounded-xl ml-3 drop-shadow-2xl">
        <img src='./images/succulent.jpg' className=' rounded-xl h-[90px] md:h-[250px] mx-auto w-[90%] mt-2' alt='Card1'></img>
        <h1 className=''>Lucky Bamboo</h1>

        {/* INCR AND DECR */}
        <button className='button-default'>Add to Cart</button>
      </div>
      <div className="card bg-black w-[120px] h-[160px] md:h-[400px] md:w-[300px] rounded-xl ml-3 drop-shadow-2xl">
        <img src='./images/snakeplant.jpg' className=' rounded-xl h-[90px] md:h-[250px] mx-auto w-[90%] mt-2' alt='Card1'></img>
        <h1 className=''>Lucky Bamboo</h1>

        {/* INCR AND DECR */}
        <button className='button-default'>Add to Cart</button>
      </div>
      <div className="card bg-black w-[120px] h-[160px] md:h-[400px] md:w-[300px] rounded-xl ml-3 drop-shadow-2xl">
        <img src='./images/luckybamboo.jpg' className=' rounded-xl h-[90px] md:h-[250px] mx-auto w-[90%] mt-2' alt='Card1'></img>
        <h1 className=''>Lucky Bamboo</h1>

        {/* INCR AND DECR */}
        <button className='button-default'>Add to Cart</button>
      </div>

        

      </div>
      


    </div>

    
  </div>

<Footer/>
  {/* maincontrainer div below */}
</div>
  )
}

export default Product

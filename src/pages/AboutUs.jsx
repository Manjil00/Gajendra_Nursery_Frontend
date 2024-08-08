import React from 'react';

import Footer from '../components/Footer';
import MarqueeAboutUs from '../components/MarqueeAboutUs';
import Nav from "../components/Nav";
import './index.css';


const AboutUs = () => {
  return (
    <div className='main-container'>
    <Nav/>

    <div className="Section1  bg-bgcolor h-auto md:h-auto w-full p-5 ">
    <h1 className="text-center font-LogoFont text-3xl md:text-5xl md:mt-5 mt-3 font-semibold">ABOUT US</h1>
    <p className='text-center font-writingFont p-3 text-md md:text-2xl mx-[10px] md:mx-[200px] mt-6 mb-3'>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      Cras venenatis euismod malesuada. Nulla facilisi. Sed ac fermentum quam.
      Proin tincidunt purus a augue fermentum, sit amet aliquet massa consequat.
      Donec id ligula vitae urna placerat congue. Nulla facilisi. Curabitur cursus lacus
      et turpis tincidunt, nec efficitur erat aliquet. Aenean at nibh in nulla dapibus auctor.
      Vivamus in sem non turpis bibendum tempor. In hac habitasse platea dictumst.
    </p>

    <MarqueeAboutUs/>
    </div>

    <div className="Section2 bg-bgcolor h-auto w-full p-5 my-9">
      <h1 className="text-center font-LogoFont text-3xl md:text-5xl font-semibold mt-3 md:mt-5 ">Minds Behind the Magic</h1>
    <div className="Card-div flex justify-between md:justify-evenly items-center mt-6  w-full h-auto">

      <div className="Card-1 my-3 ml-3 w-[150px] md:w-[300px] h-[250px] md:h-[350px] flex flex-col justify-center items-center rounded-2xl shadow-2xl">
        <img className="rounded-full w-[100px] h-[100px] md:w-[180px] md:h-[200px] items-center" src="./images/productt.jpg" alt="Propriteor"/>
        <h1 className='mt-4 text-center font-writingFont font-semibold text-md md:text-2xl'>Laxmi . N . Maharjan</h1>
        <h2 className='mt-2 text-center font-writingFont font-medium text-red-800 text-sm md:text-xl'>[CEO]</h2>


      </div>

      <div className="Card-2 my-3 ml-3 w-[150px] md:w-[300px] h-[250px] md:h-[350px] flex flex-col justify-center items-center rounded-2xl shadow-2xl">
        <img className="rounded-full w-[100px] h-[100px] md:w-[180px] md:h-[200px] items-center" src="./images/productt.jpg" alt="Propriteor"/>
        <h1 className='mt-4 text-center font-writingFont font-semibold text-md md:text-2xl '>Gajendra Maharjan</h1>
        <h2 className='mt-2 text-center font-writingFont font-medium text-red-800 text-sm md:text-xl'>[Propriteor]</h2>
      </div>

      <div className="Card-3 my-3 mx-3 w-[150px] md:w-[300px] h-[250px] md:h-[350px] flex flex-col justify-center items-center rounded-2xl shadow-2xl">
        <img className="rounded-full w-[100px] h-[100px] md:w-[180px] md:h-[200px]  items-center" src="./images/productt.jpg" alt="Propriteor"/>
        <h1 className='mt-4 text-center font-writingFont font-semibold text-md md:text-2xl'>Anjan Maharjan</h1>
        <h2 className='mt-2 text-center font-writingFont font-medium text-red-800 text-sm md:text-xl'>[Manager]</h2>
      </div>

      
    </div>
    </div>

    <Footer/>
  </div>

    
  )
}

export default AboutUs

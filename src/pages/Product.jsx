  import React from 'react';

  // Components
  import Footer from "../components/Footer";
import Nav from "../components/Nav";
import './index.css';

  // ICONS
  import { CiSearch } from "react-icons/ci";
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';


  const Product = () => {

return (
<div className="main-container">
    {/* NAVIGATION BAR */}
    <Nav/>
    
    <div className="body flex w-full h-[100%]  relative ">

      <Sidebar/>
    

      <div className="section2 w-[80%] h-full gap-10">

        <div className="searchbar h-[30px] md:h-[50px] w-[70%] bg-green-700  rounded-md mx-auto my-8
        hover:cursor-text  flex items-center justify-between px-5">

          <input className='bg-transparent text-sm md:text-xl w-[100%] placeholder:text-white' placeholder='Search for Products'></input>
          <CiSearch className='h-[20px] w-[20px] md:h-[30px] md:w-[30px]'/>
        </div>
      <div className="CardPlace">
        <ProductCard/>
      </div>

      </div>

      
    </div>

  <Footer/>
    {/* maincontrainer div below */}
  </div>
    )
  }

  export default Product

  import React from 'react';

  // Components
  import Footer from "../components/Footer";
import Nav from "../components/Nav";
import '../index.css';

  // ICONS
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Searchbar from '../components/Searchbar';


  const Product = () => {

return (
<div className="main-container">
    {/* NAVIGATION BAR */}
    <Nav/>
  
    <div className="body flex w-full h-[100%]  relative ">
      <Sidebar/>

      <div className="section2 w-[80%] h-full gap-10">
      <Searchbar/>
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

  export default Product;

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countup from "../components/Countup";
import './index.css';


// COMPONENT IMPORT
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Nav from "../components/Nav";
import Shophome from "../components/Shophome";



const Home = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };



    return (
        <div className="App">
          <Nav/>

            <div className="bodymain ">
            <div className=" border-2 flex  w-[100%] h-[300px] mt-[5px] md:h-[500px] object-contain overflow-hidden">

<div className="relative w-[70%] h-[300px] md:h-[500px] z-[-1]">
    <img src="./images/pic1.jpg" className="object-cover w-full h-full " alt="pic1"/>
    <p className="absolute left-2 top-[12%]  text-sm font-section1Font object-hidden  md:top-[15%] md:text-3xl md:left-10 font-LogoFont ">YOUR . ONE . STOP . SHOP .
      <br/>FOR . ALL .
    <br/>
      <span className="text-green-700 text-xl md:text-6xl"> BOTANIST

        </span></p>
    </div>
    
    <div className="flex flex-col object-contain w-[30%]">
    <div className="w-full h-[300px] md:h-[50%]">
    <img src="./images/heritage.jpg" className="object-cover w-full h-full " alt="pic1"/>
    </div>

    <div className="w-full h-[300px] md:h-[50%]">
    <img src="./images/radison.jpg" className="object-cover w-full h-full " alt="pic1"/>
    </div>
    </div>
    {/* main body div sec1 ends */}
</div>

<div className="section2 mt-7 w-full h-auto md:h-auto">
  <Countup/>

</div>

                       {/* main body div sec3 starts */}
<div className="Section3 my-7 w-full h-auto md:h-auto bg-bgcolor rounded-xl">
  <h1 className="text-black font-LogoFont text-center text-3xl md:text-5xl mt-4 p-7"> OUR SERVICES</h1>
    <Carousel responsive={responsive} swipeable={true} className="flex justify-evenly items-center ">
        
    <div className="products w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
    <img src='./images/productt.jpg' className=' mx-4 rounded-xl  ' alt='Product'/>
    <button className="button-default">Products</button>
  </div>

  <div className="Decor w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/productt.jpg' className='  mx-4 rounded-xl' alt='Decor'/>
  <button className="button-default">Decorations</button>
  </div>

  <div className="gardening w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/rentalservice.jpg' className='  mx-4 rounded-xl' alt='Gardening  '/>
  <button className="button-default">Gardening</button>
  </div>

  <div className="Ceramics w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/productt.jpg' className=' mx-4 rounded-xl' alt='Ceramics'/>
  <button className="button-default">Ceramics</button>
  </div>

  
  <div className="fertilizers w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/productt.jpg' className=' mx-4 rounded-xl' alt='Fertilizers'/>
  <button className="button-default">Fertilizers</button>
  </div>
    </Carousel>
  
</div>

                          {/* SECTION 4 here */}

  <div className="Section4">
    <Shophome/>
  </div>
                {/* //SECTION 5 Testimonials */}
<div className="Section5">
  <Testimonials/>
</div>

                         {/* //SECTION 6  Socialmedia */}
{/* <div className="section6 w-full h-[150px] mt-7 bg-appleblack">
<div className="w-[500px] h-[100px] flex justify-center items-center bg-white rounded-xl">

</div>
</div> */}

{/* main-body-div */}
</div>

<Footer/>

            {/* appDiv */}
    </div>
    );
};

export default Home;

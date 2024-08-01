import React from "react";
import './index.css';

import CountUp from 'react-countup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// COMPONENT IMPORT
import MarqueeTestimonials from "../components/MarqueeTestimonials";
import Nav from "../components/Nav";


//ICONS IMPORT
import { CgShoppingBag } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";



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
  <div className="flex justify-evenly items-center mx-1 p-2 md:h-auto">
    <div className="service1 w-[110px] h-auto md:h-auto bg-bgcolor rounded-xl text-black font-writingFont md:w-[300px] text-center">
      <h1 className="p-3 mt-2 font-sans font-bold text-4xl md:text-6xl">
        <CountUp end={25}
        duration={6}></CountUp>
        +
      </h1>
      <p className="mx-5 my-2 p-1 font-sans text-sm text-center md:text-xl ">Years of Service</p>
    </div>
    <div className="service2  w-[110px] h-auto md:h-auto bg-bgcolor rounded-xl text-black font-writingFont md:w-[300px] text-center ">
    <h1 className="p-3 mt-2 font-sans font-bold text-4xl md:text-6xl">
    <CountUp end={30}
        duration={6}></CountUp>
        +
      </h1>
      <p className=" mx-5 my-2 p-1 font-sans text-sm text-center md:text-xl">Years of Experience</p>
    </div>
    <div className="service3  w-[110px] h-auto md:h-auto bg-bgcolor rounded-xl md:w-[300px] text-center ">
    <h1 className="p-3 mt-2 font-sans font-bold text-4xl md:text-6xl">
    <CountUp end={40}
        duration={6}></CountUp>
        +
      </h1>
      <p className=" mx-5 my-2 p-1 font-sans text-sm text-center md:text-xl">Satisfied customers</p>
    </div>
  </div>

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
<div className="Section3 my-7 w-full h-auto md:h-auto bg-bgcolor rounded-xl">
  <div className="flex justify-center items-center">
  <h1 className="text-black font-LogoFont text-center text-3xl md:text-5xl mt-4 p-7"> SHOP WITH US</h1>
  <CgShoppingBag className="w-[30px] h-[30px]"/>

  </div>
    <Carousel responsive={responsive}  swipeable={true} className="flex justify-evenly items-center ">
        
    <div className=" w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
    <img src='./images/productt.jpg' className=' mx-4 rounded-xl' alt='Product'/>
    <h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Montserrat Plant</h1>
    <p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 1200</p>
    <button className="button-default">Add to Cart</button>
  </div>

  <div className=" w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/productt.jpg' className='  mx-4 rounded-xl' alt='Decor'/>
  <h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Montserrat Plant</h1>
  <p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 1200</p>
  <button className="button-default">Add to Cart</button>
  </div>

  <div className=" w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/rentalservice.jpg' className='  mx-4 rounded-xl' alt='Gardening '/>
  <h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Montserrat Plant</h1>
  <p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 1200</p>
  <button className="button-default">Add to Cart</button>
  </div>

  <div className=" w-[150px] h-[200px] md:h-[350px] md:w-[350px] flex flex-col items-center mx-7">
  <img src='./images/productt.jpg' className=' mx-4 rounded-xl' alt='Ceramics'/>
      <h1 className="text-slate-600 text-center text-lg font-writingFont font-semibold">Montserrat Plant</h1>
    <p className="text-slate-500 text-center text-sm font-writingFont">PRICE: Rs 1200</p>
  <button className="button-default">Add to Cart</button>
  </div>
    </Carousel>
    </div>
  
                        {/* //SECTION 5 Testimonials */}
<div className="Section5 my-7 w-full h-[250px] md:h-[500px] bg-bgcolor rounded-xl flex">
  <div className="left w-[70%] h-[300px] md:h-full ">
  <h1 className="text-center font-LogoFont text-3xl md:text-5xl pt-4">TESTIMONIALS</h1>
  <MarqueeTestimonials/>
  </div>

  <div className="right w-[30%] h-full border-black border-4">

  </div>

</div>

                         {/* //SECTION 6  Socialmedia */}
{/* <div className="section6 w-full h-[150px] mt-7 bg-appleblack">
<div className="w-[500px] h-[100px] flex justify-center items-center bg-white rounded-xl">

</div>
</div> */}

{/* main-body-div */}
</div>

<div className="footer relative mt-7 w-full h-[200px] md:h-200px bg-appleblack flex justify-between items-center text-white text-sm md:text-xl font-writingFont ">
  <div className="flex flex-col gap-2 mx-6 md:ml-[100px]">
  < h1 className="flex gap-2">Visit us at our branch : <SlLocationPin color="red"/>

  </h1><a href="https://www.google.com/maps/place/Gajendra+Nursery/@27.7326817,85.3065734,15z/data=!3m1!4b1!4m6!3m5!1s0x39eb1971626761c7:0x8325be1e4124b4cc!8m2!3d27.7326821!4d85.3168517!16s%2Fg%2F11frs29jld?entry=ttu">
  <p>Gajendra Nursery,
  <br/>Gongabu,Kathmandu</p></a>
  </div>


<div className="flex flex-col gap-2 mx-6 md:mr-[100px] mt-2 ">
<h1>Contact Us:</h1>
<p>Phone:  9813332989,
  <br/>9851053583
</p>
<div className="flex justify-evenly items-center w-[90px] h-[50px]">
<a href="https://www.instagram.com/gajendra_nursery_plantholic/">
<img src="./images/ig_logo.png" alt="instagram" /></a>

<a href="https://www.facebook.com/profile.php?id=100090634520423">
  <img src="./images/fb_logo.png" alt="facebook" /></a>

<a href="https://www.tiktok.com/@gajendranursery">
  <img src="./images/tiktok_logo.png" alt="tiktok" /></a>

</div>



</div>

</div>

            {/* appDiv */}
    </div>
    );
};

export default Home;

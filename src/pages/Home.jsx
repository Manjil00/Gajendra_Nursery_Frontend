import React, { useState } from "react";
import CountUp from 'react-countup';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css';

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

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

    return (
        <div className="App">
            <nav className="flex justify-between px-6 py-3">
                <div className="flex justify-center items-center">
                    <img className="w-10 h-10 mr-3" src="./images/GN_logo.png" alt="Logo" />
                    <h1 className='text-black ml-6  text-sm md:text-4xl font-LogoFont
            cursor-pointer flex justify-center items-center'>Gajendra Nursery</h1>
                </div>
                <div className={`bg-white absolute min-h-[30vh] left-0 top-[9%] w-full p-5 flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-8 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
                    <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-writingFont">
                        <li className="hover:text-green-600">Home</li>
                        <li className="hover:text-green-600">Products</li>
                        <li className="hover:text-green-600">Decorations</li>
                        <li className="hover:text-green-600">Pots/Ceramics</li>
                        <li className="hover:text-green-600">Blogs</li>
                        <li className="hover:text-green-600">About us</li>
                    </ul>
                </div>
                <div>
                    <button onClick={toggleNavMenu} className="md:hidden">
                        {
                        isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
                        <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
                        }
                    </button>
                </div>
            </nav>
            

            <div className="bodymain ">
            <div className=" border-2 flex  w-[100%] h-[300px] mt-[5px] md:h-[500px] object-contain">

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
<div className="Section3 my-7 w-full h-auto md:h-auto bg-bgcolor">
  <h1 className="text-black font-LogoFont text-center text-3xl md:text-5xl mt-4 p-7"> OUR SERVICES</h1>
    <Carousel responsive={responsive} className="flex justify-evenly items-center ">
        
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
    </Carousel>
  
</div>


{/* main-body-div */}
            </div>
          <div className="footer">

          </div>

            {/* appDiv */}
    </div>
    );
};

export default Home;

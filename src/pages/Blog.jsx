import React from 'react';
import Footer from '../components/Footer';
import Nav from "../components/Nav";
import '../index.css';

const Blog = () => {
  return (
  <div className="main-container">
    <Nav/>

    <div className="section1   rounded-2xl px-5 bg-bgcolor h-[200px] md:h-[250px] w-[95%] mx-auto flex flex-col justify-evenly gap-3 drop-shadow-2xl relative">
    <input className=' h-[100px]  w-full  rounded-2xl font-writingFont text-start cursor-text  placeholder-black' placeholder='          Write what you would like to know about?'></input>
    <button className="button-default">Send</button>

    </div>
      

      <div className="section2 mt-10 py-5 bg-bgcolor h-auto w-full flex flex-col justify-evenly items-center drop-shadow-2xl gap-5">
        <div className="card  rounded-xl h-[150px] w-[95%] md:h-[300px] m-2 drop-shadow-xl bg-bgcolor  gap-8
        flex ">
          <img src="./images/radison.jpg" className='h-full w-[40%] rounded-xl' alt='imgofblog'></img>
          <div className='content flex flex-col items-start gap-7'>
          <h1 className='text-black mt-3 ml-4 font-LogoFont text-xl md:text-5xl  h-auto w-auto '>How to graft a plant?</h1>
          <p className='text-black text-md md:text-2xl text-start ml-4 '> blah blah  blahhh</p>
          <p className=' text-md md:text-2xl m-auto'>...Read More</p>
          </div>

        </div>


        <div className="card rounded-xl h-[150px] w-[95%] md:h-[300px] m-2 drop-shadow-xl bg-bgcolor  gap-8 z-[-1]
        flex ">
          <img src="./images/radison.jpg" className='h-full w-[40%] rounded-xl' alt='imgofblog'></img>
          <div className='content flex flex-col items-start gap-7'>
          <h1 className='text-black mt-3 ml-4 font-LogoFont text-xl md:text-5xl  h-auto w-auto '>How to graft a plant?</h1>
          <p className='text-black text-md md:text-2xl text-start ml-4 '> blah blah  blahhh</p>
          <p className=' text-md md:text-2xl m-auto'>...Read More</p>
          </div>

        </div>


        <div className="card  rounded-xl h-[150px] w-[95%] md:h-[300px] drop-shadow-xl bg-bgcolor gap-8
        flex ">
          <img src="./images/radison.jpg" className='h-full w-[40%] rounded-xl' alt='imgofblog'></img>
          <div className='content flex flex-col items-start gap-7'>
          <h1 className='text-black mt-3 ml-4 font-LogoFont text-xl md:text-5xl  h-auto w-auto '>How to graft a plant?</h1>
          <p className='text-black text-md md:text-2xl text-start ml-4 '> blah blah  blahhh</p>
          <p className=' text-md md:text-2xl m-auto'>...Read More</p>
          </div>

        </div>
        
      </div>

    

    <Footer/>
  </div>
    
  )
}

export default Blog;

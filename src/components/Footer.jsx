import React from 'react'
import { SlLocationPin } from "react-icons/sl";


const Footer = () => {
  return (
    <div className="footer relative w-full h-[200px] md:h-200px bg-appleblack flex justify-between items-center text-white text-sm md:text-xl font-writingFont ">
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
  )
}

export default Footer

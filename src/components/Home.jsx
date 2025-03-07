import React from 'react'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home"className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='text-xl'>Welcome In My Feed</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'>
      <h1>Hello, I'am a</h1>
      {/*<span className='text-red-700 fon-bold'>Developer</span> */}
      <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer", "Designer", "Freelancer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
      </div>
      <br />
      <p className='text-sm md:text-md text-jusify'>
       I am Aditya Mishra, a versatile Developer, Freelancer, and Designer with a strong background in Computer Science from Mumbai University. I specialize in crafting innovative digital solutions, blending technical expertise with creative design to develop seamless and user-friendly applications. Whether it's software development, UI/UX design, or freelance projects, I am committed to delivering high-quality results that combine functionality with aesthetics.
        </p>
        <br />
        {/*social media icons*/}
        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
            <h1 className='font-bold text-center'>Available on</h1>
            <ul className='flex space-x-5'>
                <li>
                <a href="https://www.facebook.com/" target="_blank">
                    <FaSquareFacebook className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedinIn className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                <a href="https://github.com/" target="_blank">
                    <FaGithub className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                <a href="https://x.com/?lang=en-in/" target="_blank">
                    <FaTwitter className='text-2xl cursor-pointer' />
                    </a>
                </li>
            </ul>
        </div>
        <div className='space-y-2'>
        <h1 className='font-bold text-center'>Currently working on</h1>
            <div className='flex space-x-5'>
                <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
      <img src="/photo.avif" className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
      </div>
      </div> 
    </div>
    <hr />
    </>
  );
}

export default Home;

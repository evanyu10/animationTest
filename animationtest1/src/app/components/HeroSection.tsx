'use client';

import React from "react";
import Image from "next/image";
import profilePic from "../../../public/images/evan-transp.png.png"
import NavLink from "./NavLink";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 ">
                    Hello I am {" "}
                    </span>
                    <br></br>
                    <TypeAnimation 
                       sequence={[
                        "Evan :)",
                        2000,
                        "A Full Stack Developer",
                        2000,
                        "A UI/UX Designer",
                        2000,
                        "A Streamer", 
                        2000,
                        "Evan :)",
                        2000
                       ]}
                       wrapper="span"
                       speed={50}
                       repeat={0}
                       />
                </h1>
                <p className="text-[#121212] text-base sm:text-lg mb-6 lg:text-xl">
                    I am a web developer
                </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#bd79fc] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src={profilePic}
                    alt="Hero Image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
        <div className="text-center mt-4">
            
        <button 
    className="px-6 p-3 w-full sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 bg-gradient-to-br from-purple-200 to-purple-500 hover:bg-slate-200 hover:text-black text-white"
    onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }}
>
    Hire Me
</button>

            <a href="/documents/Evan_Yu_Resume.pdf" download>
                <button className="px-1 p-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-200 to-purple-500 hover:bg-slate-800">
                    <span className="block bg-gray-200 hover:bg-purple-200 rounded-full px-5 py-2">Download CV </span>
                </button>
            </a>
        </div>
    </section>
  );
};

export default HeroSection;

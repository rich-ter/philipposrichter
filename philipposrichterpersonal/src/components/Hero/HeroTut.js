import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/lotties/127466-glassmorphism-ellipse-lottie-animation.json'
import {Typewriter} from 'react-simple-typewriter'
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeroTut = () => {
  return (
    <div>   
        <section class="bg-white dark:bg-gray-100 h-screen">
            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex align-middle">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold text-gray-800 dark:text-black lg:text-5xl">
                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    words={['Hello World!', 'This website is about', 'Philippos J. Richter']}
                                />
                            </h1>
                            <br></br>
                            <p class="mt-4 text-gray-900 dark:text-black-400 cont">This is a personal portfolio website built with React js. The aim is to show the main 
                            technologies I have worked with, my attention to design and a brief overview of my journey so far and my future ambitions as a developer</p>
                            <br></br>
                            <p> <b>Project technologies: </b> React Js (functional components) & Meraki UI (Tailwind CSS), hosted on Vercel.</p>
                            <br></br>
                            <p> <b>Main project packages: </b> react-lottie, react-router-dom, react-icons, tailwind css, react-typewriter & many more. </p>
                            <br></br>
                            <p> If you wish to contact me directly, refer to my details: </p> <br></br>
                            <AnchorLink href='#contact'>
                                <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    Contact me
                                </button>
                            </AnchorLink>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Lottie animationData = {animation} loop={true}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroTut

import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import animation from '../../assets/lotties/21319-particle-wave-with-depth.json'
import Lottie from 'lottie-react'

const AboutOverview = () => {
  return (
  <div id="about">
        
<header class="bg-white dark:bg-gray-100">

    <div class="container px-6 py-16 mx-auto h-screen">
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
                            words={['Hello World!']}
                        />
                    </h1>
                    
                    <p class="mt-4 text-gray-900 dark:text-black-400 ">This is a personal portfolio custom web app using React js for the front-end, Strapi as a back-end headless CMS hosted on Vercel and AWS respectively.</p>
                    <p> Styling: tailwind css and meraki UI components </p>
                    <p>Packages: react-lottie, react-router-dom </p>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Lottie animationData = {animation} loop={true}/>
            </div>
        </div>
    </div>
</header>
</div>
  )
}

export default AboutOverview

import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import animation from '../../assets/lotties/21319-particle-wave-with-depth.json'
import Lottie from 'lottie-react'
import Timeline from '../Timeline/Timeline'

const AboutOverview = () => {
  return (
  <div id="about">
        
<section class="bg-white dark:bg-gray-100">

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
                            words={['Get to know me']}
                        />
                    </h1>
                    
                    <p class="mt-4 text-gray-900 dark:text-black-400 justify-between	">
                        After working in marketing / account management for a venture capital firm, 
                        I decided to follow my passion for coding and technology and to committed to it full-time.  
                        Alongside my work I enrolled at University of Oxfords 1-year Advanced Diploma in computing, where I majored with a distinction. 
                        This followed an intense 6-month coding bootcamp focusing on Django and React.<br></br> <br></br>
                        I am now looking to enter a 
                        company as a software developer in order to gain an in-depth understanding 
                        of emerging technologies and assist in creating innovative products. 
                        Currently I am exploring how to integrate state of the art AI models (GPT3, Dalle etc.) 
                        with interactive front-ends. 

                    </p>
                </div>
            </div>
            
      

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Lottie animationData = {animation} loop={true}/>
            </div>
        </div>
        
    </div>
    <Timeline/>

</section>
</div>
  )
}

export default AboutOverview

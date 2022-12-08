import React from 'react'
import Lottie from 'lottie-react'
import contactAnimation from '../../assets/lotties/103094-contact.json'
import {FaGithub, FaLinkedin, FaLocationArrow, FaQuestionCircle} from 'react-icons/fa'



const ContactOverview = () => {
  return (
    <div>
<section class="min-h-screen bg-white">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-10">
            <div class="lg:w-1/2 lg:mx-10">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize dark:text-black lg:text-4xl">Let’s connect</h1>

                <p class="mt-4 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love
                    to hear from you
                </p>
        <div class="mt-6 space-y-8 md:mt-8">
                    <p class="flex items-start -mx-2">
                    <FaLocationArrow/>
                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                            London, UK.
                        </span>
                    </p>

                    <p class="flex items-start -mx-2">
                       <FaQuestionCircle/>
                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">me@philipposrichter.com</span>
                    </p>
                </div>

    <h3 class="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                    <div class="flex mt-4 -mx-1.5 ">
                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/rich-ter" target='_blank'>
                            <FaGithub size={40}/>
                        </a>
                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://linkedin.com/in/philippos-richter" target='_blank'>
                            <FaLinkedin size={40}/>
                        </a>
                    </div>
            </div>
            

            <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <Lottie animationData = {contactAnimation} loop={true}/>

              

                <div class="mt-6 w-80 md:mt-8">
                    
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default ContactOverview

import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import codingAnimation from '../../assets/lotties/109028-react-and-node-development-mobile-first.json'
import Lottie from 'lottie-react'
import {SiDjango, SiReact, SiAmazonaws, SiMongodb, SiSqlite} from 'react-icons/si'

const SkillsOverview = () => {
  return (
    <div id="skills">

      <section class="bg-white">

    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-black">#
            <Typewriter
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={1000}
                words={['My skills']}
            />
        </h1>
                         

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                            <SiDjango/>
                    </span>

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-black">Django</h1>

                    <p class="text-gray-500 dark:text-black-300">
                        1+ year experience with Django and have built several projects some of which include p2p marketplaces, blog websites etc.
                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <SiReact/>
                    </span>

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-black">React</h1>

                    <p class="text-gray-500 dark:text-black-300">
                        I have used React for the past 6 months building several front-end websites for clients, deployed on Vercel.
                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <SiAmazonaws/>
                    </span>

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-black">AWS</h1>

                    <p class="text-gray-500 dark:text-black-300">
                        I have used various AWS services, including but not limited to: Lightsail, EC2, Route53, Simple Storage Service.
                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <SiMongodb/>
                    </span>
   

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-black">MongoDB / SQLite</h1>

                    <p class="text-gray-500 dark:text-black-300">
                       I have experimented with different databases but the most used are MongoDB for NoSQL DBs and SQlite for SQL DBs.
                    </p>
                </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                <Lottie animationData = {codingAnimation} loop={true}/>

            </div>
        </div>
        
    </div>
</section>
    </div>
  )
}

export default SkillsOverview

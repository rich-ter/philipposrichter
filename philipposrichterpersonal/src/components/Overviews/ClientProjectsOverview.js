import React from 'react'
import {clientprojects} from '../../data/clientprojects'
import { Link } from 'react-router-dom';
import lkyrimage from '../../assets/images/lydiakyriakopoulos.png'
import featuredImage from '../../data/clientprojects'
import {Typewriter} from 'react-simple-typewriter'
// import '../../assets/images'

// TO ADD A PROPS INSIDE THIS COMPONENT TO RENDER REPENDING ON WHAT WE CHOOSE. EITHER PROJETS OR WORK ETC. 
const ClientProjectsOverview = () => {
  return (
<div>


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
                words={['Client Projects']}
            />
        </h1>
                         

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>


        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {clientprojects.slice(0, 6).map((item) =>(
            <div key={item.id}>
                <a href={item.url} target='_blank'>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src= {lkyrimage} alt=""/>
                </a>
                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        {item.name}
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                       {item.description}
                    </p>
                    <p>{item.image}</p>
                    <p class="mt-3 text-sm text-blue-500">{item.technologies}</p>
                </div>
            </div>
            
        ))}
        </div>
    </div>
</section>

</div>



  )
}

export default ClientProjectsOverview


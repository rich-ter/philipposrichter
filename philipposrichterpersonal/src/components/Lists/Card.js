import React from 'react'
import {projects} from '../../data/projects'
import { Link } from 'react-router-dom';

// TO ADD A PROPS INSIDE THIS COMPONENT TO RENDER REPENDING ON WHAT WE CHOOSE. EITHER PROJETS OR WORK ETC. 
const Card = () => {
  return (
<div>


<section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Recent projects </h1>
        </div>

        <hr class="my-8 border-gray-200 dark:border-gray-700"/>
        <div class="flex justify-center grid lg:grid-cols-3 gap-6 xl:gap-x-12">
        {projects.slice(0, 3).map((item) =>(
            <div class='max-w-sm'  key={item.id}>
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 " src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="mt-8">
                    <span class="text-blue-500 uppercase">category</span>

                    <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        {item.description}
                    </h1>

                    <p class="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div class="flex items-center justify-between mt-4">
                        <div>
                            <a href="#" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                John snow
                            </a>

                            <p class="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
                        </div>

                        <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
                    </div>

                </div>
            </div>
        ))}

        <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize justify-center lg:text-4xl dark:text-white">See all </h1>
        </div>

                </div>

    </div>
</section>
</div>
  )
}

export default Card
    {/* <div>
        <div class="container my-24 px-6 mx-auto">
    <h2 class="text-3xl font-bold mb-12 pb-4 text-center">Latest projects</h2>

        <div class="flex justify-center grid lg:grid-cols-3 gap-6 xl:gap-x-12	">
            {projects.slice(0, 6).map((item) =>(
            <div class="rounded-lg shadow-lg bg-white max-w-sm" key={item.id}>
                <a href="#!">
                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg " alt=""/>
                </a>
                <div class="p-6 " >
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{item.description}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {item.role}
                    </p>
                    <Link to={`/projects/${item.id}`}>

                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Learn more</button>
                    </Link>
                </div>
            </div>  
            ))}
        </div>
        </div>
    </div> */}
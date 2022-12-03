import React from 'react'
import {projects} from '../../data /projects'
import { Link } from 'react-router-dom';

// TO ADD A PROPS INSIDE THIS COMPONENT TO RENDER REPENDING ON WHAT WE CHOOSE. EITHER PROJETS OR WORK ETC. 
const Card = () => {
  return (
    <div>
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
    </div>
  )
}

export default Card

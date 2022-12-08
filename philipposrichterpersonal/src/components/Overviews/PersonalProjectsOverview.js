import React from 'react'
import {personalprojects} from '../../data/personalprojects'
import { Link } from 'react-router-dom';
import {Typewriter} from 'react-simple-typewriter'
import {FaGithub, FaStripe, FaGitSquare} from 'react-icons/fa'
import {SiBootstrap, SiDjango, SiReact, SiAmazonaws, SiMongodb, SiSqlite} from 'react-icons/si'
import PreviousMap from 'postcss/lib/previous-map';
import ReactHtmlParser from 'react-html-parser';


// TO ADD A PROPS INSIDE THIS COMPONENT TO RENDER REPENDING ON WHAT WE CHOOSE. EITHER PROJETS OR WORK ETC. 
const PersonalProjectsOverview = () => {

    const something = `<FaStripe> <FaStripe/>`

    function createMarkup() { return {__html: '<FaStripe/>'}; };
    

  return (
<div>

<section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">


               <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-black">#
            <Typewriter
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={1000}
                words={['Personal Projects']}
            />
        </h1>
                         

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        {personalprojects.slice(0, 3).map((item) =>(
        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center" key={item.id}>

            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={item.image} alt=""/>

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">category</p>

                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-black md:text-3xl">
                    {item.name}
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p>
                <br></br>
                               <p class="text-sm text-blue-500 uppercase">TECHNOLOGIES</p>
                <div class="flex space-x-4">

                        {ReactHtmlParser(something)}
                        <div dangerouslySetInnerHTML={createMarkup()} />
                        {item.technologies[0]}

                    {/* {if item.technologies == 'github'){
                        <FaGitSquare/>
                    }}
                    {item.technologies}  */}

                </div>
                <p class="text-sm text-blue-500 uppercase">TECHNOLOGIES</p>
                <div class="flex space-x-4">
                    <SiDjango size={30}/> 
                    <SiAmazonaws size={30}/> 
                    <SiBootstrap size={30}/>
                    <SiSqlite size={30}/>
                    <FaStripe size={30}/>
                    <FaGitSquare size={30}/>

                </div>
                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Github URL:</a>

                <div class="flex items-center mt-6">
                    <FaGithub size={30}/>
                </div>
            </div>
        </div>
        ))}
    </div>
</section>
</div>
  )
}

export default PersonalProjectsOverview

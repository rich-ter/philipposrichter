
import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = () => {
  return (

 <nav class="bg-white shadow dark:bg-gray-800 sticky top-0">
    <header class="container flex items-center justify-center  p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

     <AnchorLink class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href='#about'><button>About</button></AnchorLink>

     <AnchorLink class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href='#skills'><button>Skills</button></AnchorLink>

     <AnchorLink class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href='#client-projects'><button>Client Projects</button></AnchorLink>

     <AnchorLink class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href='#personal-projects'><button>Personal Projects</button></AnchorLink>

     <AnchorLink class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" href='#contact'><button>Contact</button></AnchorLink>



        <a href="https://github.com/rich-ter" target="_blank" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          <FaGithub/>
        </a>

        <a href="https://linkedin.com/in/philippos-richter" target="_blank" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          <FaLinkedin/>
        </a>
    </header>
</nav>
  ) 
}

export default Header

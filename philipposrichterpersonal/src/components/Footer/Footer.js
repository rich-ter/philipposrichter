import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
<footer class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-8 mx-auto">
        <div class="text-center">

            <div class="flex flex-wrap justify-center mt-5 -mx-4">
                <AnchorLink class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" href='#about'><button>About</button></AnchorLink>
                <AnchorLink class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" href='#skills'><button>Skills</button></AnchorLink>
                <AnchorLink class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" href='#client-projects'><button>Client Projects</button></AnchorLink>
                <AnchorLink class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" href='#personal-projects'><button>Personal Projects</button></AnchorLink>
                <AnchorLink class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" href='#contact'><button>Contact</button></AnchorLink>

            </div>

        </div>


        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-gray-500 dark:text-gray-300">© Copyright Philippos Richter {(new Date().getFullYear())}. All Rights Reserved.</p>

            <div class="flex -mx-2">
                <a href="https://linkedin.com/in/philippos-richter" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                    <FaLinkedin/>
                </a>

                <a href="https://github.com/rich-ter" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                    <FaGithub/>
                </a>

            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer

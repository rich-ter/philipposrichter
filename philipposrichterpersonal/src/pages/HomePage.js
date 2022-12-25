import React from 'react'
import Header from '../components/Header/Header'
import HeroTut from '../components/Hero/HeroTut'
import ContactOverview from '../components/Overviews/ContactOverview'
import SkillsOverview from '../components/Overviews/SkillsOverview'
import PersonalProjectsOverview from '../components/Overviews/PersonalProjectsOverview'
import ClientProjectsOverview from '../components/Overviews/ClientProjectsOverview'
import AboutOverview from '../components/Overviews/AboutOverview'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'

const Homepage = () => {
  return (
    <div>
      <Fullpage>
      <HeroTut/>
      <AboutOverview/>
      <SkillsOverview/>
      <ClientProjectsOverview/>
      <PersonalProjectsOverview/>
      <ContactOverview/>
      </Fullpage>
    </div>
  )
}

export default Homepage

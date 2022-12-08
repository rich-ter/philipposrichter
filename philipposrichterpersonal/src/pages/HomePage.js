import React from 'react'
import Header from '../components/Header/Header'
import HeroTut from '../components/Hero/HeroTut'
import ContactOverview from '../components/Overviews/ContactOverview'
import SkillsOverview from '../components/Overviews/SkillsOverview'
import PersonalProjectsOverview from '../components/Overviews/PersonalProjectsOverview'
import ClientProjectsOverview from '../components/Overviews/ClientProjectsOverview'

const Homepage = () => {
  return (
    <div>
      <HeroTut/>
      <SkillsOverview/>
      <ClientProjectsOverview/>
      <PersonalProjectsOverview/>
      <ContactOverview/>
    </div>
  )
}

export default Homepage

import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;

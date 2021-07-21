import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import projectsData from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectsSectionStyle = styled.div`
  padding: 10rem 0;
  .projects-items {
    /* display: flex; */
    gap: 3px;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects-items {
      flex-direction: column;
      max-width: 480px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
      .project-item-img {
        width: 100%;
      }
    }
  }
`;

function ProjectsSection() {
  return (
    <ProjectsSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" subHeading="Some of my recent" />
        <div className="projects-items">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projectsData.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={projectsData.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectsSectionStyle>
  );
}

export default ProjectsSection;

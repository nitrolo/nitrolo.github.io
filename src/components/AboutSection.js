import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Button from './Button';
import AboutImg from '../assets/images/about-sec-img.jpg';

const AboutSectionStyle = styled.div`
  padding: 5rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  .about-section-left,
  .about-section-right {
    flex: 2;
  }
  .about-section-right {
    border: 1px solid var(--gray-1);
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .about-para {
    margin-top: 2rem;
    margin-left: 0;
    max-width: 500px;
    font-size: 1.8rem;
    line-height: 1.3em;
  }
  .about-section-buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .about-section-left {
      flex: 4;
    }
    .about-section-right {
      flex: 3;
      margin-left: 2rem;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about-para {
      font-size: 1.4rem;
      margin: 0 auto;
      margin-top: 2rem;
    }
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about-section-left,
    .about-section-right {
      width: 100%;
    }
    .about-section-right {
      margin-top: 3rem;
      margin-left: 0;
    }
    .section-title {
      text-align: center;
    }
    .about-section-buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about-section-left">
          <SectionTitle
            subHeading="Let me introduce myself"
            heading="about me"
          />
          <p className="about-para">
            I am a third year undergrad at BITS Pilani, Goa Campus.
          </p>
          <div className="about-section-buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" fill={false} />
          </div>
        </div>
        <div className="about-section-right">
          <img src={AboutImg} alt="about img" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}

export default AboutSection;

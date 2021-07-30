import React from 'react';
import ReactTyped from 'react-typed';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import Particles from 'react-particles-js';
import HeroImg from '../assets/images/hero.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyle = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translateY(-100px);
  }
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-size: 7rem;
      font-family: 'Montserrat Semibold';
      color: var(--white);
    }
  }
  .hero-img {
    border: 2px solid var(--gray-1);
    height: 600px;
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
  }
  .hero-info {
    margin-top: -18rem;
    position: relative;
  }
  .typed-text {
    font-size: 2.5rem;
    color: var(--white);
  }
  .hero-social,
  .hero-scroll-down {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero-social {
    left: 50px;
  }
  .hero-scroll-down {
    right: 50px;
  }
  .hero-social-indicator,
  .hero-scroll-down {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-150px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      transform: translateY(-60px);
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero-social-text {
    ul {
      transform: translateY(-50px);
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 3rem;
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  /*Particles js*/
  canvas.tsparticles-canvas-el {
    position: absolute;
    top: 0;
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      transform: translateY(-50px);
    }
    .hero-heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero-name {
        font-size: 4.5rem;
      }
    }
    .hero-social {
      left: 0;
      bottom: 15%;
      width: 20px;
      .hero-social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero-social-text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero-scroll-down {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroStyle id="hero-section">
      <div className="hero">
        <>
          <Particles
            params={{
              particles: {
                number: {
                  value: 10,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
                shape: {
                  type: 'polygon',
                  stroke: {
                    width: 4,
                    color: '#ff0080',
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 300,
                  color: '#ff0080',
                  opacity: 1,
                  width: 1,
                },
              },
            }}
          />
        </>
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello there! I am</span>
            <span className="hero-name">Nitrolo</span>
          </h1>
          <div className="hero-img">
            <img src={HeroImg} alt="hero" />
          </div>
          <div className="hero-info">
            <ReactTyped
              className="typed-text"
              strings={[
                'Web Developer',
                'AI/DL Programmer',
                'Competitive Programmer',
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
            <Button btnLink="/#contacts-banner" btnText="Contact me" />
          </div>
          <div className="hero-social">
            <div className="hero-social-indicator">
              <p>connect</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero-social-text">
              <ul>
                <li>
                  <a
                    href="https://github.com/nitrolo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero-scroll-down">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scroll down" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}

export default HeroSection;

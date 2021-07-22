import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { SiHackerearth, SiCodechef } from 'react-icons/si';

const FooterStyle = styled.div`
  padding-top: 5rem;
  .container {
    background-color: var(--deep-dark);
    padding: 5rem;
    margin: 0;
    max-width: 2000px;
    width: 100%;
  }
  .footer-icons {
    ul {
      justify-content: center;
      display: flex;
      li {
        margin: 2rem 1rem;
      }
      a {
        font-size: 3rem;
      }
    }
  }
  .footer-subtitle {
    font-size: 2rem;
    text-align: center;
  }
  .footer-year {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer">
          <div className="footer-icons">
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
              <li>
                <a
                  href="https://www.hackerearth.com/@nitrolo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiHackerearth />
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/users/apurvbotle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiCodechef />
                </a>
              </li>
            </ul>
          </div>
          <h3 className="footer-subtitle">Nitrolo</h3>
          <h5 className="footer-year">2021</h5>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ContactBannerStyle = styled.div`
  .contact-banner-wrapper {
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
  .contact-banner-heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contact-banner-heading {
      font-size: 2rem;
    }
  }
`;

function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contact-banner-wrapper">
          <h3 className="contact-banner-heading">
            Say hello to get in touch with me.
          </h3>
          <Button btnLink="/contacts" btnText="Contact now" />
        </div>
      </div>
    </ContactBannerStyle>
  );
}

export default ContactBanner;

import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.fill ? 'var(--gray-1)' : 'transparent'};
    padding: 0.7em 2em;
    display: inline-block;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    color: ${(props) => (props.fill ? 'black' : 'var(--gray-1)')};
    @media only screen and (max-width: 768px) {
      .button {
        font-size: 1.8rem;
      }
    }
  }
`;

function Button({ btnLink = 'Link', btnText = 'Button', fill = true }) {
  return (
    <ButtonStyle fill={fill} className="button-wrapper">
      <HashLink className="button" to={btnLink}>
        {btnText}
      </HashLink>
    </ButtonStyle>
  );
}

export default Button;

import React from 'react';
import styled from 'styled-components';

const ProgressBarStyle = styled.div`
  height: 0.7rem;
  width: 100%;
  background-color: var(--gray-1);
  border-radius: 12px;
  margin: 2rem;
  .progress-bar-filler {
    height: 100%;
    width: ${(props) => props.completed}%;
    background-color: #4f6ffe;
    border-radius: inherit;
    text-align: right;
  }
`;

function ProgressBar({ completed }) {
  return (
    <ProgressBarStyle completed={completed}>
      <div className="progress-bar-filler" />
    </ProgressBarStyle>
  );
}

export default ProgressBar;

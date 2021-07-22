import React from 'react';
import {
  SiCplusplus,
  SiJava,
  SiKeras,
  SiMysql,
  SiPython,
  SiReact,
  SiTensorflow,
} from 'react-icons/si';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const SkillsItemStyle = styled.div`
  display: flex;
  font-size: 6rem;
  align-items: center;
  margin: 0 30rem;
  .skill-item-icon {
    margin: 0 5rem;
  }
  @media only screen and (max-width: 1200px) {
    margin: 0 20rem;
    .skill-item-icon {
      font-size: 5rem;
      margin: 0 3rem;
    }
  }
  @media only screen and (max-width: 950px) {
    margin: 0 10rem;
    .skill-item-icon {
      font-size: 5rem;
      margin: 0 3rem;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    .skill-item-icon {
      font-size: 5rem;
      margin: 0 3rem;
    }
  }
`;

function SkillItem({ skill, completed }) {
  return (
    <SkillsItemStyle>
      <div className="skill-item-icon">
        {(() => {
          switch (skill) {
            case 'python':
              return <SiPython />;
            case 'cpp':
              return <SiCplusplus />;
            case 'java':
              return <SiJava />;
            case 'react':
              return <SiReact />;
            case 'mysql':
              return <SiMysql />;
            case 'tf':
              return <SiTensorflow />;
            case 'keras':
              return <SiKeras />;
            default:
              return <SiPython />;
          }
        })()}
      </div>
      <ProgressBar completed={completed} />
    </SkillsItemStyle>
  );
}

export default SkillItem;

import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SkillItem from './SkillItem';

const SkillsSectionStyle = styled.div`
  padding-bottom: 5rem;
  .section-title {
    padding: 5rem;
  }
`;

function SkillsSection() {
  return (
    <SkillsSectionStyle>
      <div className="container">
        <SectionTitle heading="Skills" subHeading="My" />
        <div className="skill-items">
          <SkillItem skill="python" completed={80} />
          <SkillItem skill="cpp" completed={70} />
          <SkillItem skill="java" completed={60} />
          <SkillItem skill="react" completed={30} />
          <SkillItem skill="mysql" completed={30} />
          <SkillItem skill="tf" completed={20} />
          <SkillItem skill="keras" completed={20} />
        </div>
      </div>
    </SkillsSectionStyle>
  );
}

export default SkillsSection;

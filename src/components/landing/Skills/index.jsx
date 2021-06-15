import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import reactIcon from 'assets/icons/react-js-icon.png';
import webpackIcon from 'assets/icons/webpack-icon.png';
import gatsbyIcon from 'assets/icons/gatsby-icon.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail, GridContainer } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <GridContainer>
          <img src={gatsbyIcon} alt="gatsby" className="gatsby" />
          <img src={reactIcon} alt="react" />
          <img src={webpackIcon} alt="webpack" />
        </GridContainer>
      </Thumbnail>
      <Details>
        <h1>Skills</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

import React from 'react';
import { Project, ProjectsGrid, ProjectsContainer } from './styles';
import { projects } from './projects.json';

export const Projects = () => (
  <ProjectsContainer id="projects">
    <h2>Projects</h2>
    <ProjectsGrid>
      {projects.map(project => (
        <Project key={project.name}>
          <h3>{project.name}</h3>
          <a href={project.url} target="_blank" rel="noreferrer">
            <img src={require(`assets/projects/${project.image}`)} alt="" />
          </a>
        </Project>
      ))}
    </ProjectsGrid>
  </ProjectsContainer>
);

import React from 'react';
import { Course, CoursesGrid, CoursesContainer } from './styles';
import { courses } from './courses.json';

export const Courses = () => (
  <CoursesContainer id="certificates">
    <h2>Certificates</h2>
    <CoursesGrid>
      {courses.map(c => (
        <Course key={c.name}>
          <img src={require(`assets/courses/${c.image}`)} alt={c.name} title={c.name} name={c.name} />
        </Course>
      ))}
    </CoursesGrid>
  </CoursesContainer>
);

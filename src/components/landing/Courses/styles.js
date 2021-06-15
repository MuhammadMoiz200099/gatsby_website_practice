import styled from 'styled-components';

export const CoursesContainer = styled.div`
  padding: 0 2em;
  h2 {
    text-align: center;
    margin-bottom: 2em;
    font-size: 3em;
  }
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1000px;
    margin: 0 auto;
    grid-gap: 0 5em;
    padding: 0 2em;
  }
`;

export const Course = styled.div`
  margin-bottom: 2em;
`;

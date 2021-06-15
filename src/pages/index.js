import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Projects, Courses, Contact } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Contact />
  </Layout>
);

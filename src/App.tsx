import React from 'react';
import ReactDOM from 'react-dom';
import { CourseCard } from './components/course-card';
import { Header } from './components/header';

import './index.scss';

const App = () => (
  <>
    <Header/>
    <div className="mx-auto container grid gap-1 auto-grid">
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
    </div>
  </>
);


ReactDOM.render(<App />, document.getElementById('app'));

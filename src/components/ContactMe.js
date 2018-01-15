import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Let's talk!</h2>
      <p>Please reach out to me by carrior pigion or better yet, by email:</p>
      <a href="mailto:hello@nicolasroybal.com">hello@nicolasroybal.com</a>
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/freelance`}>Freelance</NavLink></li>
        <li><NavLink to={`${match.url}/career`}>Career Opertunities</NavLink></li>
        <li><NavLink to={`${match.url}/mentor`}>Mentor</NavLink></li>
      </ul>
    </div>

    {/* This sets the initail landing. If used, make sure to import Redirect from react-router-dom*/}
    <Route exact path={match.path}
                 render={ () => <Redirect to={`${match.path}/career`} /> } />

    <Route path={`${match.path}/freelance`}
           render={ () => <CourseContainer data={HTMLCourses} /> } />
    <Route path={`${match.path}/career`}
           render={ () => <CourseContainer data={CSSCourses} /> } />
    <Route path={`${match.path}/mentor`}
           render={ () => <CourseContainer data={JSCourses} /> } />
  </div>
);

export default Courses;

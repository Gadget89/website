import React from 'react';
import ProjectList from '../data/projects';

const Projects = () => {
  let teachers = ProjectList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} alt="teacher" />
        <h3>{teacher.name}</h3>
        <p>{teacher.bio}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Projects</h2>
      <ul className="group">
        {teachers}
      </ul>
    </div>
  );
}

export default Projects;

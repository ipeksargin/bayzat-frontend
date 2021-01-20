import React from 'react';
import ProjectListItem from './ProjectListItem';

function ProjectList(props) {
  return (
    <div className="container">{}
      <h2>Projects</h2>
      {props.projectsArr.map((project, index) => {
        return (
          <ProjectListItem
            id={index}
            key={project.fullName}
            name={project.repositoryName}
            ownerName={project.fullName}
            onRemoveProjectBtnClick={props.onRemoveProjectBtnClick}
            onProjectDetailsClick={props.onProjectDetailsClick}
          ></ProjectListItem>)
      })}
    </div>
  );
}

export default ProjectList;
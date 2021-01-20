import React from 'react';

function ProjectListItem(props) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Repository Name: {props.name}</h4>
          <p>Owner: {props.ownerName}</p>
        </div>
        <div className="col-md-3">
        <button 
            name={props.name}
            className="btn btn-primary"
            onClick={props.onProjectDetailsClick}
          >Project Details
          </button>
          <button 
            name={props.name}
            id={props.id}
            className="btn btn-secondary mt-2"
            onClick={props.onRemoveProjectBtnClick}
          >Remove Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectListItem;
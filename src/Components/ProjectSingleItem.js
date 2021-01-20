import React from 'react';

function ProjectSingleItem(props) {
    const { repositoryName, forksCount, isPrivate, url } = props.location.state;
    return (
        <div className="container">
          <h2 className="display-4 my-3">Repository Name: {repositoryName}</h2>
          <h4 className="mb-3">Repository Details</h4>
          <ul className="list-group">
            <a href={url} className="list-group-item">Owner URL: {url}</a>
            <li className="list-group-item">Forks Count: {forksCount}</li>
            <li className="list-group-item">Is Repo Private? : {isPrivate ? "Yes" : "No"}</li>
          </ul>
        </div>
    );
}
export default ProjectSingleItem;
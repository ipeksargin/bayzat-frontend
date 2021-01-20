import React from 'react';

function SearchBar(props) {
  return (
    <div className="container">
      <form className="navbar-form navbar-left" role="search">
        <h3 className="text-center">Welcome to Project Search Tool!</h3>
        <div className="form-group row mt-4">
          <div className="col-sm-6">
            <input
              className="form-control"
              placeholder="Search a Repo"
              onChange={props.onInputChange}
            >
            </input>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.onSearchClick}
          >Search</button>
          <p className="lead ml-2">Make a search with a repository name.</p>
        </div>
        {props.showListItems &&
          <div className="col-sm-8">
            <ul className="list-group">
              {props.repoArr.map((repo, index) =>
                <li
                  id={index}
                  key={repo.owner.login}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  onClick={props.onAddBtnClick}>
                  Repo Name: {repo.name} <br></br>
                Owner: {repo.owner.login}
                </li>)}
            </ul>
          </div>
        }
      </form>
    </div>
  )
}

export default SearchBar;
import React, { useEffect, useState, useCallback } from 'react';
import runGetRequestWithParams from '../APIHelper/helper';
import ProjectList from './ProjectList';
import SearchBar from './SearchBar';
import {useHistory} from 'react-router-dom';

function Home(){
  const [inputValueState, setInputValue] = useState('');
  const [receivedRepo, setReceivedRepo] = useState([]);
  const [projectsArrState, setProjectsArr] = useState([]);
  const [showListItems, setShowListItems] = useState(false);

  const history = useHistory();

  const getInputValue = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  useEffect(() => {
    const localStorageArr = JSON.parse(localStorage.getItem('projects')) || [];
    if(localStorageArr.length !== 0) {
      setProjectsArr(localStorageArr);
    }
  }, []);

  const makeSearchOnClick = async () => {
    const received = await runGetRequestWithParams(inputValueState);

    const repoWithName = received.data.items.filter(repo => (repo.name === inputValueState));
    setReceivedRepo(repoWithName);
    if (repoWithName.length === 0) {
      alert('Could not find the repository.');
      return;
    } 
    setShowListItems(true);
  };

  const onAddBtnClick = (e) => {
    setShowListItems(false);

    const projectReceivedIndexNum = e.currentTarget.id;

    const projectReveivedItem = receivedRepo[projectReceivedIndexNum];

    const valuesForLocalStorage = {
      projectID: projectReveivedItem.id,
      forksCount: projectReveivedItem.forks,
      repositoryName: projectReveivedItem.name,
      fullName: projectReveivedItem.full_name,
      isPrivate: projectReveivedItem.private,
      url: projectReveivedItem.owner.html_url,
      createdAt: projectReveivedItem.created_at
    };

    let projectsLocalStorageArr = [];
    if ('projects' in localStorage) {
      projectsLocalStorageArr = JSON.parse(localStorage.getItem('projects'));
    }
    projectsLocalStorageArr.push(valuesForLocalStorage);
    localStorage.setItem('projects', JSON.stringify(projectsLocalStorageArr));
    // console.log(projectsLocalStorageArr);
    setProjectsArr(projectsLocalStorageArr);
  }

  const onProjectDetailsClick = useCallback((e) => {
    const projectName = e.currentTarget.getAttribute('name');
    const clickedItem = projectsArrState.filter((item) => item.repositoryName === projectName);
    const p_id = clickedItem[0].projectID;

    for (let i =0; i<projectsArrState.length; i++) {
      if(projectsArrState[i].projectID === p_id) {
        history.push(`projects/${p_id}`, projectsArrState[i])
      }
    }
  }, [history, projectsArrState]);

  const onRemoveProjectBtnClick = useCallback( (e) => {
    const removedProjectName = e.currentTarget.getAttribute('name');

    for (let i = 0; i<projectsArrState.length; i++) {
      if(projectsArrState[i].repositoryName === removedProjectName) {
        const removedArrItem = projectsArrState.splice(i, 1);
        console.log(removedArrItem);
      }
    }
    setProjectsArr(projectsArrState.filter((item) => item.repositoryName !== removedProjectName));
    localStorage.setItem('projects', JSON.stringify(projectsArrState));

  }, [projectsArrState]);

  return(
    <div>
      <SearchBar
        onInputChange={getInputValue}
        onSearchClick={makeSearchOnClick}
        showListItems={showListItems}
        repoArr={receivedRepo}
        onAddBtnClick={onAddBtnClick}
      />
      <ProjectList
        projectsArr={projectsArrState}
        onProjectDetailsClick={onProjectDetailsClick}
        onRemoveProjectBtnClick={onRemoveProjectBtnClick}
      />
    </div>
  );
}

export default Home;
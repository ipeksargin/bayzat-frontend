import Home from './Components/Home';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ProjectSingleItem from './Components/ProjectSingleItem';


function App() {
  return (
    <div className="mt-5">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/:index" component={ProjectSingleItem} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

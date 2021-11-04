import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import './App.css';

// pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/projects/:id'>
              <Project />
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

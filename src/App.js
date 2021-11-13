import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css';

// pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import OnlineUsers from './components/onlineUsers/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                {!user && <Redirect to='/login' />}
                {user && <Dashboard />}
              </Route>
              <Route path='/create'>
                {!user && <Redirect to='/login' />}
                {user && <Create />}
              </Route>
              <Route path='/projects/:id'>
                {!user && <Redirect to='/login' />}
                {user && <Project />}
              </Route>
              <Route path='/signup'>
                {!user && <SignUp />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/login'>
                {!user && <Login />}
                {user && <Redirect to='/' />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

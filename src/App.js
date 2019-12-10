import React from 'react';
import './App.css';
import NavBar from './components/navBar'
import Dashboard from './components/dashboard'
import LoginPage from './views/LoginPage/LoginPage'
import LandingPage from './views/LandingPage/LandingPage'
import formLogin from './views/formLogin'
import { Link, Route, Switch } from 'react-router-dom'


function App() {
    return (
      <div>
          <div>
            
          <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/admin' component={Dashboard} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/formLogin' component={formLogin} />
        </Switch>
          </div>
      </div>
  )
}

export default App;

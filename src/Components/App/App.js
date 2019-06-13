import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Journal from '../Journal/Journal';
import Schedule from '../Schedule/Schedule';
import Affirmation from '../Affirmation/Affirmation';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-header">MM</div>
        <div className="app-main">
          <div className="app-nav">
              <NavLink className="app-nav-link" to="/">Home</NavLink>
              <NavLink className="app-nav-link" to="/journal">Journal</NavLink>
              <NavLink className="app-nav-link" to="/schedule">Schedule</NavLink>
              <NavLink className="app-nav-link" to="/affirmation">Affirmation</NavLink>
          </div>
          <div className="app-content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/journal" component={Journal}/>
              <Route path="/schedule" component={Schedule}/>
              <Route path="/affirmation" component={Affirmation}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Journal from '../Journal/Journal';
import Schedule from '../Schedule/Schedule';
import Affirmation from '../Affirmation/Affirmation';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div>App</div>
        <div className="app-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/affirmation">Affirmation</Link></li>
          </ul>
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
    </Router>
  );
}

export default App;

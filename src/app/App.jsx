import React, { Component } from 'react';
// import './App.scss';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Game from './game/Game';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Router>
        <div>
          <Route exact path='/' component={Game}/>
          <Route path='/home'   component={Game}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;

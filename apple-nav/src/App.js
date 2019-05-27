import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import MainNav from './components/MainNav.js'
import SubNav from './components/SubNav.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <MainNav />


        {/* If i were to build these out for real i would have a View for each Route and have the SubNav be the header for each view */}
        <Route path="/mac" component={SubNav} />
        <Route path="/ipad" component={SubNav} />
        <Route path="/iphone" component={SubNav} />
        <Route path="/watch" component={SubNav} />
        <Route path="/tv" component={SubNav} />
        <Route path="/music" component={SubNav} />

        
      </div>
    );
  }
}

export default App;

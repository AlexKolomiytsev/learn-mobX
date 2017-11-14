import * as React from 'react';
import './App.css';

const logo = require('../logo.svg');

import TimerView from '../TimerView/TimerView';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">

            <TimerView/>

        </p>
      </div>
    );
  }
}

export default App;

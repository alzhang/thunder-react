import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">

        </div>
        <div className="SplitPane-right">
          <Calendar />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  
}

export default App;

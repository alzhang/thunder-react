import React, { Component } from 'react';
import CalendarPane from './CalendarPane/CalendarPane';

class App extends Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">

        </div>
        <div className="SplitPane-right">
          <CalendarPane />
        </div>
      </div>
    );
  }
}

App.defaultProps = {

}

export default App;

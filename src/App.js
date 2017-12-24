import React, { Component } from 'react';
import EventPane from './EventPane/EventPane';
import CalendarPane from './CalendarPane/CalendarPane';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          <EventPane />
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

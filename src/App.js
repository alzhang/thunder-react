import React, { Component } from 'react';
import EventPane from './EventPane/EventPane';
import CalendarPane from './CalendarPane/CalendarPane';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="SplitPane">
        <EventPane />
        <CalendarPane />
      </div>
    );
  }
}

App.defaultProps = {

}

export default App;

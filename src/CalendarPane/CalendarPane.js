import React, { Component } from 'react';
import TitleBar from './Titlebar/TitleBar';
import './CalendarPane.css';

class CalendarPane extends Component {
  render() {
    return (
      <div className="CalendarPane">
        <TitleBar />
      </div>
    );
  }
}

CalendarPane.defaultProps = {

};

export default CalendarPane;

import React, { Component } from 'react';
import TitleBar from './Titlebar/TitleBar';


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

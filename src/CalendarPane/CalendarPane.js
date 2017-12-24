import React, { Component } from 'react';
import Titlebar from './Titlebar/Titlebar';


class CalendarPane extends Component {
  render() {
    return (
      <div className="CalendarPane">
        <Titlebar />
      </div>
    );
  }
}

CalendarPane.defaultProps = {

};

export default CalendarPane;

import React, { Component } from 'react';
import CalendarTitlebar from './CalendarTitlebar';


class CalendarPane extends Component {
  render() {
    return (
      <div className="CalendarPane">
        <CalendarTitlebar />
      </div>
    );
  }
}

CalendarPane.defaultProps = {

};

export default CalendarPane;

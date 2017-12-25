import React, { Component } from 'react';
import MonthBar from './MonthBar';

class EventCalendar extends Component {
  render() {
    return (
      <div className="EventCalendar">
        <MonthBar />
      </div>
    );
  }
}

export default EventCalendar;

import React, { Component } from 'react';
import MonthBar from './MonthBar';
import EventMonthCalendar from './EventMonthCalendar';

class EventCalendar extends Component {
  render() {
    return (
      <div className="EventCalendar">
        <MonthBar />
        <EventMonthCalendar />
      </div>
    );
  }
}

export default EventCalendar;

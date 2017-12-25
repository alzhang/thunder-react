import React, { Component } from 'react';
import EventCalendar from './EventCalendar/EventCalendar';
import './EventPane.css';

class EventPane extends Component {
  render() {
    return (
      <div className="EventPane">
        <EventCalendar />
      </div>
    );
  }
}

EventPane.defaultProps = {

};

export default EventPane;

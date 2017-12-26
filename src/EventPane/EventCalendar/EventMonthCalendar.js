import React, { Component } from 'react';
import './EventMonthCalendar.css';

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

class EventMonthCalendar extends Component {


  render() {

    const daysOfWeekItems = daysOfWeek.map((dow) =>
      <li className="DaysOfWeekItem" key={dow}>
        {dow}
      </li>
    );
    return (
      <ul className="EventMonthCalendar">
        <ul className="DaysOfWeek"> {daysOfWeekItems} </ul>
        <ul className="DaysOfWeek">
          <li className="DaysOfWeekItem">
            2
          </li>
          <li className="DaysOfWeekItem">
            2
          </li>
          <li className="DaysOfWeekItem">
            2
          </li>
          <li className="DaysOfWeekItem">
            2
          </li>
          <li className="DaysOfWeekItem">
            2
          </li>
          <li className="DaysOfWeekItem">
            2
          </li>
          <li className="DaysOfWeekItem">
            2
          </li>
        </ul>
      </ul>
    );
  }
}

export default EventMonthCalendar;

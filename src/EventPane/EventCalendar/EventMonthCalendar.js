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

    const numbers = <ul className="Dates">
      <li className="DatesItem">
        2
      </li>
      <li className="DatesItem">
        2
      </li>
      <li className="DatesItem">
        2
      </li>
      <li className="DatesItem">
        2
      </li>
      <li className="DatesItem">
        2
      </li>
      <li className="DatesItem">
        2
      </li>
      <li className="DatesItem">
        2
      </li>
    </ul>;
    return (
      <ul className="EventMonthCalendar">
        <ul className="DaysOfWeek"> {daysOfWeekItems} </ul>
        {numbers}
        {numbers}
        {numbers}
        {numbers}
        {numbers}
        {numbers}

      </ul>
    );
  }
}

export default EventMonthCalendar;

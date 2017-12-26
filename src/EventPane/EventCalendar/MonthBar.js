import React, { Component } from 'react';
import './MonthBar.css';

class MonthBar extends Component {
  render() {
    return (
      <div className="MonthBar">
        <div className="MonthText">
          December
        </div>
        <div className="YearText">
          2017
        </div>
        <button className="Arrow"> &gt; </button>
        <button className="Arrow"> &lt; </button>
      </div>
    );
  }
}

export default MonthBar;

import React, { Component } from 'react';
import './RangeSelector.css';
import './Button.css';

class RangeSelector extends Component {
  render() {
    return (
      <div className="RangeSelector">
        <button className="ArrowButton"> &lt; </button>
        <button className="TextButton"> Today </button>
        <button className="ArrowButton"> &gt; </button>
      </div>
    );
  }
}

RangeSelector.defaultProps = {

};

export default RangeSelector;

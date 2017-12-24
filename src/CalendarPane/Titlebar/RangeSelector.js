import React, { Component } from 'react';
import './RangeSelector.css'

class RangeSelector extends Component {
  render() {
    return (
      <div class="RangeSelector">
        <button class="ArrowButton"> &lt; </button>
        <button class="TodayButton"> Today </button>
        <button class="ArrowButton"> &gt; </button>
      </div>
    );
  }
}

RangeSelector.defaultProps = {

};

export default RangeSelector;

import React, { Component } from 'react';
import './RangeSelector.css';
import './Button.css';

class RangeSelector extends Component {
  render() {
    return (
      <div class="RangeSelector">
        <button class="ArrowButton"> &lt; </button>
        <button class="TextButton"> Today </button>
        <button class="ArrowButton"> &gt; </button>
      </div>
    );
  }
}

RangeSelector.defaultProps = {

};

export default RangeSelector;

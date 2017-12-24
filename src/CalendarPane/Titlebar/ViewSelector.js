import React, { Component } from 'react';
import './ViewSelector.css'
import './Button.css';

class ViewSelector extends Component {
  render() {
    return (
      <div class="ViewSelector">
        <button class="SelectedTextButton"> Day </button>
        <button class="TextButton"> Week </button>
        <button class="TextButton"> Month </button>
        <button class="TextButton"> Year </button>
      </div>
    );
  }
}

ViewSelector.defaultProps = {

};

export default ViewSelector;

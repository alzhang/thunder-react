import React, { Component } from 'react';
import './ViewSelector.css'
import './Button.css';

class ViewSelector extends Component {
  render() {
    return (
      <div className="ViewSelector">
        <button className="SelectedTextButton"> Day </button>
        <button className="TextButton"> Week </button>
        <button className="TextButton"> Month </button>
        <button className="TextButton"> Year </button>
      </div>
    );
  }
}

ViewSelector.defaultProps = {

};

export default ViewSelector;

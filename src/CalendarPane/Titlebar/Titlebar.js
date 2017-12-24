import React, { Component } from 'react';
import RangeSelector from './RangeSelector';
import './Titlebar.css';

class Titlebar extends Component {
  render() {
    return (
      <div className="Titlebar" id="container">
        <RangeSelector />
        <div id="right"> !</div>
        <div id="center"> alex </div>
      </div>
    );
  }
}

Titlebar.defaultProps = {

};

export default Titlebar;

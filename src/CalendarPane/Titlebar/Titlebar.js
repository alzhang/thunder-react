import React, { Component } from 'react';
import RangeSelector from './RangeSelector';
import ViewSelector from './ViewSelector';
import SearchBar from './SearchBar';
import './TitleBar.css';

class TitleBar extends Component {
  render() {
    return (
      <div className="TitleBar" id="container">
        <RangeSelector />
        <ViewSelector />
        <SearchBar />
      </div>
    );
  }
}

TitleBar.defaultProps = {

};

export default TitleBar;

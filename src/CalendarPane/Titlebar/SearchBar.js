import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBarDiv">
        <input className="SearchBar" value="Search..."/>
      </div>
    );
  }
}

export default SearchBar;

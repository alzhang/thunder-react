import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        {this.props.name}
      </div>
    );
  }
}

Calendar.defaultProps = {
  name: "hello"
};

export default Calendar;

import React from 'react';

import { connect } from 'react-redux';

class AttendeesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    { console.log('hi', this.props) }
    return (
      <div>
        <h1>Unfortunate Souls that have to sit in meeting</h1>
        {this.props.displayAttendee.addAttendee.map(data => {
          return <p>{data.user.first_name} at {data.user.hourly_wage}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayAttendee: state,
    addAttendee: state
  };
};

export default connect(mapStateToProps)(AttendeesList);

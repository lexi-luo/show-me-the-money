import React from 'react';
import { connect } from 'react-redux';
import {getMeeting}from '../actions/meetings'


class HistoricMeetings extends React.Component {
  componentDidMount(){
this.props.getMeeting(1)
  }
  render() {
    return (
  
      <div id="historycontainer">
        {this.props.meetings.map(meeting => {
          return meeting.map(meetingdata => {
            return (
              <a
                value={meetingdata.id}
                name={meetingdata.id}
                onClick={e => {
                  this.props.handleClick(e);
                }}
                id="history_meeting"
                className="button is-success"
              >
                {meetingdata.meeting_name}
              </a>
            );
          });
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMeeting: num => dispatch(getMeeting(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricMeetings);


import React from 'react'
import { connect } from 'react-redux'
import AttendeesList from './AttendeesList'
import TimerBox from './TimerBox'
// import CostPerHour from './CostPerHour'

// Main Layout page


class MainStats extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    { console.log('mainstats', this.state) };

    var user = {
      name: 'Harrison',
      hourly_wage: 300
    }

    return (

      <div className="container">
        <h2 className="title is-2" id="mainstats_title">New Meeting</h2>
        <AttendeesList />
        {/* <AttendeesList />    */}
        <TimerBox user={user} />
        {/* <CostPerHour /> */}

      </div>
    )
  }
}

export default connect()(MainStats)

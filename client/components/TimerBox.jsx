import React from 'react'
import { connect } from 'react-redux'
import AttendeeList from './AttendeesList'
import { startTimer, pauseTimer, stopTimer } from '../actions/timeOptions'
import { addAttendee } from '../actions/addAttendee'


// Main Layout page

class TimerBox extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      timercount: 0,
      count: false,
      dollars: 0,
      hourly_wage: 2
    }

    this.timer = this.timer.bind(this)
    this.restart = this.restart.bind(this)
  }

  // dollars = () => {
  //   this.setState({ dollars: this.state.timercount })
  // }

  timer() {
    if (!this.state.count) {

      {
        let interval = setInterval(() => {
          this.setState({
            timercount: (this.state.timercount + 1),
            count: true,
            interval: interval,
            dollars: (this.state.timercount * this.props.user.hourly_wage)
          })
        }, 1000)
      }
    }
  }
  restart(interval) {
    clearInterval(interval)
    this.setState({
      count: false
    })
  }


  render() {
    { console.log('timerbox', this.props) }
    return (


      <div id="timerbox_title" >
        <button id="timerbox_button" onClick={() => { this.restart(this.state.interval); this.props.stopTimer() }}>Stop</button>
        <button id="timerbox_button" onClick={() => { this.timer(); this.props.startTimer() }}>Play</button>
        <button id="timerbox_button" onClick={() => { this.restart(this.state.interval); this.props.pauseTimer() }}>Pause</button>
        <br />

        <div id="timerbox_time">
          <p>Time</p>
          <p id="timerbox_count">{(this.state.timercount)}</p>
          <p>${(this.state.dollars).toFixed(2)}</p>
        </div>
      </div>
    )
  }


}


const mapDispatchToProps = dispatch => {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer()),
    pauseTimer: () => dispatch(pauseTimer()),
    addAttendee: () => dispatch(addAttendee())

  }
}

const mapStateToProps = state => {
  return {
    addAttendee: state
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TimerBox)

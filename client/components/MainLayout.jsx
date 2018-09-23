import { connect } from 'react-redux'
import UserList from './UserList'
import AttendeesList from './AttendeesList'
// import MeetingUsersList from './MeetingUsersList'
import TimerBox from './TimerBox'
import CostPerHour from './CostPerHour'
import MainStats from './MainStats';
import Navbar from './Navbar'
import React, { Component } from 'react';
// Main Layout page

class MainLayout extends Component {
  constructor(props) {
    super(props);
    // let users = this.props.users
  }

  render() {
    return (

      < div >
        <div id="history_nav">
          <div id="Help_content" class="columns">
            <Navbar />
          </div>
        </div>
        <section id="App_video" class="hero is-fullheight video">
          <div class="hero-video">
            <video id="bgvid" playsInline autoPlay muted loop>
              <source src="./video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <div id="history_container" className="container">
          <div class="slide-fwd-center" id="h_left">
            <h2 className="title is-2 has-text-centered">
              UserList
              </h2>
            <UserList />
          </div>
          <div id="h_right">
            <MainStats />
          </div>
        </div>
      </div >
    )
  }
}



export default connect()(MainLayout)

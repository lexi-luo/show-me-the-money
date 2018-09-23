import User from './User';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAttendee } from '../actions/addAttendee';
import { fetchUsers } from '../actions/setUsers'


class UserList extends Component {
  constructor(props) {
    super(props);
    // let users = this.props.users
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }


  render() {
    { console.log('userlist', this.state) }
    return (
      <div>
        {this.props.users != undefined && this.props.users.map(user => {
          return (
            <div id="userlist_name">
              <User person={user} />
              <button
                onClick={() => this.props.dispatch(addAttendee(user))}
                id="userlist_button"
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addAttendee: user => dispatch(addAttendee(user)),
//     // fetchUsers: () => dispatch(fetchUsers())
//   };
// };

function mapStateToProps(state) {
  return {
    users: state.userRed.totalUsers
  }
}

export default connect(mapStateToProps)(UserList);

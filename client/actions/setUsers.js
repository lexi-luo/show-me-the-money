import request from 'superagent'

export function setAllUsers (users){
    return {
    type: "SET_ALL_USERS",
    allUsers: users
  }
}  

export function fetchUsers() {
  return (dispatch) => {
    request.get('/api/users')
    .then((res) => {
      return res.body
    }).then(users => {
      dispatch(setAllUsers(users))
    })
  }
}

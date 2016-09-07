import { combineReducers } from 'redux'

import { RECIEVE_PUBLISH } from '../../actions/routes/own-a-car'

function message(state = '', action) {
  switch(action.type) {
    case RECIEVE_PUBLISH:
      return action.message
    default:
      return state
  }
}

function request_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_PUBLISH:
      return action.requestList.map(item => request(item, {}))
    default:
      return state
  }
}

const request = combineReducers({
  id,
  avatar,
  school,
  nick_name,
  passenger_num,
  departure,
  departure_longtitude,
  departure_latitude,
  destination,
  destination_longtitude,
  destination_latitude,
  departure_time
})

function id(state = '', action) { return state }
function avatar(state = '', action) { return state }
function school(state = '', action) { return state }
function nick_name(state = '', action) { return state }
function passenger_num(state = 0, action) { return state }
function departure(state = '', action) { return state }
function departure_longtitude(state = 0, action) { return state }
function departure_latitude(state = 0, action) { return state }
function destination(state = '', action) { return state }
function destination_longtitude(state = 0, action) { return state }
function destination_latitude(state = 0, action) { return state }
function departure_time(state = '', action) { return state }

export default combineReducers({
  message,
  request_list
})

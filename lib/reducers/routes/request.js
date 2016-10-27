import { combineReducers } from 'redux'

import {
  CHANGE_DEPARTURE,
  CHANGE_DESTINATION,
  CHANGE_DEPARTURE_TIME,
  CHANGE_PASSENGER_NUM,
  REQUEST_PUBLISH,
  RECIEVE_PUBLISH,
  REQUEST_SEARCH,
  RECIEVE_SEARCH
} from '../../actions/routes/request'

function departure_name(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.name
    default:
      return state
  }
}

function departure_longtitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.loc.lng
    default:
      return state
  }
}

function departure_latitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.loc.lat
    default:
      return state
  }
}

function destination_name(state = '', action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.name
    default:
      return state
  }
}

function destination_longtitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.loc.lng
    default:
      return state
  }
}

function destination_latitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.loc.lat
    default:
      return state
  }
}

function departure_time(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE_TIME:
      return action.departureTime
    default:
      return state
  }
}

function passenger_num(state = 1, action) {
  switch(action.type) {
    case CHANGE_PASSENGER_NUM:
      return action.passengerNum
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_SEARCH:
    case REQUEST_PUBLISH:
      return true
    case RECIEVE_SEARCH:
    case RECIEVE_PUBLISH:
      return false
    default:
      return state
  }
}

export default combineReducers({
  departure_name,
  departure_longtitude,
  departure_latitude,
  destination_name,
  destination_longtitude,
  destination_latitude,
  departure_time,
  passenger_num,
  loading
})

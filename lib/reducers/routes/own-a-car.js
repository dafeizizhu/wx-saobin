import { combineReducers } from 'redux'

import { CHANGE_TYPE, CHANGE_COUNT, CHANGE_CAR_TYPE, CHANGE_DEPARTURE, CHANGE_DESTINATION } from '../../actions/routes/own-a-car'

function type(state = 0, action) {
  switch(action.type) {
    case CHANGE_TYPE:
      return action.nextType
    default:
      return state
  }
}

function passenger_num(state = 5, action) {
  switch(action.type) {
    case CHANGE_COUNT:
      return action.count
    default:
      return state
  }
}

function vehicle_id(state = '奔驰', action) {
  switch(action.type) {
    case CHANGE_CAR_TYPE:
      return action.carType
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

function departure(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
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

function destination(state = '', action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.name
    default:
      return state
  }
}

export default combineReducers({
  type,
  vehicle_id,
  passenger_num,
  departure,
  departure_longtitude,
  departure_latitude,
  destination,
  destination_longtitude,
  destination_latitude
})

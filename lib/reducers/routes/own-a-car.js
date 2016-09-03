import { combineReducers } from 'redux'

import { CHANGE_TYPE, CHANGE_COUNT, CHANGE_CAR_TYPE, CHANGE_ORIGIN } from '../../actions/routes/own-a-car'

function type(state = 0, action) {
  switch(action.type) {
    case CHANGE_TYPE:
      return action.nextType
    default:
      return state
  }
}

function count(state = 5, action) {
  switch(action.type) {
    case CHANGE_COUNT:
      return action.count
    default:
      return state
  }
}

function carType(state = '奔驰', action) {
  switch(action.type) {
    case CHANGE_CAR_TYPE:
      return action.carType
    default:
      return state
  }
}

function departure_longtitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_ORIGIN:
      return action.loc.lng
    default:
      return state
  }
}

function departure_latitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_ORIGIN:
      return action.loc.lat
    default:
      return state
  }
}

function departure(state = '', action) {
  switch(action.type) {
    case CHANGE_ORIGIN:
      return action.name
    default:
      return state
  }
}

export default combineReducers({
  type,
  count,
  carType,
  departure,
  departure_longtitude,
  departure_latitude
})

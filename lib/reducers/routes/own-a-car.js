import { combineReducers } from 'redux'

import { CHANGE_TYPE, CHANGE_COUNT, CHANGE_CAR_TYPE } from '../../actions/routes/own-a-car'

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

export default combineReducers({
  type,
  count,
  carType
})

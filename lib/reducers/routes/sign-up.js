import { combineReducers } from 'redux'

import { CHANGE_IS_DRIVER, CHANGE_MORE_VEHICLE } from '../../actions/routes/sign-up'

function is_driver(state = false, action) {
  switch(action.type) {
    case CHANGE_IS_DRIVER:
      return action.isDriver
    default:
      return state
  }
}

function more_vehicle(state = false, action) {
  switch(action.type) {
    case CHANGE_IS_DRIVER:
      if (action.isDriver) {
        return state
      } else {
        return false
      }
    case CHANGE_MORE_VEHICLE:
      return action.moreVehicle
    default:
      return state
  }
}

export default combineReducers({
  is_driver,
  more_vehicle
})

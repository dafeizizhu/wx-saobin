import { combineReducers } from 'redux'

import {
  CHANGE_TYPE, 
  CHANGE_PASSENGER_NUM, 
  CHANGE_DEPARTURE, 
  CHANGE_DESTINATION,
  CHANGE_DEPARTURE_TIME,
  CHANGE_REWARD,
  CHANGE_VEHICLE_ID, 
  CHANGE_REMARK,
  REQUEST_SUBMIT,
  RECIEVE_SUBMIT
} from '../../actions/routes/own-a-car'

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
    case CHANGE_PASSENGER_NUM:
      return action.passengerNum
    default:
      return state
  }
}

function vehicle_id(state = '奔驰', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_ID:
      return action.vehicleId
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

function departure_time(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE_TIME:
      return action.departureTime
    default:
      return state
  }
}

function reward(state = 0, action) {
  switch(action.type) {
    case CHANGE_REWARD:
      return action.reward
    default:
      return state
  }
}

function remark(state = '', action) {
  switch(action.type) {
    case CHANGE_REMARK:
      return action.remark
    default:
      return state
  }
}

function loading(state = false, action) {
  switch(action.type) {
    case REQUEST_SUBMIT:
      return true
    case RECIEVE_SUBMIT:
      return false
    default: 
      return state
  }
}

export default combineReducers({
  type,
  passenger_num,
  departure,
  departure_longtitude,
  departure_latitude,
  destination,
  destination_longtitude,
  destination_latitude,
  departure_time,
  reward,
  vehicle_id,
  remark,
  loading
})
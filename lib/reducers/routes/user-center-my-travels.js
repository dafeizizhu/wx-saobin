import { combineReducers } from 'redux'

import { 
  RECIEVE_TRAVEL_LIST,
  RECIEVE_REQUEST_LIST,
  RECIEVE_INVITATION_LIST,
  CHANGE_DEPARTURE,
  CHANGE_PASSENGER_NUM,
  CHANGE_DESTINATION,
  CHANGE_DEPARTURE_TIME,
  CHANGE_VEHICLE_ID,
  CHANGE_REWARD,
  CHANGE_REMARK,
  RECIEVE_DEL_MY_TRAVEL
} from '../../actions/routes/user-center-my-travels'

function travel_list (state = [], action) {
  let index
  switch(action.type) {
    case RECIEVE_TRAVEL_LIST:
      return action.travelList.map(item => travel(item, {}))
    case CHANGE_DEPARTURE:
    case CHANGE_DESTINATION:
    case CHANGE_PASSENGER_NUM:
    case CHANGE_DEPARTURE_TIME:
    case CHANGE_REWARD:
    case CHANGE_VEHICLE_ID:
    case CHANGE_REMARK:
      index = state.map(travel => travel.travel_id).indexOf(action.item.travel_id)
      return [...state.slice(0, index), travel(state[index], action), ...state.slice(index + 1)]
    case RECIEVE_DEL_MY_TRAVEL:
      index = state.map(travel => travel.travel_id).indexOf(action.travel_id)
      return [...state.slice(0, index), travel(state[index], action), ...state.slice(index + 1)]
    default:
      return state
  }
}

function travel_id(state = '', action) {
  return state
}

function passenger_num(state = 0, action) {
  switch(action.type) {
    case CHANGE_PASSENGER_NUM:
      return action.passenger_num
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

function departure_name(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.name
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

function departure_addr(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.name
    default:
      return state
  }
}

function destination_addr(state = '', action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.name
    default:
      return state
  }
}

function destination_longtitude(state = '', action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.loc.lng
    default:
      return state
  }
}

function destination_latitude(state = '', action) {
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
      return action.departure_time
    default:
      return state
  }
}

function vehicle_id(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_ID:
      return action.vehicle_id
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

function status(state = '0', action) {
  switch(action.type) {
    case RECIEVE_DEL_MY_TRAVEL:
      return '3'
    default:
      return state
  }
}

const travel = combineReducers({
  departure_addr,
  departure_latitude,
  departure_longtitude,
  departure_time,
  destination_addr,
  destination_latitude,
  destination_longtitude,
  driver_user_id: (state = '', action) => state,
  is_driver: (state = '', action) => state,
  passenger_num,
  remark,
  status,
  rest_passenger_num: (state = '', action) => state,
  reward,
  travel_id,
  vehicle_brand: (state = '', action) => state,
  vehicle_id,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
})

const request = combineReducers({
  departure_time: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_name: (state = '', action) => state,
  mobile: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  request_id: (state = '', action) => state,
  reward: (state = '', action) => state,
  school: (state = '', action) => state,
  sex: (state = '', action) => state, 
  vehicle_brand: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
})

function request_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_REQUEST_LIST:
      return action.request_list.map(item => request(item, {}))
    default:
      return state
  }
}

const invitation = combineReducers({
  departure_time: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_name: (state = '', action) => state,
  invitation_id: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  reward: (state = '', action) => state,
  school: (state = '', action) => state,
  sex: (state = '', action) => state,
  status: (state = '', action) => state,
  vehicle_brand: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
})

function invitation_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_INVITATION_LIST:
      return action.invitation_list.map(item => invitation(item, {}))
    default:
      return state
  }
}

export default combineReducers({
  travel_list,
  request_list,
  invitation_list
})

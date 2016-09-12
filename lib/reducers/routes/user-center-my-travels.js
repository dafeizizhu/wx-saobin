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
  CHANGE_REMARK
} from '../../actions/routes/user-center-my-travels'

// TODO
const initialTravelList = [{
  travel_id: 'travel_id',
  passenger_num: 1,
  departure_longtitude: 1,
  departure_latitude: 1,
  departure_name: 'departure_name',
  destination_name: 'destination_name',
  destination_longtitude: 1,
  destination_latitude: 1,
  departure_time: '2016-09-11T23:51',
  vehicle_id: 'vehicle_id',
  reward: 1,
  remark: 'remark'
}, {
  travel_id: 'travel_id2',
  passenger_num: 2,
  departure_longtitude: 2,
  departure_latitude: 2,
  departure_name: 'departure_name2',
  destination_name: 'destination_name2',
  destination_longtitude: 2,
  destination_latitude: 2,
  departure_time: '2016-09-11T23:51',
  vehicle_id: 'vehicle_id',
  reward: 2,
  remark: 'remark2'
}]

function travel_list (state = initialTravelList, action) {
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
      const index = state.map(travel => travel.travel_id).indexOf(action.item.travel_id)
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

const travel = combineReducers({
  travel_id,
  passenger_num,
  departure_longtitude,
  departure_latitude,
  departure_name,
  destination_name,
  destination_longtitude,
  destination_latitude,
  departure_time,
  vehicle_id,
  reward,
  remark
})

const request = combineReducers({
  request_id: (state = '', action) => state,
  travel_id: (state = '', action) => state,
  passenger_id:  (state = '', action) => state,
  nick_name: (state = '', action) => state,
  sex: (state = '', action) => state, 
  school: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  mobile: (state = '', action) => state
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
  invitation_id: (state = '', action) => state,
  travel_id: (state = '', action) => state,
  passenger_id: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  sex: (state = '', action) => state,
  school: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  invite_result: (state = '', action) => state
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

import { combineReducers } from 'redux'

import { RECIEVE_SEARCH, RECIEVE_PUBLISH } from '../../actions/routes/request'

function type(state = '', action) {
  switch(action.type) {
    case RECIEVE_SEARCH:
      return 'search'
    case RECIEVE_PUBLISH:
      return 'publish'
    default:
      return state
  }
}

function travel_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_SEARCH:
      return action.travelList.map(item => travel(item, {}))
    default:
      return state
  }
}

const travel = combineReducers({
  travel_id: (state = '', action) => state,
  avatar: (state = '', action) => state,
  school: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  passenger_num: (state = 0, action) => state,
  departure_longtitude: (state = 0, action) => state,
  departure_latitude: (state = 0, action) => state,
  departure_name: (state = '', action) => state,
  destination_name: (state = '', action) => state,
  destination_longtitude: (state = 0, action) => state,
  destination_latitude: (state = 0, action) => state,
  departure_time: (state = '', action) => state,
  vehicle_brand: (state = '', action) => state,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
  reward: (state = '', action) => state
})

export default combineReducers({
  type,
  travel_list
})

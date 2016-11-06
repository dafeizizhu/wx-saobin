import { combineReducers } from 'redux'

import { RECIEVE_SEARCH, RECIEVE_PUBLISH } from '../../actions/routes/request'
import { REQUEST_POST_REQUEST, RECIEVE_POST_REQUEST } from '../../actions/routes/request-submit'

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
  departure_addr: (state = '', action) => state,
  departure_latitude: (state = '', action) => state,
  departure_longtitude: (state = '', action) => state,
  departure_time: (state = '', action) => state,
  destination_addr: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  driver_user_id: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  remark: (state = '', action) => state,
  rest_passenger_num: (state = '', action) => state,
  reward: (state = '', action) => state,
  status: (state = '', action) => state,
  travel_id: (state = '', action) => state,
  vehicle_brand: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
})

function loading_post_request(state = false, action) {
  switch(action.type) {
    case REQUEST_POST_REQUEST:
      return true
    case RECIEVE_POST_REQUEST:
      return false
    default:
      return state
  }
}

export default combineReducers({
  type,
  travel_list,
  loading_post_request
})

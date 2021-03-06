import { combineReducers } from 'redux'

import { RECIEVE_PUBLISH, RECIEVE_SEARCH } from '../../actions/routes/travel'
import { REQUEST_POST_INVITATION, RECIEVE_POST_INVITATION } from '../../actions/routes/travel-submit'

function message(state = '', action) {
  switch(action.type) {
    case RECIEVE_PUBLISH:
    case RECIEVE_SEARCH:
      return action.message
    default:
      return state
  }
}

function request_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_PUBLISH:
    case RECIEVE_SEARCH:
      let requestList = action.requestList
      if (typeof requestList == 'object') {
        requestList = Object.keys(requestList).map(key => requestList[key])
      }
      return requestList.map(item => request(item, {}))
    default:
      return state
  }
}

function type(state = '', action) {
  switch(action.type) {
    case RECIEVE_PUBLISH:
      return 'publish'
    case RECIEVE_SEARCH:
      return 'search'
    default:
      return state
  }
}

function travel_id(state = '', action) {
  switch(action.type) {
    case RECIEVE_PUBLISH:
      return action.travel_id
    default:
      return state
  }
}

const request = combineReducers({
  departure_time: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_name: (state = '', action) => state,
  mobile: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  reward: (state = '', action) => state,
  school: (state = '', action) => state,
  sex: (state = '', action) => state,
  vehicle_brand: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
  request_id: (state = '', action) => state,
  pass_user_id: (state = '', action) => state
})

function loading_post_invitation(state = false, action) {
  switch(action.type) {
    case REQUEST_POST_INVITATION:
      return true
    case RECIEVE_POST_INVITATION:
      return false
    default:
      return state
  }
}

export default combineReducers({
  type,
  message,
  travel_id,
  request_list,
  loading_post_invitation
})

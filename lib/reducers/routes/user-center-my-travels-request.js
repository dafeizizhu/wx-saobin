import { combineReducers } from 'redux'

import { BEGIN_REQUEST } from '../../actions/routes/user-center-my-travels-request'

const userCenterMyTravelsRequest = combineReducers({
  departure_time: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_name: (state = '', action) => state,
  mobile: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  status: (state = '', action) => state, 
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

export default function (state = {}, action) {
  switch(action.type) {
    case BEGIN_REQUEST:
      return userCenterMyTravelsRequest(action.item, {})
    default:
      return state
  }
}

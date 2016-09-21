import { combineReducers } from 'redux'

function user_id(state = '10086', action) {
  return state
}

export default combineReducers({
  user_id,
  school: (state = '', action) => state,
  name: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  email: (state = '', action) => state,
  pwd: (state = '', action) => state,
  enrollment_t: (state = '', action) => state,
  graduation_t: (state = '', action) => state,
  is_driver: (state = '', action) => state,
  license_no: (state = '', action) => state,
  license_pic: (state = '', action) => state,
  vehicle_1_id: (state = '', action) => state,
  vehicle_1_brand: (state = '', action) => state,
  vehicle_1_model: (state = '', action) => state,
  vehicle_1_num: (state = '', action) => state,
  vehicle_1_pic: (state = '', action) => state,
  vehicle_2_id: (state = '', action) => state,
  vehicle_2_brand: (state = '', action) => state,
  vehicle_2_model: (state = '', action) => state,
  vehicle_2_num: (state = '', action) => state,
  vehicle_2_pic: (state = '', action) => state
})

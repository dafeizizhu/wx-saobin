import { combineReducers } from 'redux'

function user_id(state = 'fake_user_id', action) {
  return state
}

export default combineReducers({
  user_id
})

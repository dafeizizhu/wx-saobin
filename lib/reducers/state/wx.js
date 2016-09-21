import { combineReducers } from 'redux'

function wx_id(state = 'fake_wx_id' + new Date().valueOf(), action) {
  return state
}

export default combineReducers({
  wx_id
})

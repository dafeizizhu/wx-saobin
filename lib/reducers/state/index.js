import { combineReducers } from 'redux'

import { RECIEVE_USER_INFO } from '../../actions/state/user'

import user from './user'
import wx from './wx'

export default combineReducers({
  user: (state = {}, action) => {
    switch(action.type) {
      case RECIEVE_USER_INFO:
        return user(action.userInfo, {})
      default:
        return state
    }
  },
  wx
})

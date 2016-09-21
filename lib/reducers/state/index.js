import { combineReducers } from 'redux'

import user from './user'
import wx from './wx'

export default combineReducers({
  user,
  wx
})

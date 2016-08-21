import { combineReducers } from 'redux'

import ownACar from './own-a-car'
import needACar from './need-a-car'

export default combineReducers({
  ownACar,
  needACar
})

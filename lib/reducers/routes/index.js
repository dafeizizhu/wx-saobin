import { combineReducers } from 'redux'

import ownACar from './own-a-car'
import ownACarOrigin from './own-a-car-origin'
import needACar from './need-a-car'

export default combineReducers({
  ownACar,
  ownACarOrigin,
  needACar
})

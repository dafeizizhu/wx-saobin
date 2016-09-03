import { combineReducers } from 'redux'

import ownACar from './own-a-car'
import ownACarDeparture from './own-a-car-departure'
import ownACarDestination from './own-a-car-destination'
import needACar from './need-a-car'

export default combineReducers({
  ownACar,
  ownACarDeparture,
  ownACarDestination,
  needACar
})

import { combineReducers } from 'redux'

import ownACar from './own-a-car'
import ownACarDeparture from './own-a-car-departure'
import ownACarDestination from './own-a-car-destination'
import needACar from './need-a-car'
import needACarDeparture from './need-a-car-departure'
import needACarDestination from './need-a-car-destination'
import signUp from './sign-up'

export default combineReducers({
  ownACar,
  ownACarDeparture,
  ownACarDestination,
  needACar,
  needACarDeparture,
  needACarDestination,
  signUp
})

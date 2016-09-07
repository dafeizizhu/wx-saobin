import { combineReducers } from 'redux'

import ownACar from './own-a-car'
import ownACarDeparture from './own-a-car-departure'
import ownACarDestination from './own-a-car-destination'
import ownACarSubmitRs from './own-a-car-submit-rs'
import needACar from './need-a-car'
import needACarSubmitRs from './need-a-car-submit-rs'
import needACarDeparture from './need-a-car-departure'
import needACarDestination from './need-a-car-destination'
import signUp from './sign-up'

export default combineReducers({
  ownACar,
  ownACarDeparture,
  ownACarDestination,
  ownACarSubmitRs,
  needACar,
  needACarSubmitRs,
  needACarDeparture,
  needACarDestination,
  signUp
})

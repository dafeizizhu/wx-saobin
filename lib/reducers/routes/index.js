import { combineReducers } from 'redux'

import travel from './travel'
import travelDeparture from './travel-departure'
import travelDestination from './travel-destination'
import travelSubmit from './travel-submit'
import needACar from './need-a-car'
import needACarSubmitRs from './need-a-car-submit-rs'
import needACarDeparture from './need-a-car-departure'
import needACarDestination from './need-a-car-destination'
import signUp from './sign-up'
import userCenterPersonalInfo from './user-center-personal-info'

export default combineReducers({
  travel,
  travelDeparture,
  travelDestination,
  travelSubmit,
  needACar,
  needACarSubmitRs,
  needACarDeparture,
  needACarDestination,
  signUp,
  userCenterPersonalInfo
})

import { combineReducers } from 'redux'

import travel from './travel'
import travelDeparture from './travel-departure'
import travelDestination from './travel-destination'
import travelSubmit from './travel-submit'
import request from './request'
import requestSubmit from './request-submit'
import requestDeparture from './request-departure'
import requestDestination from './request-destination'
import signUp from './sign-up'
import userCenterPersonalInfo from './user-center-personal-info'

export default combineReducers({
  travel,
  travelDeparture,
  travelDestination,
  travelSubmit,
  request,
  requestSubmit,
  requestDeparture,
  requestDestination,
  signUp,
  userCenterPersonalInfo
})

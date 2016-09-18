import { combineReducers } from 'redux'

import travel from './travel'
import travelSubmit from './travel-submit'
import request from './request'
import requestSubmit from './request-submit'
import signUp from './sign-up'
import userCenterPersonalInfo from './user-center-personal-info'
import userCenterMyTravels from './user-center-my-travels'
import userCenterMyRequests from './user-center-my-requests'

import common from './common'

export default combineReducers({
  travel,
  travelSubmit,
  request,
  requestSubmit,
  signUp,
  userCenterPersonalInfo,
  userCenterMyTravels,
  userCenterMyRequests,
  common
})

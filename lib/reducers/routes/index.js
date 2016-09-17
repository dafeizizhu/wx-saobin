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
import userCenterMyTravels from './user-center-my-travels'
import userCenterMyTravelsDeparture from './user-center-my-travels-departure'
import userCenterMyTravelsDestination from './user-center-my-travels-destination'
import userCenterMyRequests from './user-center-my-requests'
import userCenterMyRequestsDeparture from './user-center-my-requests-departure'
import userCenterMyRequestsDestination from './user-center-my-requests-destination'

import common from './common'

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
  userCenterPersonalInfo,
  userCenterMyTravels,
  userCenterMyTravelsDeparture,
  userCenterMyTravelsDestination,
  userCenterMyRequests,
  userCenterMyRequestsDeparture,
  userCenterMyRequestsDestination,
  common
})

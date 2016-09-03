// import weui
require('weui/dist/style/weui.min.css')

// global import
require('script!zepto')

// react router
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'babel-polyfill'

import configureStore from './utils/configure-store'
import reducers from './reducers'

import OwnACar from './modules/own-a-car'
import OwnACarDeparture from './modules/own-a-car-departure'
import OwnACarDestination from './modules/own-a-car-destination'
import OwnACarSubmitRs from './modules/own-a-car-submit-rs'
import NeedACar from './modules/need-a-car'
import NeedACarSubmitRs from './modules/need-a-car-submit-rs'
import NeedACarShare from './modules/need-a-car-share'
import UserCenterPersonalInfo from './modules/user-center-personal-info'
import UserCenterMyItinerary from './modules/user-center-my-itinerary'
import UserCenterMyItineraryRequest from './modules/user-center-my-itinerary-request'
import UserCenterMyItineraryResponse from './modules/user-center-my-itinerary-response'
import UserCenterNeedCars from './modules/user-center-need-cars'
import UserCenterNeedCarsRequest from './modules/user-center-need-cars-request'
import UserCenterNeedCarsResponse from './modules/user-center-need-cars-response'
import UserCenterMyRate from './modules/user-center-my-rate'
import SignUp from './modules/sign-up'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={OwnACar} />
      <Route path='/own-a-car' component={OwnACar} />
      <Route path='/own-a-car/departure' component={OwnACarDeparture} />
      <Route path='/own-a-car/destination' component={OwnACarDestination} />
      <Route path='/own-a-car/rs' component={OwnACarSubmitRs} />
      <Route path='/need-a-car' component={NeedACar} />
      <Route path='/need-a-car/rs' component={NeedACarSubmitRs} />
      <Route path='/need-a-car/share' component={NeedACarShare} />
      <Route path='/user-center' component={UserCenterPersonalInfo} />
      <Route path='/user-center/personal-info' component={UserCenterPersonalInfo} />
      <Route path='/user-center/my-itinerary' component={UserCenterMyItinerary} />
      <Route path='/user-center/my-itinerary/request' component={UserCenterMyItineraryRequest} />
      <Route path='/user-center/my-itinerary/response' component={UserCenterMyItineraryResponse} />
      <Route path='/user-center/need-cars' component={UserCenterNeedCars} />
      <Route path='/user-center/need-cars/request' component={UserCenterNeedCarsRequest} />
      <Route path='/user-center/need-cars/response' component={UserCenterNeedCarsResponse} />
      <Route path='/user-center/my-rate' component={UserCenterMyRate} />
      <Route path='/sign-up' component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

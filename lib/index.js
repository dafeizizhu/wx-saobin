// import weui
require('weui/dist/style/weui.min.css')

// import customize style
require('./styles/weui-narrow.css')

// global import
require('script!zepto')

// react router
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'babel-polyfill'

import configureStore from './utils/configure-store'
import reducers from './reducers'

import OwnACar from './modules/own-a-car'
import OwnACarDeparture from './modules/own-a-car-departure'
import OwnACarDestination from './modules/own-a-car-destination'
import OwnACarSubmitRs from './modules/own-a-car-submit-rs'
import NeedACar from './modules/need-a-car'
import NeedACarDeparture from './modules/need-a-car-departure'
import NeedACarDestination from './modules/need-a-car-destination'
import NeedACarSubmitRs from './modules/need-a-car-submit-rs'
import UserCenterPersonalInfo from './modules/user-center-personal-info'
import UserCenterMyTravels from './modules/user-center-my-travels'
import UserCenterMyTravelsRequest from './modules/user-center-my-travels-request'
import UserCenterMyTravelsResponse from './modules/user-center-my-travels-response'
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
      <Redirect from='/' to='/own-a-car' />
      <Route path='/own-a-car' component={OwnACar} />
      <Route path='/own-a-car/departure' component={OwnACarDeparture} />
      <Route path='/own-a-car/destination' component={OwnACarDestination} />
      <Route path='/own-a-car/rs' component={OwnACarSubmitRs} />
      <Route path='/need-a-car' component={NeedACar} />
      <Route path='/need-a-car/departure' component={NeedACarDeparture} />
      <Route path='/need-a-car/destination' component={NeedACarDestination} />
      <Route path='/need-a-car/rs' component={NeedACarSubmitRs} />
      <Redirect from='/user-center' to='/user-center/personal-info' />
      <Route path='/user-center/personal-info' component={UserCenterPersonalInfo} />
      <Route path='/user-center/my-travels' component={UserCenterMyTravels} />
      <Route path='/user-center/my-travels/request' component={UserCenterMyTravelsRequest} />
      <Route path='/user-center/my-travels/response' component={UserCenterMyTravelsResponse} />
      <Route path='/user-center/need-cars' component={UserCenterNeedCars} />
      <Route path='/user-center/need-cars/request' component={UserCenterNeedCarsRequest} />
      <Route path='/user-center/need-cars/response' component={UserCenterNeedCarsResponse} />
      <Route path='/user-center/my-rate' component={UserCenterMyRate} />
      <Route path='/sign-up' component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

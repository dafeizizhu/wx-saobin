// import weui
require('weui/dist/style/weui.min.css')

// import customize style
require('./styles/weui-narrow.css')

// global import
require('script!zepto')

// wx api
require('./utils/wx-api')

// react router
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'babel-polyfill'

import configureStore from './utils/configure-store'
import reducers from './reducers'

import Travel from './modules/travel'
import TravelSubmit from './modules/travel-submit'
import Request from './modules/request'
import RequestSubmit from './modules/request-submit'
import UserCenterPersonalInfo from './modules/user-center-personal-info'
import UserCenterMyTravels from './modules/user-center-my-travels'
import UserCenterMyTravelsRequest from './modules/user-center-my-travels-request'
import UserCenterMyTravelsInvitation from './modules/user-center-my-travels-invitation'
import UserCenterMyRequests from './modules/user-center-my-requests'
import UserCenterMyRequestsRequest from './modules/user-center-my-requests-request'
import UserCenterMyRequestsInvitation from './modules/user-center-my-requests-invitation'
import UserCenterMyRate from './modules/user-center-my-rate'
import SignUp from './modules/sign-up'

// Common Router, such as LocationPicker
import LocationPicker from './modules/common/location-picker'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

import routerHook from './utils/router-hook'

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='/travel' />
      <Route path='/travel' component={Travel} />
      <Route path='/travel/submit' component={TravelSubmit} />
      <Route path='/request' component={Request} />
      <Route path='/request/submit' component={RequestSubmit} />
      <Redirect from='/user-center' to='/user-center/personal-info' />
      <Route path='/user-center/personal-info' component={UserCenterPersonalInfo} 
        onEnter={routerHook.get('user-center-personal-info', 'onEnter', store)} 
        onLeave={routerHook.get('user-center-personal-info', 'onLeave', store)} />
      <Route path='/user-center/my-travels' component={UserCenterMyTravels} 
        onEnter={routerHook.get('user-center-my-travels', 'onEnter', store)} />
      <Route path='/user-center/my-travels/request' component={UserCenterMyTravelsRequest} />
      <Route path='/user-center/my-travels/invitation' component={UserCenterMyTravelsInvitation} />
      <Route path='/user-center/my-requests' component={UserCenterMyRequests} 
        onEnter={routerHook.get('user-center-my-requests', 'onEnter', store)} />
      <Route path='/user-center/my-requests/request' component={UserCenterMyRequestsRequest} />
      <Route path='/user-center/my-requests/invitation' component={UserCenterMyRequestsInvitation} />
      <Route path='/user-center/my-rate' component={UserCenterMyRate} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/common/location-picker' component={LocationPicker} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

import { fetchUserInfo } from './actions/state/user'
store.dispatch(fetchUserInfo(store.getState().app.state.user.user_id))

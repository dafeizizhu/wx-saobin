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

// Routes
const Travel = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/travel').default)
  }, 'travel')
}
const TravelSubmit = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/travel-submit').default)
  }, 'travel-submit')
}
const Request = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/request').default)
  }, 'request')
}
const RequestSubmit = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/request-submit').default)
  }, 'request-submit')
}
const UserCenterPersonalInfo = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-personal-info').default)
  }, 'user-center-personal-info')
}
const UserCenterMyTravels = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-travels').default)
  }, 'user-center-my-travels')
}
const UserCenterMyTravelsRequest = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-travels-request').default)
  }, 'user-center-my-travels-request')
}
const UserCenterMyTravelsInvitation = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-travels-invitation').default)
  }, 'user-center-my-travels-invitation')
}
const UserCenterMyRequests = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-requests').default)
  }, 'user-center-my-requests')
}
const UserCenterMyRequestsRequest = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-requests-request').default)
  }, 'user-center-my-requests-request')
}
const UserCenterMyRequestsInvitation = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-requests-invitation').default)
  }, 'user-center-my-requests-invitation')
}
const UserCenterMyRate = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/user-center-my-rate').default)
  }, 'user-center-my-rate')
}
const SignUp = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./modules/sign-up').default)
  }, 'sign-up')
}

// Common Router, such as LocationPicker
import LocationPicker from './modules/common/location-picker'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

import routerHook from './utils/router-hook'

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='/travel' />
      <Route path='/travel' getComponent={Travel} />
      <Route path='/travel/submit' getComponent={TravelSubmit} />
      <Route path='/request' getComponent={Request} />
      <Route path='/request/submit' getComponent={RequestSubmit} />
      <Redirect from='/user-center' to='/user-center/personal-info' />
      <Route path='/user-center/personal-info' getComponent={UserCenterPersonalInfo} 
        onEnter={routerHook.get('user-center-personal-info', 'onEnter', store)} />
      <Route path='/user-center/my-travels' getComponent={UserCenterMyTravels} 
        onEnter={routerHook.get('user-center-my-travels', 'onEnter', store)} />
      <Route path='/user-center/my-travels/request' getComponent={UserCenterMyTravelsRequest} />
      <Route path='/user-center/my-travels/invitation' getComponent={UserCenterMyTravelsInvitation} />
      <Route path='/user-center/my-requests' getComponent={UserCenterMyRequests} 
        onEnter={routerHook.get('user-center-my-requests', 'onEnter', store)} />
      <Route path='/user-center/my-requests/request' getComponent={UserCenterMyRequestsRequest} />
      <Route path='/user-center/my-requests/invitation' getComponent={UserCenterMyRequestsInvitation} />
      <Route path='/user-center/my-rate' getComponent={UserCenterMyRate} />
      <Route path='/sign-up' getComponent={SignUp} />
      <Route path='/common/location-picker' getComponent={LocationPicker} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

import { fetchUserInfo } from './actions/state/user'
store.dispatch(fetchUserInfo(store.getState().app.state.user.user_id))

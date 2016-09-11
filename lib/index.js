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

import Travel from './modules/travel'
import TravelDeparture from './modules/travel-departure'
import TravelDestination from './modules/travel-destination'
import TravelSubmit from './modules/travel-submit'
import Request from './modules/request'
import RequestDeparture from './modules/request-departure'
import RequestDestination from './modules/request-destination'
import RequestSubmit from './modules/request-submit'
import UserCenterPersonalInfo from './modules/user-center-personal-info'
import UserCenterMyTravels from './modules/user-center-my-travels'
import UserCenterMyTravelsDeparture from './modules/user-center-my-travels-departure'
import UserCenterMyTravelsDestination from './modules/user-center-my-travels-destination'
import UserCenterMyTravelsRequest from './modules/user-center-my-travels-request'
import UserCenterMyTravelsResponse from './modules/user-center-my-travels-response'
import UserCenterMyRequests from './modules/user-center-my-requests'
import UserCenterMyRequestsRequest from './modules/user-center-my-requests-request'
import UserCenterMyRequestsResponse from './modules/user-center-my-requests-response'
import UserCenterMyRate from './modules/user-center-my-rate'
import SignUp from './modules/sign-up'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

import routerHook from './utils/router-hook'

render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='/travel' />
      <Route path='/travel' component={Travel} />
      <Route path='/travel/departure' component={TravelDeparture} />
      <Route path='/travel/destination' component={TravelDestination} />
      <Route path='/travel/submit' component={TravelSubmit} />
      <Route path='/request' component={Request} />
      <Route path='/request/departure' component={RequestDeparture} />
      <Route path='/request/destination' component={RequestDestination} />
      <Route path='/request/submit' component={RequestSubmit} />
      <Redirect from='/user-center' to='/user-center/personal-info' />
      <Route path='/user-center/personal-info' component={UserCenterPersonalInfo} 
        onEnter={routerHook.get('user-center-personal-info', 'onEnter', store)} 
        onLeave={routerHook.get('user-center-personal-info', 'onLeave', store)} />
      <Route path='/user-center/my-travels' component={UserCenterMyTravels} />
      <Route path='/user-center/my-travels/departure' component={UserCenterMyTravelsDeparture} />
      <Route path='/user-center/my-travels/destination' component={UserCenterMyTravelsDestination} />
      <Route path='/user-center/my-travels/request' component={UserCenterMyTravelsRequest} />
      <Route path='/user-center/my-travels/response' component={UserCenterMyTravelsResponse} />
      <Route path='/user-center/my-requests' component={UserCenterMyRequests} />
      <Route path='/user-center/my-requests/request' component={UserCenterMyRequestsRequest} />
      <Route path='/user-center/my-requests/response' component={UserCenterMyRequestsResponse} />
      <Route path='/user-center/my-rate' component={UserCenterMyRate} />
      <Route path='/sign-up' component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// TODO
//import { fetchTravelList } from './actions/routes/user-center-my-travels'
//store.dispatch(fetchTravelList('test'))

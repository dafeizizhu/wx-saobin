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
import OwnACarSubmitRs from './modules/own-a-car-submit-rs'
import NeedACar from './modules/need-a-car'
import NeedACarSubmitRs from './modules/need-a-car-submit-rs'
import NeedACarShare from './modules/need-a-car-share'
import UserCenterPersonalInfo from './modules/user-center-personal-info'

const store = configureStore(reducers)
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={OwnACar} />
      <Route path='/own-a-car' component={OwnACar} />
      <Route path='/own-a-car/rs' component={OwnACarSubmitRs} />
      <Route path='/need-a-car' component={NeedACar} />
      <Route path='/need-a-car/rs' component={NeedACarSubmitRs} />
      <Route path='/need-a-car/share' component={NeedACarShare} />
      <Route path='/user-center' component={UserCenterPersonalInfo} />
      <Route path='/user-center/personal-info' component={UserCenterPersonalInfo} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

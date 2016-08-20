// import weui
require('weui/dist/style/weui.min.css')

// react router
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'babel-polyfill'

import configureStore from './utils/configure-store'
import reducers from './reducers'
import OwnACar from './modules/own-a-car'

const store = configureStore(reducers)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={OwnACar} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

import { combineReducers } from 'redux'

import { RECIEVE_SEARCH, CLEAR_TIPS } from '../../../actions/routes/own-a-car-departure'
import Location from './location'

function tips(state = [], action) {
  switch(action.type) {
    case RECIEVE_SEARCH:
      if (action.success) {
        return action.list.map(loc => Location(loc, {}))
      } else {
        return state
      }
    case CLEAR_TIPS:
      return []
    default:
      return state
  }
}

import loc from './location'

export default combineReducers({
  tips,
  loc
})

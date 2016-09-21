import { combineReducers } from 'redux'

import { 
  RECIEVE_CHANGE, 
  REQUEST_SUBMIT, 
  RECIEVE_SUBMIT,
  REQUEST_ADDRESS,
  RECIEVE_ADDRESS,
  CLEAR_RESULTS,
  CHANGE_RESULT
} from '../../../actions/routes/common/location-picker'

function results(state = [], action) {
  switch(action.type) {
    case RECIEVE_CHANGE:
      return action.results.map(result => location(result, {}))
    case REQUEST_SUBMIT:
    case CLEAR_RESULTS:
    case REQUEST_ADDRESS:
    case CHANGE_RESULT:
      return []
    default:
      return state
  }
}

function result(state = null, action) {
  switch(action.type) {
    case RECIEVE_SUBMIT:
    case RECIEVE_ADDRESS:
      if (action.success) {
        return location(action.result, {})
      } else {
        return state
      }
    case CHANGE_RESULT:
      return location(action.result, {})
    case REQUEST_ADDRESS:
      return location({
        id: new Date().valueOf(),
        name: 'Loading...',
        address: 'Loading...',
        lat: action.loc.lat,
        lng: action.loc.lng
      })
    default:
      return state
  }
}

const location = combineReducers({
  id: (state = '', action) => state,
  name: (state = '', action) => state,
  address: (state = '', action) => state,
  lng: (state = '', action) => state,
  lat: (state = '', action) => state
})

export default combineReducers({
  results,
  result
})

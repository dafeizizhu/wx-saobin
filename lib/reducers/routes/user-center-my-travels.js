import { combineReducers } from 'redux'

import { RECIEVE_TRAVEL_LIST } from '../../actions/routes/user-center-my-travels'

function travel_list (state = [], action) {
  switch(action.type) {
    case RECIEVE_TRAVEL_LIST:
      return action.travelList.map(item => travel(item, {}))
    default:
      return state
  }
}

function travel(state = '', action) { return state }

export default combineReducers({
  travel_list
})

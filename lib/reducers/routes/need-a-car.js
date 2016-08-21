import { combineReducers } from 'redux'

import { CHANGE_COUNT } from '../../actions/routes/need-a-car'

function count(state = 4, action) {
  switch(action.type) {
    case CHANGE_COUNT:
      return action.count
    default:
      return state
  }
}

export default combineReducers({
  count
})

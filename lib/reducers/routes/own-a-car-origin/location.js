import { combineReducers } from 'redux'

import { RECIEVE_SEARCH } from '../../../actions/routes/own-a-car-origin'

function name(state = '', action) {
  switch (action.type) {
    case RECIEVE_SEARCH:
      if (action.list && action.list.length) {
        return action.list[0].name
      } else {
        return state
      }
    default:
      return state
  }
}

function address(state = '', action) {
  switch (action.type) {
    case RECIEVE_SEARCH:
      if (action.list && action.list.length) {
        return action.list[0].address
      } else {
        return state
      }
    default:
      return state
  }
}

function lat(state = 0, action) {
  switch (action.type) {
    case RECIEVE_SEARCH:
      if (action.list && action.list.length) {
        return action.list[0].lat
      } else {
        return state
      }
    default:
      return state
  }
}

function lng(state = 0, action) {
  switch (action.type) {
    case RECIEVE_SEARCH:
      if (action.list && action.list.length) {
        return action.list[0].lng
      } else {
        return state
      }
    default:
      return state
  }
}

function id(state = '', action) {
  switch (action.type) {
    case RECIEVE_SEARCH:
      if (action.list && action.list.length) {
        return action.list[0].id
      } else {
        return state
      }
    default:
      return state
  }
}

export default combineReducers({
  name,
  address,
  lat,
  lng,
  id
})

import { combineReducers } from 'redux'

import { BEGIN_CHANGE_DEPARTURE, RECIEVE_SEARCH, CLEAR_TIPS } from '../../actions/routes/user-center-my-requests-departure'

const location = combineReducers({
  name,
  address,
  lat,
  lng,
  id
})

const search = combineReducers({
  tips,
  loc: location
})

function tips(state = [], action) {
  switch(action.type) {
    case RECIEVE_SEARCH:
      if (action.success) {
        return action.list.map(loc => location(loc, {}))
      } else {
        return state
      }
    case CLEAR_TIPS:
      return []
    default:
      return state
  }
}

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

function item(state = null, action) {
  switch(action.type) {
    case BEGIN_CHANGE_DEPARTURE:
      return action.item
    default:
      return state
  }
}

export default combineReducers({
  search,
  item
})
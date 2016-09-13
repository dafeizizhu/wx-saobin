import { combineReducers } from 'redux'

import {
  RECIEVE_REQUEST_LIST,
  RECIEVE_REQUEST_FOR_ME_LIST,
  RECIEVE_INVITATION_LIST,
  CHANGE_NICK_NAME,
  CHANGE_SEX,
  CHANGE_SCHOOL,
  CHANGE_MOBILE,
  CHANGE_DESTINATION,
  CHANGE_DEPARTURE_TIME,
  CHANGE_REWARD,
  CHANGE_VEHICLE_ID,
  CHANGE_REMARK,
  CHANGE_PASSENGER_NUM
} from '../../actions/routes/user-center-my-requests'

function request_id(state = '', action) { return state }

function nick_name(state = '', action) {
  switch(action.type) {
    case CHANGE_NICK_NAME:
      return action.nick_name
    default:
      return state
  }
}

function sex(state = 0, action) {
  switch(action.type) {
    case CHANGE_SEX:
      return action.sex
    default:
      return state
  }
}

function school(state = '', action) {
  switch(action.type) {
    case CHANGE_SCHOOL:
      return action.school
    default:
      return state
  }
}

function mobile(state = '', action) {
  switch(action.type) {
    case CHANGE_MOBILE:
      return action.mobile
    default:
      return state
  }
}

function destination_longtitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.loc.lng
    default:
      return state
  }
}

function destination_latitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.loc.lat
    default:
      return state
  }
}

function destination_name(state = '', action) {
  switch(action.type) {
    case CHANGE_DESTINATION:
      return action.name
    default:
      return state
  }
}

function departure_time(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE_TIME:
      return action.departure_time
    default:
      return state
  }
}

function passenger_num(state = 1, action) {
  switch(action.type) {
    case CHANGE_PASSENGER_NUM:
      return action.passenger_num
    default:
      return state
  }
}

function reward(state = 0, action) {
  switch(action.type) {
    case CHANGE_REWARD:
      return action.reward
    default:
      return state
  }
}

function vehicle_id(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_ID:
      return action.vehicle_id
    default:
      return state
  }
}

function remark(state = '', action) {
  switch(action.type) {
    case CHANGE_REMARK:
      return action.remark
    default:
      return state
  }
}

const request = combineReducers({
  request_id,
  nick_name,
  sex,
  school,
  mobile,
  destination_longtitude,
  destination_latitude,
  departure_time,
  passenger_num,
  reward,
  vehicle_id,
  remark
})

function request_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_REQUEST_LIST:
      return action.request_list.map(item => request(item, {}))
    case CHANGE_NICK_NAME:
    case CHANGE_SEX:
    case CHANGE_SCHOOL:
    case CHANGE_MOBILE:
    case CHANGE_DESTINATION:
    case CHANGE_DEPARTURE_TIME:
    case CHANGE_REWARD:
    case CHANGE_VEHICLE_ID:
    case CHANGE_REMARK:
      const index = state.map(request => request.request_id).indexOf(action.item.request_id)
      return [...state.slice(0, index), request(state[index], action), ...state.slice(index + 1)]
    default:
      return state
  }
}

const requestForMe = combineReducers({
  request_id: (state = '', action) => state,
  travel_id: (state = '', action) => state,
  passenger_id: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  sex: (state = 0, action) => state,
  school: (state = '', action) => state,
  passenger_num: (state = 0, action) => state,
  mobile: (state = '', action) => state
})

function request_for_me_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_REQUEST_FOR_ME_LIST:
      return action.request_list.map(item => requestForMe(item, {}))
    default:
      return state
  }
}

const invitation = combineReducers({
  invitation_id: (state = '', action) => state,
  travel_id: (state = '', action) => state,
  passenger_id: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  sex: (state = 0, action) => state,
  school: (state = '', action) => state,
  passenger_num: (state = 0, action) => state,
  invite_result: (state = 0, action) => state
})

function invitation_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_INVITATION_LIST:
      return action.invitation_list.map(item => invitation(item, {}))
    default:
      return state
  }
}

export default combineReducers({
  request_list,
  request_for_me_list,
  invitation_list
})

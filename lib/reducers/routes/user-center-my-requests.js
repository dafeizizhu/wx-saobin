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
  CHANGE_DEPARTURE,
  CHANGE_DEPARTURE_TIME,
  CHANGE_REWARD,
  CHANGE_VEHICLE_ID,
  CHANGE_REMARK,
  CHANGE_PASSENGER_NUM
} from '../../actions/routes/user-center-my-requests'

const initialRequestList = [{
  request_id: 'request_id',
  passenger_num: 1,
  departure_longtitude: 1,
  departure_latitude: 1,
  departure_name: 'departure_name',
  destination_name: 'destination_name',
  destination_longtitude: 1,
  destination_latitude: 1,
  departure_time: '2016-09-11T23:51',
  vehicle_id: 'vehicle_id',
  reward: 1,
  remark: 'remark'
}, {
  request_id: 'request_id2',
  passenger_num: 2,
  departure_longtitude: 2,
  departure_latitude: 2,
  departure_name: 'departure_name2',
  destination_name: 'destination_name2',
  destination_longtitude: 2,
  destination_latitude: 2,
  departure_time: '2016-09-11T23:51',
  vehicle_id: 'vehicle_id',
  reward: 2,
  remark: 'remark2'
}]

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

function departure_longtitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.loc.lng
    default:
      return state
  }
}

function departure_latitude(state = 0, action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.loc.lat
    default:
      return state
  }
}

function departure_name(state = '', action) {
  switch(action.type) {
    case CHANGE_DEPARTURE:
      return action.name
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
  departure_longtitude,
  departure_latitude,
  departure_name,
  destination_longtitude,
  destination_latitude,
  destination_name,
  departure_time,
  passenger_num,
  reward,
  vehicle_id,
  remark
})

function request_list(state = initialRequestList, action) {
  switch(action.type) {
    case RECIEVE_REQUEST_LIST:
      return action.request_list.map(item => request(item, {}))
    case CHANGE_NICK_NAME:
    case CHANGE_SEX:
    case CHANGE_SCHOOL:
    case CHANGE_MOBILE:
    case CHANGE_DESTINATION:
    case CHANGE_DEPARTURE:
    case CHANGE_DEPARTURE_TIME:
    case CHANGE_REWARD:
    case CHANGE_VEHICLE_ID:
    case CHANGE_REMARK:
    case CHANGE_PASSENGER_NUM:
      const index = state.map(request => request.request_id).indexOf(action.item.request_id)
      return [...state.slice(0, index), request(state[index], action), ...state.slice(index + 1)]
    default:
      return state
  }
}

const invitation = combineReducers({
  request_id: (state = '', action) => state,
  travel_id: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  sex: (state = '', action) => state,
  school: (state = '', action) => state,
  mobile: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  departure_time: (state = '', action) => state,
  reward: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  remark: (state = '', action) => state
})

function invitation_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_INVITATION_LIST:
      return action.invitation_list.map(item => invitation(item, {}))
    default:
      return state
  }
}

const myRequest = combineReducers({
  request_id: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  sex: (state = '', action) => state,
  school: (state = '', action) => state,
  mobile: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  departure_time: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  reward: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  remark: (state = '', action) => state,
  status: (state = '', action) => state
})

function my_request_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_REQUEST_FOR_ME_LIST:
      return action.request_for_me_list.map(item => myRequest(item, {}))
    default:
      return state
  }
}
export default combineReducers({
  request_list,
  my_request_list,
  invitation_list
})

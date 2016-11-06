import { combineReducers } from 'redux'

import {
  REQUEST_GET_MY_REQUEST_RES,
  RECIEVE_GET_MY_REQUEST_RES,
  REQUEST_GET_INVITATION_FOR_ME,
  RECIEVE_GET_INVITATION_FOR_ME,
  REQUEST_GET_MY_REQUEST,
  RECIEVE_GET_MY_REQUEST,
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
  CHANGE_PASSENGER_NUM,
  REQUEST_DEL_MY_REQUEST,
  RECIEVE_DEL_MY_REQUEST,
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
  departure_time,
  destination_latitude,
  destination_longtitude,
  destination_name,
  mobile,
  nick_name,
  passenger_num,
  reward,
  school,
  sex,
  status: (state = '', action) => state,
  vehicle_brand: (state = '', action) => state,
  vehicle_id,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
})

function my_request_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_GET_MY_REQUEST:
      return action.my_request_list.map(item => request(item, {}))
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
    case RECIEVE_DEL_MY_REQUEST:
      if (action.success) {
        const index = state.map(request => request.request_id).indexOf(action.request_id)
        return [...state.slice(0, index), ...state.slice(index + 1)]
      } else {
        return state
      }
    default:
      return state
  }
}

const invitation = combineReducers({
  invitation_id: (state = '', action) => state,
  departure_time: (state = '', action) => state,
  destination_latitude: (state = '', action) => state,
  destination_longtitude: (state = '', action) => state,
  destination_name: (state = '', action) => state,
  mobile: (state = '', action) => state,
  nick_name: (state = '', action) => state,
  passenger_num: (state = '', action) => state,
  reward: (state = '', action) => state,
  school: (state = '', action) => state,
  sex: (state = '', action) => state,
  status: (state = '', action) => state,
  vehicle_brand: (state = '', action) => state,
  vehicle_id: (state = '', action) => state,
  vehicle_model: (state = '', action) => state,
  vehicle_num: (state = '', action) => state,
  vehicle_pic: (state = '', action) => state,
})

function invitation_for_me_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_GET_INVITATION_FOR_ME:
      return action.invitation_for_me_list.map(item => invitation(item, {}))
    default:
      return state
  }
}

const request_res = combineReducers({
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

function my_request_res_list(state = [], action) {
  switch(action.type) {
    case RECIEVE_GET_MY_REQUEST_RES:
      return action.my_request_res_list.map(item => request_res(item, {}))
    default:
      return state
  }
}

function loading_get_my_request_res(state = false, action) {
  switch(action.type) {
    case REQUEST_GET_MY_REQUEST_RES:
      return true
    case RECIEVE_GET_MY_REQUEST_RES:
      return false
    default:
      return state
  }
}

function loading_get_invitation_for_me(state = false, action) {
  switch(action.type) {
    case REQUEST_GET_INVITATION_FOR_ME:
      return true
    case RECIEVE_GET_INVITATION_FOR_ME:
      return false
    default:
      return state
  }
}

function loading_get_my_request(state = false, action) {
  switch(action.type) {
    case REQUEST_GET_MY_REQUEST:
      return true
    case RECIEVE_GET_MY_REQUEST:
      return false
    default:
      return state
  }
}

function loading_del_my_request(state = false, action) {
  switch(action.type) {
    case REQUEST_DEL_MY_REQUEST:
      return true
    case RECIEVE_DEL_MY_REQUEST:
      return false
    default:
      return state
  }
}

export default combineReducers({
  my_request_res_list,
  invitation_for_me_list,
  my_request_list,
  loading_get_my_request_res,
  loading_get_invitation_for_me,
  loading_get_my_request,
  loading_del_my_request
})

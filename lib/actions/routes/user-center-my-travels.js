import { getRequestForMe } from '../../utils/cengceng-api/request'
import { getMyInvitationRes } from '../../utils/cengceng-api/invitation'
import { getMyTravel, delMyTravel } from '../../utils/cengceng-api/travel'
import { myAlert } from '../../utils/dialog'

export const CHANGE_DEPARTURE = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_DEPARTURE'

export function changeDeparture(loc, name, item) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name,
    item
  }
}

export const CHANGE_DESTINATION = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_DESTINATION'

export function changeDestination(loc, name, item) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name,
    item
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passenger_num, item) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passenger_num,
    item
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departure_time, item) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departure_time,
    item
  }
}

export const CHANGE_REWARD = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_REWARD'

export function changeReward(reward, item) {
  return {
    type: CHANGE_REWARD,
    reward,
    item
  }
}

export const CHANGE_VEHICLE_ID = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_VEHICLE_ID'

export function changeVehicleId(vehicle_id, item) {
  return {
    type: CHANGE_VEHICLE_ID,
    vehicle_id,
    item
  }
}

export const CHANGE_REMARK = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_REMARK'

export function changeRemark(remark, item) {
  return {
    type: CHANGE_REMARK,
    remark,
    item
  }
}

export const REQUEST_DEL_MY_TRAVEL = 'ROUTES-USER_CENTER_MY_TRAVELS-REQUEST_DEL_MY_TRAVEL'

export function requestDelMyTravel(user_id, travel_id) {
  return {
    type: REQUEST_DEL_MY_TRAVEL,
    user_id,
    travel_id
  }
}

export const RECIEVE_DEL_MY_TRAVEL = 'RECIEVE-USER_CENTER_MY_TRAVELS-RECIEVE_DEL_MY_TRAVEL'

export function recieveDelMyTravel(success, message, travel_id) {
  return {
    type: RECIEVE_DEL_MY_TRAVEL,
    success,
    message,
    travel_id
  }
}

export function fetchDelMyTravel(user_id, travel_id) {
  return dispatch => {
    dispatch(requestDelMyTravel(user_id, travel_id))
    delMyTravel({
      user_id,
      travel_id
    }, ret => {
      dispatch(recieveDelMyTravel(ret.error_code > 0, ret.msg, travel_id))
      if (ret.error_code > 0) {
        myAlert('取消成功')
      } else {
        myAlert('取消失败：' + ret.msg)
      }
    })
  }
}

export const REQUEST_GET_MY_TRAVEL = 'ROUTES-USER_CENTER_MY_TRAVELS-REQUEST_GET_MY_TRAVEL'

export function requestGetMyTravel(params) {
  return {
    type: REQUEST_GET_MY_TRAVEL,
    params
  }
}

export const RECIEVE_GET_MY_TRAVEL = 'ROUTES-USER_CENTER_MY_TRAVELS-RECIEVE_GET_MY_TRAVEL'

export function recieveGetMyTravel(success, message, my_travel_list) {
  return {
    type: RECIEVE_GET_MY_TRAVEL,
    success,
    message,
    my_travel_list
  }
}

export function fetchGetMyTravel(params) {
  return dispatch => {
    dispatch(requestGetMyTravel(params))
    getMyTravel(params, ret => {
      dispatch(recieveGetMyTravel(ret.error_code > 0, ret.msg, ret.data))
    })
  }
}

export const REQUEST_GET_REQUEST_FOR_ME = 'ROUTES-USER_CENTER_MY_TRAVELS-REQUEST_GET_REQUEST_FOR_ME'

export function requestGetRequestForMe(params) {
  return {
    type: REQUEST_GET_REQUEST_FOR_ME,
    params
  }
}

export const RECIEVE_GET_REQUEST_FOR_ME = 'ROUTES-USER_CENTER_MY_TRAVELS-RECIEVE_GET_REQUEST_FOR_ME'

export function recieveGetRequestForMe(success, message, request_for_me_list) {
  return {
    type: RECIEVE_GET_REQUEST_FOR_ME,
    success,
    message,
    request_for_me_list
  }
}

export function fetchGetRequestForMe(params) {
  return dispatch => {
    dispatch(requestGetRequestForMe(params))
    getRequestForMe(params, ret => {
      dispatch(recieveGetRequestForMe(ret.error_code > 0, ret.msg, ret.data))
    })
  }
}

export const REQUEST_GET_MY_INVITATION_RES = 'ROUTES-USER_CNETER_MY_TRAVELS-REQUEST_GET_MY_INVITATION_RES'

export function requestGetMyInvitationRes(params) {
  return {
    type: REQUEST_GET_MY_INVITATION_RES,
    params
  }
}

export const RECIEVE_GET_MY_INVITATION_RES = 'ROUTES-USER_CENTER_MY_TRAVELS-RECIEVE_GET_MY_INVITATION_RES'

export function recieveGetMyInvitationRes(success, message, my_invitation_res_list) {
  return {
    type: RECIEVE_GET_MY_INVITATION_RES,
    success,
    message,
    my_invitation_res_list
  }
}

export function fetchGetMyInvitationRes(params) {
  return dispatch => {
    dispatch(requestGetMyInvitationRes(params))
    getMyInvitationRes(params, ret => {
      dispatch(recieveGetMyInvitationRes(ret.error_code > 0, ret.msg, ret.data))
    })
  }
}

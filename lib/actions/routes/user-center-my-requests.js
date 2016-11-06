import { getMyRequest, getMyRequestRes, delMyRequest } from '../../utils/cengceng-api/request'
import { getInvitationForMe } from '../../utils/cengceng-api/invitation'
import { myAlert } from '../../utils/dialog'

export const CHANGE_NICK_NAME = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_NICK_NAME'

export function changeNickName(nick_name) {
  return {
    type: CHANGE_NICK_NAME,
    nick_name
  }
}

export const CHANGE_SEX = 'ROUTES-USER_CENTER_MY_REQUEST-CHANGE_SEX'

export function changeSex(sex) {
  return {
    type: CHANGE_SEX,
    sex
  }
}

export const CHANGE_SCHOOL = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_SCHOOL'

export function changeSchool(school) {
  return {
    type: CHANGE_SCHOOL,
    school
  }
}

export const CHANGE_MOBILE = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_MOBILE'

export function changeMobile(mobile) {
  return {
    type: CHANGE_MOBILE,
    mobile
  }
}

export const CHANGE_DEPARTURE = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_DEPARTURE'

export function changeDeparture(loc, name, item) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name,
    item
  }
}

export const CHANGE_DESTINATION = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_DESTINATION'

export function changeDestination(loc, name, item) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name,
    item
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departure_time, item) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departure_time,
    item
  }
}

export const CHANGE_REWARD = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_REWARD'

export function changeReward(reward) {
  return {
    type: CHANGE_REWARD,
    reward
  }
}

export const CHANGE_VEHICLE_ID = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_VEHICLE_ID'

export function changeVehicleId(vehicle_id) {
  return {
    type: CHANGE_VEHICLE_ID,
    vehicle_id
  }
}

export const CHANGE_REMARK = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_REMARK'

export function changeRemark(remark, item) {
  return {
    type: CHANGE_REMARK,
    remark,
    item
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passenger_num, item) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passenger_num,
    item
  }
}

export const REQUEST_DEL_MY_REQUEST = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_DEL_MY_REQUEST'

export function requestDelMyRequest(user_id, request_id) {
  return {
    type: REQUEST_DEL_MY_REQUEST,
    user_id,
    request_id
  }
}

export const RECIEVE_DEL_MY_REQUEST = 'ROUTES-USER_CENTER_MY_REQUESTS-RECIEVE_DEL_MY_REQUEST'

export function recieveDelMyRequest(success, message, request_id) {
  return {
    type: RECIEVE_DEL_MY_REQUEST,
    success,
    message,
    request_id
  }
}

export function fetchDelMyRequest(user_id, request_id) {
  return dispatch => {
    dispatch(requestDelMyRequest(user_id, request_id))
    delMyRequest({
      pass_user_id: user_id,
      request_id
    }, ret => {
      dispatch(recieveDelMyRequest(ret.error_code > 0, ret.msg, request_id))
      if (ret.error_code > 0) {
        myAlert('取消成功')
      } else {
        myAlert('取消失败：' + ret.msg)
      }
    })
  }
}

export const REQUEST_GET_INVITATION_FOR_ME = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_GET_INVITATION_FOR_ME'

export function requestGetInvitationForMe(params) {
  return {
    type: REQUEST_GET_INVITATION_FOR_ME,
    params
  }
}

export const RECIEVE_GET_INVITATION_FOR_ME = 'ROUTES-USER_CENTER_MY_REQUESTS-RECIEVE_GET_INVITATION_FOR_ME'

export function recieveGetInvitationForMe(success, message, invitation_for_me_list) {
  return {
    type: RECIEVE_GET_INVITATION_FOR_ME,
    success,
    message,
    invitation_for_me_list
  }
}

export function fetchGetInvitationForMe(params) {
  return dispatch => {
    dispatch(requestGetInvitationForMe(params))
    getInvitationForMe(params, ret => {
      dispatch(recieveGetInvitationForMe(ret.error_code > 0, ret.msg, ret.data))
    })
  }
}

export const REQUEST_GET_MY_REQUEST_RES = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_GET_MY_REQUEST_RES'

export function requestGetMyRequestRes(params) {
  return {
    type: REQUEST_GET_MY_REQUEST_RES,
    params
  }
}

export const RECIEVE_GET_MY_REQUEST_RES = 'ROUTES-USER_CENTER_MY_REQUESTS-RECIEVE_GET_MY_REQUEST_RES'

export function recieveGetMyRequestRes(success, message, my_request_res_list) {
  return {
    type: RECIEVE_GET_MY_REQUEST_RES,
    success,
    message,
    my_request_res_list
  }
}

export function fetchGetMyRequestRes(params) {
  return dispatch => {
    dispatch(requestGetMyRequestRes(params))
    getMyRequestRes(params, ret => {
      dispatch(recieveGetMyRequestRes(ret.error_code > 0, ret.msg, ret.data))
    })
  }
}

export const REQUEST_GET_MY_REQUEST = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_GET_MY_REQUEST'

export function requestGetMyRequest(params) {
  return {
    type: REQUEST_GET_MY_REQUEST,
    params
  }
}

export const RECIEVE_GET_MY_REQUEST = 'ROUTES-USER_CENTER_MY_REQUESTS-RECIEVE_GET_MY_REQUEST'

export function recieveGetMyRequest(success, message, my_request_list) {
  return {
    type: RECIEVE_GET_MY_REQUEST,
    success,
    message,
    my_request_list
  }
}

export function fetchGetMyRequest(params) {
  return dispatch => {
    dispatch(requestGetMyRequest(params))
    getMyRequest(params, ret => {
      dispatch(recieveGetMyRequest(ret.error_code > 0, ret.msg, ret.data))
    })
  }
}

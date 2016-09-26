import { getMyRequest, getMyRequestRes } from '../../utils/cengceng-api/request'
import { getInvitationForMe } from '../../utils/cengceng-api/invitation'

export const REQUEST_REQUEST_LIST = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_REQUEST_LIST'

export function requestRequestList(params) {
  return {
    type: REQUEST_REQUEST_LIST,
    params
  }
}

export const RECIEVE_REQUEST_LIST = 'ROUTES-USER_CENTER_MY_REQUESTS-RECIEVE_REQUEST_LIST'

export function recieveRequestList(success, message, request_list) {
  return {
    type: RECIEVE_REQUEST_LIST,
    success,
    message,
    request_list
  }
}

export function requestList(params) {
  return dispatch => {
    dispatch(requestRequestList(params))
    getMyRequest(params, body => {
      dispatch(recieveRequestList(body.error_code > 0, body.msg, body.data))
    })
  }
}

export function fetchRequestList(params) {
  return dispatch => dispatch(requestList(params))
}

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

export const REQUEST_REQUEST_FOR_ME_LIST = 'ROUTES-USER_CENTER_MY_ROUTES-REQUEST_REQUEST_FOR_ME_LIST'

export function requestRequestForMeList(params) {
  return {
    type: REQUEST_REQUEST_FOR_ME_LIST,
    params
  }
}

export const RECIEVE_REQUEST_FOR_ME_LIST = 'ROUTES-USER_CENTER_MY_ROUTES-RECIEVE_REQUEST_FOR_ME_LIST'

export function recieveRequestForMeList(success, message, request_for_me_list) {
  return {
    type: RECIEVE_REQUEST_FOR_ME_LIST,
    success,
    message,
    request_for_me_list
  }
}

export function requestForMeList(params) {
  return dispatch => {
    dispatch(requestRequestForMeList(params))
    getMyRequestRes(params, body => {
      dispatch(recieveRequestForMeList(body.error_code > 0, body.msg, body.data))
    })
  }
}

export function fetchRequestForMeList(params) {
  return dispatch => dispatch(requestForMeList(params))
}

export const REQUEST_INVITATION_LIST = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_INVITATION_LIST'

export function requestInvitationList(params) {
  return {
    type: REQUEST_INVITATION_LIST,
    params
  }
}

export const RECIEVE_INVITATION_LIST = 'ROUTES-USER_CENTER_MY_REQUESTS-RECIEVE_INVITATION_LIST'

export function recieveInvitationList(success, message, invitation_list) {
  return {
    type: RECIEVE_INVITATION_LIST,
    success,
    message,
    invitation_list
  }
}

export function invitationList(params) {
  return dispatch => {
    dispatch(requestInvitationList(params))
    getInvitationForMe(params, body => {
      dispatch(recieveInvitationList(body.error_code > 0, body.msg, body.data))
    })
  }
}

export function fetchInvitationList(params) {
  return dispatch => dispatch(invitationList(params))
}

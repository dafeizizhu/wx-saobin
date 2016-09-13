import { getMyRequest } from '../../utils/cengceng-api/request'

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
      dispatch(recieveRequestList(body.error_code >= 0, body.msg, body.data))
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

export const CHANGE_DESTINATION = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_DESTINATION'

export function changeDestination(loc, name) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departure_time) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departure_time
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

export function changeRemark(remark) {
  return {
    type: CHANGE_REMARK,
    remark
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-USER_CENTER_MY_REQUESTS-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passenger_num) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passenger_num
  }
}

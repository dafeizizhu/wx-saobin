import { publishTravel } from '../../utils/cengceng-api' 
import { push } from 'react-router-redux'

export const CHANGE_TYPE = 'ROUTES-OWN_A_CAR-CHANGE_TYPE'

export function changeType(nextType) {
  return {
    type: CHANGE_TYPE,
    nextType
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-OWN_A_CAR-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passengerNum) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passengerNum 
  }
}

export const CHANGE_VEHICLE_ID = 'ROUTES-OWN_A_CAR-CHANGE_VEHICLE_ID'

export function changeVehicleId(vehicleId) {
  return {
    type: CHANGE_VEHICLE_ID,
    vehicleId
  }
}

export const CHANGE_DEPARTURE = 'ROUTES-OWN_A_CAR-CHANGE_DEPARTURE'

export function changeDeparture(loc, name) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name
  }
}

export const CHANGE_DESTINATION = 'ROUTES-OWN_A_CAR-CHANGE_DESTINATION'

export function changeDestination(loc, name) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name
  }
}

export const REQUEST_PUBLISH = 'ROUTES-OWN_A_CAR-REQUEST_PUBLISH'

export function requestPublish(params) {
  return {
    type: REQUEST_PUBLISH,
    params
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-OWN_A_CAR-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departureTime) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departureTime
  }
}

export const CHANGE_REWARD = 'ROUTES-OWN_A_CAR-CHANGE_REWARD'

export function changeReward(reward) {
  return {
    type: CHANGE_REWARD,
    reward
  }
}

export const CHANGE_REMARK = 'ROUTES-OWN_A_CAR-CHANGE_REMARK'

export function changeRemark(remark) {
  return {
    type: CHANGE_REMARK,
    remark
  }
}

export const RECIEVE_PUBLISH = 'ROUTES-OWN_A_CAR-RECIEVE_PUBLISH'

export function recievePublish(success, message, requestList) {
  return {
    type: RECIEVE_PUBLISH,
    success,
    message,
    requestList
  }
}

export function publish(params) {
  return dispatch => {
    dispatch(requestPublish(params))
    publishTravel(params, ret => {
      dispatch(recievePublish(ret.error_code >= 0, ret.msg, ret.request_list))
      dispatch(push('/own-a-car/rs'))
    })
  }
}

export function fetchPublish(params) {
  return dispatch => dispatch(publish(params))
}

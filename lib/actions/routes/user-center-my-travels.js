import { getTravelList } from '../../utils/cengceng-api'

export const CHANGE_DEPARTURE = 'ROUTES-USER_CENTER_MY_TRAVELS-CHANGE_DEPARTURE'

export function changeDeparture(loc, name, item) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name,
    item
  }
}

export const REQUEST_TRAVEL_LIST = 'ROUTES-USER_CENTER_MY_TRAVELS-REQUEST_TRAVEL_LIST'

export function requestTravelList(params) {
  return {
    type: REQUEST_TRAVEL_LIST,
    params
  }
}

export const RECIEVE_TRAVEL_LIST = 'ROUTES-USER_CENTER_MY_TRAVELS-RECIEVE_TRAVEL_LIST'

export function recieveTravelList(success, message, travelList) {
  return {
    type: RECIEVE_TRAVEL_LIST,
    success,
    message,
    travelList
  }
}

export function travelList(params) {
  return dispatch => {
    dispatch(requestTravelList(params))
    getTravelList(params, ret => {
      dispatch(recieveTravelList(ret.error_code >= 0, ret.msg, ret.data))
    })
  }
}

export function fetchTravelList(params) {
  return dispatch => dispatch(travelList(params))
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

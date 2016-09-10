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

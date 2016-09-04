import { searchTravel } from '../../utils/cengceng-api'

export const CHANGE_DEPARTURE = 'ROUTES-NEED_A_CAR-CHANGE_DEPARTURE'

export function changeDeparture(loc, name) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name
  }
}

export const CHANGE_DESTINATION = 'ROUTES-NEED_A_CAR-CHANGE_DESTINATION'

export function changeDestination(loc, name) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-NEED_A_CAR-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departureTime) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departureTime
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-NEED_A_CAR-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passengerNum) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passengerNum
  }
}

export const REQUEST_SEARCH = 'ROUTES-NEED_A_CAR-REQUEST_SEARCH'

export function requestSearch(params) {
  return {
    type: REQUEST_SEARCH,
    params
  }
}

export const RECIEVE_SEARCH = 'ROUTES-NEED_A_CAR-RECIEVE_SEARCH'

export function recieveSearch(success, message) {
  return {
    type: RECIEVE_SEARCH,
    success,
    message
  }
}

export function search(params) {
  return dispatch => {
    dispatch(requestSearch(params))
    searchTravel(params, ret => {
      dispatch(recieveSearch(ret.error_code >= 0, ret.msg))
    })
  }
}

export function fetchSearch(params) {
  return dispatch => dispatch(search(params))
}

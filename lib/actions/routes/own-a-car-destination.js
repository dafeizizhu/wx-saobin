import { MapApi } from '../../utils/map-api'

let mapApi

export const REQUEST_SEARCH = 'ROUTES-OWN_A_CAR_DESTINATION-REQUEST_SEARCH'

export function requestSearch(keyword) {
  return {
    type: REQUEST_SEARCH,
    keyword
  }
}

export const RECIEVE_SEARCH = 'ROUTES-OWN_A_CAR_DESTINATION-RECIEVE_SEARCH'

export function recieveSearch(success, message, list) {
  return {
    type: RECIEVE_SEARCH,
    success,
    message,
    list
  }
}

export function search(keyword) {
  return dispatch => {
    dispatch(requestSearch(keyword))
    if (!mapApi) mapApi = new MapApi()
    mapApi.search(keyword, (success, message, list) => {
      dispatch(recieveSearch(success, message, list))
    })
  }
}

export function fetchSearch(keyword) {
  return dispatch => dispatch(search(keyword))
}

export const CLEAR_TIPS = 'ROUTES-OWN_A_CAR_DESTINATION-CLEAR_TIPS'

export function clearTips() {
  return {
    type: CLEAR_TIPS
  }
}

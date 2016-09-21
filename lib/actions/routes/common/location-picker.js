import { MapApi } from '../../../utils/map-api'

const mapApi = new MapApi()

export const REQUEST_CHANGE = 'ROUTES-COMMON-LOCATION_PICKER-REQUEST_CHANGE'

export function requestChange(keyword) {
  return {
    type: REQUEST_CHANGE,
    keyword
  }
}

export const RECIEVE_CHANGE = 'ROUTES-COMMON-LOCATION_PICKER-RECIEVE_CHANGE'

export function recieveChange(success, message, results) {
  return {
    type: RECIEVE_CHANGE,
    success, 
    message,
    results
  }
}

export function change(keyword) {
  return dispatch => {
    dispatch(requestChange(keyword))
    mapApi.search(keyword, (results, status) => {
      dispatch(recieveChange(true, status, results))
    })
  }
}

export function fetchChange(keyword) {
  return dispatch => dispatch(change(keyword))
}

export const REQUEST_SUBMIT = 'ROUTES-COMMON-LOCATION_PICKER-REQUEST_SUBMIT'

export function requestSubmit(keyword) {
  return {
    type: REQUEST_SUBMIT,
    keyword
  }
}

export const RECIEVE_SUBMIT = 'ROUTES-COMMON-LOCATION_PICKER-RECIEVE_SUBMIT'

export function recieveSubmit(success, message, result) {
  return {
    type: RECIEVE_SUBMIT,
    success,
    message,
    result
  }
}

export function submit(keyword) {
  return dispatch => {
    dispatch(requestSubmit(keyword))
    mapApi.search(keyword, (results, status) => {
      if (results && results.length) {
        dispatch(recieveSubmit(true, status, results[0]))
      } else {
        dispatch(recieveSubmit(false, status))
      }
    })
  }
}

export function fetchSubmit(keyword) {
  return dispatch => dispatch(submit(keyword))
}

export const REQUEST_ADDRESS = 'ROUTES-COMMON-LOCATION_PICKER-REQUEST_ADDRESS'

export function requestAddress(loc) {
  return {
    type: REQUEST_ADDRESS,
    loc
  }
}

export const RECIEVE_ADDRESS = 'ROUTES-COMMON-LOCATION_PICKER-RECIEVE_ADDRESS'

export function recieveAddress(success, message, result) {
  return {
    type: RECIEVE_ADDRESS,
    success,
    message,
    result
  }
}

export function address(loc) {
  return dispatch => {
    dispatch(requestAddress(loc))
    mapApi.getAddress(loc, (result, status) => {
      if (result) {
        dispatch(recieveAddress(true, status, result))
      } else {
        dispatch(recieveAddress(false, status))
      }
    })
  }
}

export function fetchAddress(loc) {
  return dispatch => dispatch(address(loc))
}

export const CLEAR_RESULTS = 'ROUTES-COMMON-LOCATION_PICKER-CLEAR_RESULTS'

export function clearResults() {
  return {
    type: CLEAR_RESULTS
  }
}

export const CHANGE_RESULT = 'ROUTES-COMMON-LOCATION_PICKER-CHANGE_RESULT'

export function changeResult(result) {
  return {
    type: CHANGE_RESULT,
    result
  }
}

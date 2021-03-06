import { push } from 'react-router-redux'

import { searchTravel } from '../../utils/cengceng-api/travel'
import { postRequest } from '../../utils/cengceng-api/request'
import { myConfirm, myAlert } from '../../utils/dialog'

export const CHANGE_DEPARTURE = 'ROUTES-REQUEST-CHANGE_DEPARTURE'

export function changeDeparture(loc, name) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name
  }
}

export const CHANGE_DESTINATION = 'ROUTES-REQUEST-CHANGE_DESTINATION'

export function changeDestination(loc, name) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-REQUEST-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departureTime) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departureTime
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-REQUEST-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passengerNum) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passengerNum
  }
}

export const REQUEST_SEARCH = 'ROUTES-REQUEST-REQUEST_SEARCH'

export function requestSearch(params) {
  return {
    type: REQUEST_SEARCH,
    params
  }
}

export const RECIEVE_SEARCH = 'ROUTES-REQUEST-RECIEVE_SEARCH'

export function recieveSearch(success, message, travelList) {
  return {
    type: RECIEVE_SEARCH,
    success,
    message,
    travelList
  }
}

export function search(params) {
  return dispatch => {
    dispatch(requestSearch(params))
    searchTravel(params, ret => {
      if (ret.error_code > 0) {
        if (ret.data.length) {
          dispatch(recieveSearch(ret.error_code > 0, ret.msg, ret.data))
          dispatch(push('/request/submit'))
        } else {
          myConfirm('没有可匹配用车，发布蹭车需求？（发布后，愿意接车的车主会主动向您发送行程单）', () => {
            dispatch(fetchPublish(params))
          })
        }
      } else {
        myAlert('搜索失败：' + ret.msg, () => {
          dispatch(recieveSearch(ret.error_code > 0, ret.msg, ret.data))
        })
      }
    })
  }
}

export function fetchSearch(params) {
  return dispatch => dispatch(search(params))
}

export const REQUEST_PUBLISH = 'ROUTES-REQUEST-REQUEST_PUBLISH'

export function requestPublish(params) {
  return {
    type: REQUEST_PUBLISH,
    params
  }
}

export const RECIEVE_PUBLISH = 'ROUTES-REQUEST-RECIEVE_PUBLISH'

export function recievePublish(success, message) {
  return {
    type: RECIEVE_PUBLISH,
    success,
    message
  }
}

export function publish(params) {
  return dispatch => {
    dispatch(requestPublish(params))
    postRequest(params, ret => {
      dispatch(recievePublish(ret.error_code > 0, ret.msg))
      if (ret.error_code > 0) {
        dispatch(push('/request/submit'))
      } else {
        myAlert('发布失败：' + ret.msg)
      }
    })
  }
}

export function fetchPublish(params) {
  return dispatch => dispatch(publish(params))
}

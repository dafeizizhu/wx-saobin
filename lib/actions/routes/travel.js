import { push } from 'react-router-redux'

import { postTravel } from '../../utils/cengceng-api/travel' 
import { searchRequest } from '../../utils/cengceng-api/request'
import { myAlert } from '../../utils/dialog'

export const CHANGE_TYPE = 'ROUTES-TRAVEL-CHANGE_TYPE'

export function changeType(nextType) {
  return {
    type: CHANGE_TYPE,
    nextType
  }
}

export const CHANGE_PASSENGER_NUM = 'ROUTES-TRAVEL-CHANGE_PASSENGER_NUM'

export function changePassengerNum(passengerNum) {
  return {
    type: CHANGE_PASSENGER_NUM,
    passengerNum 
  }
}

export const CHANGE_VEHICLE_ID = 'ROUTES-TRAVEL-CHANGE_VEHICLE_ID'

export function changeVehicleId(vehicleId) {
  return {
    type: CHANGE_VEHICLE_ID,
    vehicleId
  }
}

export const CHANGE_DEPARTURE = 'ROUTES-TRAVEL-CHANGE_DEPARTURE'

export function changeDeparture(loc, name) {
  return {
    type: CHANGE_DEPARTURE,
    loc,
    name
  }
}

export const CHANGE_DESTINATION = 'ROUTES-TRAVEL-CHANGE_DESTINATION'

export function changeDestination(loc, name) {
  return {
    type: CHANGE_DESTINATION,
    loc,
    name
  }
}

export const REQUEST_PUBLISH = 'ROUTES-TRAVEL-REQUEST_PUBLISH'

export function requestPublish(params) {
  return {
    type: REQUEST_PUBLISH,
    params
  }
}

export const CHANGE_DEPARTURE_TIME = 'ROUTES-TRAVEL-CHANGE_DEPARTURE_TIME'

export function changeDepartureTime(departureTime) {
  return {
    type: CHANGE_DEPARTURE_TIME,
    departureTime
  }
}

export const CHANGE_REWARD = 'ROUTES-TRAVEL-CHANGE_REWARD'

export function changeReward(reward) {
  return {
    type: CHANGE_REWARD,
    reward
  }
}

export const CHANGE_REMARK = 'ROUTES-TRAVEL-CHANGE_REMARK'

export function changeRemark(remark) {
  return {
    type: CHANGE_REMARK,
    remark
  }
}

export const RECIEVE_PUBLISH = 'ROUTES-TRAVEL-RECIEVE_PUBLISH'

export function recievePublish(success, message, travel_id, requestList) {
  return {
    type: RECIEVE_PUBLISH,
    success,
    message,
    travel_id,
    requestList
  }
}

export function publish(params) {
  return dispatch => {
    dispatch(requestPublish(params))
    postTravel(params, ret => {
      if (ret.error_code > 0) {
        searchRequest({
          passenger_num: params.passenger_num,
          departure_name: params.departure_name,
          departure_longtitude: params.departure_longtitude,
          departure_latitude: params.departure_latitude,
          vehicle_id: params.vehicle_id,
          user_id: params.user_id
        }, retSearch => {
          if (retSearch.error_code > 0) {
            dispatch(recievePublish(ret.error_code > 0, ret.msg, ret.data.travel_id, retSearch.data))
          } else {
            dispatch(recievePublish(ret.error_code > 0, ret.msg, ret.data.travel_id, []))
          }
          dispatch(push('/travel/submit'))
        })
      } else {
        myAlert('发布失败：' + ret.msg)
        dispatch(recievePublish(ret.error_code > 0, ret.msg, [], []))
      }
    })
  }
}

export function fetchPublish(params) {
  return dispatch => dispatch(publish(params))
}

export const REQUEST_SEARCH = 'ROUTES-TRAVEL-REQUEST_SEARCH'

export function requestSearch(params) {
  return {
    type: REQUEST_SEARCH,
    params
  }
}

export const RECIEVE_SEARCH = 'ROUTES-TRAVEL-RECIEVE_SEARCH'

export function recieveSearch(success, message, requestList) {
  return {
    type: RECIEVE_SEARCH,
    success,
    message,
    requestList
  }
}

export function search(params) {
  return dispatch => {
    dispatch(requestSearch(params))
    searchRequest(params, ret => {
      dispatch(recieveSearch(ret.error_code > 0, ret.msg, ret.data))
      dispatch(push('/travel/submit'))
    })
  }
}

export function fetchSearch(params) {
  return dispatch => dispatch(search(params))
}

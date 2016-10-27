import { push } from 'react-router-redux'

import { postRequest } from '../../utils/cengceng-api/request'
import { myAlert } from '../../utils/dialog'

export const REQUEST_POST_REQUEST = 'ROUTES-REQUEST_SUBMIT-REQUEST_POST_REQUEST'

export function requestPostRequest(user_id, passenger_num, item) {
  return {
    type: REQUEST_POST_REQUEST,
    user_id,
    passenger_num,
    item
  }
}

export const RECIEVE_POST_REQUEST = 'ROUTES-RECIEVE_SUBMIT-RECIEVE_POST_REQUEST'

export function recievePostRequest(success, message) {
  return {
    type: RECIEVE_POST_REQUEST,
    success,
    message
  }
}

export function fetchPostRequest(user_id, passenger_num, item) {
  return dispatch => {
    dispatch(requestPostRequest(user_id, passenger_num, item))
    postRequest({
      user_id,
      passenger_num,
      travel_id: item.travel_id,
      driver_user_id: item.driver_user_id,
      departure_longtitude: item.departure_longtitude,
      departure_latitude: item.departure_latitude,
      departure_name: item.departure_addr,
      destination_name: item.destination_addr,
      destination_longtitude: item.destination_longtitude,
      destination_latitude: item.destination_latitude,
      departure_time: item.departure_time
    }, ret => {
      dispatch(recievePostRequest(ret.error_code > 0, ret.msg))
      if (ret.error_code > 0) {
        myAlert('已向车主发送蹭车请求！车主将收到您的联系方式并联系您。', () => {
          // TODO
          dispatch(push('/request'))
        })
      } else {
        myAlert('发送蹭车请求失败：' + ret.msg)
      }
    })
  }
}



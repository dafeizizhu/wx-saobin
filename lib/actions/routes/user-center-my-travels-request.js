import { push } from 'react-router-redux'

import { answerRequest } from '../../utils/cengceng-api/request'
import { myAlert } from '../../utils/dialog'

export const BEGIN_REQUEST = 'ROUTES-USER_CENTER_MY_TRAVELS_REQUEST-BEGIN_REQUEST'

export function beginRequest(item) {
  return {
    type: BEGIN_REQUEST,
    item
  }
}

export const REQUEST_ANSWER_REQUEST = 'ROUTES-USER_CENTER_MY_TRAVELS_REQUEST-REQUEST_ANSWER_REQUEST'

export function requestAnswerRequest(user_id, request_id, result) {
  return {
    type: REQUEST_ANSWER_REQUEST,
    user_id,
    request_id,
    result
  }
}

export const RECIEVE_ANSWER_REQUEST = 'ROUTES-USER_CENTER_MY_TRAVELS_REQUEST-RECIEVE_ANSWER_REQUEST'

export function recieveAnswerRequest(success, message) {
  return {
    type: RECIEVE_ANSWER_REQUEST,
    success,
    message
  }
}

export function fetchAnswerRequest(user_id, request_id, result) {
  return dispatch => {
    dispatch(requestAnswerRequest(user_id, request_id, result))
    answerRequest({
      user_id,
      request_id,
      result
    }, ret => {
      dispatch(recieveAnswerRequest(ret.error_code > 0, ret.msg))
      if (ret.error_code > 0) {
        if (result == 1) {
          myAlert('已确定接该乘客，请通过乘客的联系方式沟通联系Ta。', () => {
            dispatch(push('/user-center/my-travels'))
          })
        } else {
          myAlert('已拒绝该乘客的请求！', () => {
            dispatch(push('/user-center/my-travels'))
          })
        }
      } else {
        myAlert('应答错误：' + ret.msg)
      }
    })
  }
}

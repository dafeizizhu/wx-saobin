import { getUserInfo } from '../../utils/cengceng-api/users'

export const REQUEST_USER_INFO = 'STATE-USER-REQUEST_USER_INFO'

export function requestUserInfo(user_id) {
  return {
    type: REQUEST_USER_INFO,
    user_id
  }
}

export const RECIEVE_USER_INFO = 'STATE-USER-RECIEVE_USER_INFO'

export function recieveUserInfo(success, message, userInfo) {
  return {
    type: RECIEVE_USER_INFO,
    success,
    message,
    userInfo
  }
}

export function fetchUserInfo(user_id) {
  return dispatch => {
    dispatch(requestUserInfo(user_id))
    getUserInfo({ user_id }, body => {
      dispatch(recieveUserInfo(body.error_code > 0, body.msg, body.data))
    })
  }
}

import { push } from 'react-router-redux'

import { myAlert } from '../../utils/dialog'
import { postInvitation } from '../../utils/cengceng-api/invitation'

export const REQUEST_POST_INVITATION = 'ROUTES-TRAVEL_SUBMIT-REQUEST_POST_INVITATION'

export function requestPostInvitation(user_id, travel_id, item) {
  return {
    type: REQUEST_POST_INVITATION,
    user_id,
    travel_id,
    item
  }
}

export const RECIEVE_POST_INVITATION = 'ROUTES-TRAVEL_SUBMIT-RECIEVE_POST_INVITATION'

export function recievePostInvitation(success, message) {
  return {
    type: RECIEVE_POST_INVITATION,
    success,
    message
  }
}

export function fetchPostInvitation(user_id, travel_id, item) {
  return dispatch => {
    dispatch(requestPostInvitation(user_id, travel_id, item))
    postInvitation({
      driver_user_id: user_id,
      pass_user_id: item.pass_user_id,
      travel_id,
      request_id: item.request_id
    }, ret => {
      dispatch(recievePostInvitation(ret.error_code > 0, ret.msg))
      if (ret.error_code > 0) {
        myAlert('邀请成功', () => {
          // TODO
          dispatch(push('/travel'))
        })
      } else {
        myAlert('邀请失败：' + ret.msg)
      }
    })
  }
}

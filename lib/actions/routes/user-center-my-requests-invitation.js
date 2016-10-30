import { push } from 'react-router-redux'

import { answerInvitation } from '../../utils/cengceng-api/invitation'
import { myAlert } from '../../utils/dialog'

export const BEGIN_INVITATION = 'ROUTES-USER_CENTER_MY_REQUESTS-BEGIN_INVITATAION'

export function beginInvitation(item) {
  return {
    type: BEGIN_INVITATION,
    item
  }
}

export const REQUEST_ANSWER_INVITATION = 'ROUTES-USER_CENTER_MY_REQUESTS-REQUEST_ANSWER_INVITATION'

export function requestAnswerInvitation(user_id, invitation_id, result) {
  return {
    type: REQUEST_ANSWER_INVITATION,
    user_id,
    invitation_id,
    result
  }
}

export const RECIEVE_ANSWER_INVITATION = 'ROUTS-USER_CENTER_MY_REQUESTS-RECIEVE_ANSWER_INVITATION'

export function recieveAnswerInvitation(success, message) {
  return {
    type: RECIEVE_ANSWER_INVITATION,
    success,
    message
  }
}

export function fetchAnswerInvitation(user_id, invitation_id, result) {
  return dispatch => {
    dispatch(requestAnswerInvitation(user_id, invitation_id, result))
    answerInvitation({
      user_id,
      invitation_id,
      result
    }, ret => {
      dispatch(recieveAnswerInvitation(ret.error_code > 0, ret.msg))
      if (ret.error_code > 0) {
        if (result == 1) {
          myAlert('已确定蹭车，请通过车主的联系方式沟通联系Ta。', () => {
            dispatch(push('/user-center/my-requests'))
          })
        } else {
          myAlert('已拒绝该车主的邀请。', () => {
            dispatch(push('/user-center/my-requests'))
          })
        }
      } else {
        myAlert('应答错误：' + ret.msg)
      }
    })
  }
}

import { notifyInvitationRead } from '../../utils/cengceng-api/invitation'

export const BEGIN = 'ROUTES-USER_CENTER_MY_TRAVELS_INVITATION-BEGIN'

export function begin(item) {
  notifyInvitationRead({ invitation_id: item.invitation_id })
  return {
    type: BEGIN,
    item
  }
}

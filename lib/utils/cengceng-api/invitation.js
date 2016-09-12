const DATA_SOURCE = {
  getMyInvitation: './fixture/CCInvitation/getMyInvitation'
}

export function getInvitationForMe(params, cb) { 
}
export function getMyInvitation(params, cb) {
  $.getJSON(DATA_SOURCE.getMyInvitation, params, cb) 
}

export default {
  getInvitationForMe,
  getMyInvitation
}

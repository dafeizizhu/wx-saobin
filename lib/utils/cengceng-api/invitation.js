import { getJSON } from '../request'

const DATA_SOURCE_LOCAL = {
  getMyInvitationRes: './fixture/CCInvitation/getMyInvitationRes',
  getInvitationForMe: './fixture/CCInvitation/getInvitationForMe',
  notifyInvitationRead: './fixture/CCInvitation/notifyInvitationRead'
}

const DATA_SOURCE_REMOTE = {
  getMyInvitationRes: '/Home/CCInvitation/getMyInvitationRes',
  getInvitationForMe: './fixture/CCInvitation/getInvitationForMe',
  notifyInvitationRead: '/Home/CCInvitation/notifyInvitationRead'
}

const DATA_SOURCE = process.env.API_ENV == 'local' ?
  DATA_SOURCE_LOCAL :
  DATA_SOURCE_REMOTE

export function getInvitationForMe(params, cb) {
  $.getJSON(DATA_SOURCE.getInvitationForMe, params, cb)
}

export function getMyInvitationRes(params, cb) {
  getJSON(DATA_SOURCE.getMyInvitationRes, params, cb) 
}

export function notifyInvitationRead(params, cb) {
  getJSON(DATA_SOURCE.notifyInvitationRead, params, cb)
}

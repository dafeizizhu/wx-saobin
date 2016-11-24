import { getJSON, post } from '../request'

const DATA_SOURCE_LOCAL = {
  searchRequest: './fixture/CCRequest/searchRequest',
  postRequest: './fixture/CCRequest/postRequest',
  getRequestForMe: './fixture/CCRequest/getRequestForMe',
  getMyRequest: './fixture/CCRequest/getMyRequest',
  notifyRequestRead: './fixture/CCRequest/notifyRequestRead',
  answerRequest: './fixture/CCRequest/answerRequest',
}

const DATA_SOURCE_REMOTE = {
  searchRequest: '/Home/CCRequest/searchRequest',
  postRequest: '/Home/CCRequest/postRequest',
  getRequestForMe: '/Home/CCRequest/getRequestForMe',
  getMyRequest: '/Home/CCRequest/getMyRequest',
  getMyRequestRes: '/Home/CCRequest/getMyRequestRes',
  notifyRequestRead: '/Home/CCRequest/notifyRequestRead',
  answerRequest: '/Home/CCRequest/answerRequest',
  delMyRequest: '/Home/CCRequest/delMyRequest'
}

const DATA_SOURCE = process.env.API_ENV == 'local' ?
  DATA_SOURCE_LOCAL : DATA_SOURCE_REMOTE

export function answerRequest(params, cb) {
  post(DATA_SOURCE.answerRequest, params, cb)
}

export function getMyRequestRes(params, cb) {
  getJSON(DATA_SOURCE.getMyRequestRes, params, cb) 
}

export function getRequestForMe(params, cb) {
  getJSON(DATA_SOURCE.getRequestForMe, params, cb) 
}

export function postRequest(params, cb) { 
  post(DATA_SOURCE.postRequest, params, cb) 
}

export function searchRequest(params, cb) {
  getJSON(DATA_SOURCE.searchRequest, params, cb) 
}

export function notifyRequestRead(params, cb) {
  getJSON(DATA_SOURCE.notifyRequestRead, params, cb)
}

export function getMyRequest(params, cb) {
  getJSON(DATA_SOURCE.getMyRequest, params, cb)
}

export function delMyRequest(params, cb) {
  post(DATA_SOURCE.delMyRequest, params, cb)
}

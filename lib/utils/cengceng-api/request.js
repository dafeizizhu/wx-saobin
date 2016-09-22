import { getJSON, post } from '../request'

const DATA_SOURCE_LOCAL = {
  searchRequest: './fixture/CCRequest/searchRequest',
  postRequest: './fixture/CCRequest/postRequest',
  getRequestForMe: './fixture/CCRequest/getRequestForMe',
  getMyRequest: './fixture/CCRequest/getMyRequest'
}

const DATA_SOURCE_REMOTE = {
  //searchRequest: '/Home/CCRequest/searchRequest',
  searchRequest: './fixture/CCRequest/searchRequest',
  postRequest: '/Home/CCRequest/postRequest',
  getRequestForMe: './fixture/CCRequest/getRequestForMe',
  getMyRequest: './fixture/CCRequest/getMyRequest'
}

const DATA_SOURCE = process.env.API_ENV == 'local' ?
  DATA_SOURCE_LOCAL : DATA_SOURCE_REMOTE

export function answerRequest() {}
export function delMyRequest() {}
export function getMyRequest(params, cb) { $.getJSON(DATA_SOURCE.getMyRequest, params, cb) }
export function getRequestForMe(params, cb) { $.getJSON(DATA_SOURCE.getRequestForMe, params, cb) }

export function postRequest(params, cb) { 
  post(DATA_SOURCE.postRequest, params, cb) 
}

export function searchRequest(params, cb) {
  getJSON(DATA_SOURCE.searchRequest, params, cb) 
}

export default {
  answerRequest,
  delMyRequest,
  getMyRequest,
  getRequestForMe,
  postRequest,
  searchRequest
}

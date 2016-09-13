const DATA_SOURCE = {
  searchRequest: './fixture/CCRequest/searchRequest',
  postRequest: './fixture/CCRequest/postRequest',
  getRequestForMe: './fixture/CCRequest/getRequestForMe',
  getMyRequest: './fixture/CCRequest/getMyRequest'
}

export function answerRequest() {}
export function delMyRequest() {}
export function getMyRequest(params, cb) { $.getJSON(DATA_SOURCE.getMyRequest, params, cb) }
export function getRequestForMe(params, cb) { $.getJSON(DATA_SOURCE.getRequestForMe, params, cb) }
export function postRequest(params, cb) { $.getJSON(DATA_SOURCE.postRequest, params, cb) }
export function searchRequest(params, cb) { $.getJSON(DATA_SOURCE.searchRequest, params, cb) }

export default {
  answerRequest,
  delMyRequest,
  getMyRequest,
  getRequestForMe,
  postRequest,
  searchRequest
}

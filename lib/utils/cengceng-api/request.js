const DATA_SOURCE = {
  searchRequest: './fixture/CCRequest/searchRequest',
  postRequest: './fixture/CCRequest/postRequest'
}

export function answerRequest() {}
export function delMyRequest() {}
export function getMyRequest() {}
export function getRequestForMe() {}
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

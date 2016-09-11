const DATA_SOURCE = {
  searchRequest: './fixture/CCRequest/searchRequest'
}

export function answerRequest() {}
export function delMyRequest() {}
export function getMyRequest() {}
export function getRequestForMe() {}
export function postRequest() {}
export function searchRequest(params, cb) { $.getJSON(DATA_SOURCE.searchRequest, cb) }

export default {
  answerRequest,
  delMyRequest,
  getMyRequest,
  getRequestForMe,
  postRequest,
  searchRequest
}

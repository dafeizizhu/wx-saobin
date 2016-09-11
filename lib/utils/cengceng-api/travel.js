const DATA_SOURCE = {
  postTravel: './fixture/CCTravel/postTravel',
  searchTravel: './fixture/CCTravel/searchTravel'
}

export function getMyComment() {}
export function getMyTravel() {}
export function postTravel(params, cb) { $.getJSON(DATA_SOURCE.postTravel, params, cb) }
export function searchTravel(params, cb) { $.getJSON(DATA_SOURCE.searchTravel, params, cb) }

export default {
  getMyComment,
  getMyTravel,
  postTravel,
  searchTravel
}

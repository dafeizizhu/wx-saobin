const DATA_SOURCE = {
  postTravel: './fixture/CCTravel/postTravel'
}

export function getMyComment() {}
export function getMyTravel() {}
export function postTravel(params, cb) { $.getJSON(DATA_SOURCE.postTravel, cb) }
export function searchTravel() {}

export default {
  getMyComment,
  getMyTravel,
  postTravel,
  searchTravel
}

import { post } from '../request'

const DATA_SOURCE_LOCAL = {
  postTravel: './fixture/CCTravel/postTravel',
  searchTravel: './fixture/CCTravel/searchTravel'
}

const DATA_SOURCE_REMOTE = {
  postTravel: '/Home/CCTravel/postTravel',
  searchTravel: './fixture/CCTravel/searchTravel'
}

const DATA_SOURCE = process.env.API_ENV == 'local' ?
  DATA_SOURCE_LOCAL :
  DATA_SOURCE_REMOTE

export function getMyComment() {}
export function getMyTravel() {}
export function postTravel(params, cb) { 
  post(DATA_SOURCE.postTravel, params, cb) 
}
export function searchTravel(params, cb) { $.getJSON(DATA_SOURCE.searchTravel, params, cb) }

export default {
  getMyComment,
  getMyTravel,
  postTravel,
  searchTravel
}

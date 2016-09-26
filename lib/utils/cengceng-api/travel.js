import { post, getJSON } from '../request'

const DATA_SOURCE_LOCAL = {
  postTravel: './fixture/CCTravel/postTravel',
  searchTravel: './fixture/CCTravel/searchTravel',
  getMyTravel: './fixture/CCTravel/getMyTravel'
}

const DATA_SOURCE_REMOTE = {
  postTravel: '/Home/CCTravel/postTravel',
  searchTravel: './fixture/CCTravel/searchTravel',
  getMyTravel: './fixture/CCTravel/getMyTravel'
}

const DATA_SOURCE = process.env.API_ENV == 'local' ?
  DATA_SOURCE_LOCAL :
  DATA_SOURCE_REMOTE

export function getMyComment() {}

export function getMyTravel(params, cb) {
  getJSON(DATA_SOURCE.getMyTravel, params, cb)
}

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

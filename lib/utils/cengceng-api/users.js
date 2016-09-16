const DATA_SOURCE_LOCAL = {
  register: './fixture/CCUsers/register',
  getUserInfo: './fixture/CCUsers/getUserInfo'
}

const DATA_SOURCE_REMOTE = {
  register: '/Home/CCUsers/register',
  getUserInfo: './fixture/CCUsers/getUserInfo'
}

const DATA_SOURCE = process.env.API_ENV == 'local' ?
  DATA_SOURCE_LOCAL :
  DATA_SOURCE_REMOTE

export function getAccountStatus() {}
export function getUserInfo(params, cb) { $.getJSON(DATA_SOURCE.getUserInfo, params, cb) }
export function register(params, files, cb) { $.getJSON(DATA_SOURCE.register, params, cb) }

export default {
  getAccountStatus,
  getUserInfo,
  register
}

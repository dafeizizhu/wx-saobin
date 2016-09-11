const DATA_SOURCE = {
  register: './fixture/CCUsers/register',
  getUserInfo: './fixture/CCUsers/getUserInfo'
}

export function getAccountStatus() {}
export function getUserInfo(params, cb) { $.getJSON(DATA_SOURCE.getUserInfo, params, cb) }
export function register(params, files, cb) { $.getJSON(DATA_SOURCE.register, params, cb) }

export default {
  getAccountStatus,
  getUserInfo,
  register
}

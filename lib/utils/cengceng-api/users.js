const DATA_SOURCE = {
  register: './fixture/CCUsers/register'
}

export function getAccountStatus() {}
export function getUserInfo() {}
export function register(params, files, cb) { $.getJSON(DATA_SOURCE.register, params, cb) }

export default {
  getAccountStatus,
  getUserInfo,
  register
}

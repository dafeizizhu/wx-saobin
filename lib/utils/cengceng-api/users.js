import { postFormData } from '../request'

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
export function register(params, files, cb) { 
  const formData = new FormData()
  Object.keys(params).forEach(key => {
    if (['license_pic', 'vehicle_1_pic', 'vehicle_2_pic'].indexOf(key) >= 0) {
      // file field
      if (files[key + '_file']) {
        formData.append(key, files[key + '_file'])
      }
    } else {
      formData.append(key, params[key])
    }
  })
  postFormData(DATA_SOURCE.register, formData, cb)
} 

export default {
  getAccountStatus,
  getUserInfo,
  register
}

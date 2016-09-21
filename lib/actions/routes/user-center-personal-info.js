import { myAlert } from '../../utils/dialog'
import { getUserInfo } from '../../utils/cengceng-api/users'

export const CHANGE_IS_DRIVER = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_IS_DRIVER'

export function changeIsDriver(isDriver) {
  return {
    type: CHANGE_IS_DRIVER,
    isDriver
  }
}

export const CHANGE_MORE_VEHICLE = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_MORE_VEHICLE'

export function changeMoreVehicle(moreVehicle) {
  return {
    type: CHANGE_MORE_VEHICLE,
    moreVehicle
  }
}

export const CHANGE_LICENSE_NO = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_LICENSE_NO'

export function changeLicenseNo(licenseNo) {
  return {
    type: CHANGE_LICENSE_NO,
    licenseNo
  }
}

export const CHANGE_LICENSE_PIC = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_LICENSE_PIC'

export function changeLicensePic(licensePic, fileInput) {
  return {
    type: CHANGE_LICENSE_PIC,
    licensePic,
    fileInput
  }
}

export const CHANGE_SCHOOL = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_SCHOOL'

export function changeSchool(school) {
  return {
    type: CHANGE_SCHOOL,
    school
  }
}

export const CHANGE_NAME = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_NAME'

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  }
}

export const CHANGE_NICK_NAME = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_NICK_NAME'

export function changeNickName(nickName) {
  return {
    type: CHANGE_NICK_NAME,
    nickName
  }
}

export const CHANGE_EMAIL = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_EMAIL'

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email
  }
}

export const CHANGE_ENROLLMENT_T = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_RNROLLMENT_T'

export function changeEnrollmentT(enrollmentT) {
  return {
    type: CHANGE_ENROLLMENT_T,
    enrollmentT
  }
}

export const CHANGE_VEHICLE_1_BRAND = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_1_BRAND'

export function changeVehicle1Brand(vehicle1Brand) {
  return {
    type: CHANGE_VEHICLE_1_BRAND,
    vehicle1Brand
  }
}

export const CHANGE_VEHICLE_1_MODEL = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_1_MODEL'

export function changeVehicle1Model(vehicle1Model) {
  return {
    type: CHANGE_VEHICLE_1_MODEL,
    vehicle1Model
  }
}

export const CHANGE_VEHICLE_1_NUM = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_1_NUM'

export function changeVehicle1Num(vehicle1Num) {
  return {
    type: CHANGE_VEHICLE_1_NUM,
    vehicle1Num
  }
}

export const CHANGE_VEHICLE_2_BRAND = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_2_BRAND'

export function changeVehicle2Brand(vehicle2Brand) {
  return {
    type: CHANGE_VEHICLE_2_BRAND,
    vehicle2Brand
  }
}

export const CHANGE_VEHICLE_2_MODEL = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_2_MODEL'

export function changeVehicle2Model(vehicle2Model) {
  return {
    type: CHANGE_VEHICLE_2_MODEL,
    vehicle2Model
  }
}

export const CHANGE_VEHICLE_2_NUM = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_2_NUM'

export function changeVehicle2Num(vehicle2Num) {
  return {
    type: CHANGE_VEHICLE_2_NUM,
    vehicle2Num
  }
}

export const CHANGE_VEHICLE_1_PIC = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_1_PIC'

export function changeVehicle1Pic(vehicle1Pic, fileInput) {
  return {
    type: CHANGE_VEHICLE_1_PIC,
    vehicle1Pic,
    fileInput
  }
}

export const CHANGE_VEHICLE_2_PIC = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_VEHICLE_2_PIC'

export function changeVehicle2Pic(vehicle2Pic, fileInput) {
  return {
    type: CHANGE_VEHICLE_2_PIC,
    vehicle2Pic,
    fileInput
  }
}

export const CHANGE_PWD = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_PWD'

export function changePwd(pwd) {
  return {
    type: CHANGE_PWD,
    pwd
  }
}

export const CHANGE_PWD2 = 'ROUTES-USER_CENTER_PERSONAL_INFO-CHANGE_PWD2'

export function changePwd2(pwd2) {
  return {
    type: CHANGE_PWD2,
    pwd2
  }
}

export const REQUEST_SUBMIT = 'ROUTES-USER_CENTER_PERSONAL_INFO-REQUEST_SUBMIT'

export function requestSubmit(params, files) {
  return {
    type: REQUEST_SUBMIT,
    params,
    files
  }
}

export const RECIEVE_SUBMIT = 'ROUTES-USER_CENTER_PERSONAL_INFO-RECIEVE_SUBMIT'

export function recieveSubmit(success, message) {
  return {
    type: RECIEVE_SUBMIT,
    success,
    message
  }
}

export function submit(params, files) {
  return dispatch => {
    dispatch(requestSubmit(params, files))
    updatePersonalInfo(params, files, ret => {
      if (ret.error_code > 0) {
        myAlert('修改成功。')
      } else {
        myAlert('修改失败：' + ret.msg + '。')
      }
      dispatch(recieveSubmit(ret.error_code > 0, ret.msg))
    })
  }
}

export function fetchSubmit(params, files) {
  return dispatch => dispatch(submit(params, files))
}

export const REQUEST_INIT = 'ROUTES-USER_CENTER_PERSONAL_INFO-REQUEST_INIT'

export function requestInit(params) {
  return {
    type: REQUEST_INIT,
    params
  }
}

export const RECIEVE_INIT = 'ROUTES-USER_CENTER_PERSONAL_INFO-RECIEVE_INIT'

export function recieveInit(success, message, userInfo) {
  return {
    type: RECIEVE_INIT,
    success, 
    message,
    userInfo
  }
}

export function init(params) {
  return dispatch => {
    dispatch(requestInit(params))
    getUserInfo(params, body => {
      dispatch(recieveInit(body.error_code > 0, body.msg, body.data))
    })
  }
}

export function fetchInit(params) {
  return dispatch => dispatch(init(params))
}

export const LEAVE = 'ROUTES-USER_CENTER_PERSONAL_INFO-LEAVE'

export function leave() {
  return {
    type: LEAVE
  }
}

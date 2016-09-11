import { myAlert } from '../../utils/dialog'

import { register } from '../../utils/cengceng-api/users'

export const CHANGE_IS_DRIVER = 'ROUTES-SIGN_UP-CHANGE_IS_DRIVER'

export function changeIsDriver(isDriver) {
  return {
    type: CHANGE_IS_DRIVER,
    isDriver
  }
}

export const CHANGE_MORE_VEHICLE = 'ROUTES-SIGN_UP-CHANGE_MORE_VEHICLE'

export function changeMoreVehicle(moreVehicle) {
  return {
    type: CHANGE_MORE_VEHICLE,
    moreVehicle
  }
}

export const CHANGE_LICENSE_NO = 'ROUTES-SIGN_UP-CHANGE_LICENSE_NO'

export function changeLicenseNo(licenseNo) {
  return {
    type: CHANGE_LICENSE_NO,
    licenseNo
  }
}

export const CHANGE_LICENSE_PIC = 'ROUTES-SIGN_UP-CHANGE_LICENSE_PIC'

export function changeLicensePic(licensePic, fileInput) {
  return {
    type: CHANGE_LICENSE_PIC,
    licensePic,
    fileInput
  }
}

export const CHANGE_SCHOOL = 'ROUTES-SIGN_UP-CHANGE_SCHOOL'

export function changeSchool(school) {
  return {
    type: CHANGE_SCHOOL,
    school
  }
}

export const CHANGE_NAME = 'ROUTES-SIGN_UP-CHANGE_NAME'

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  }
}

export const CHANGE_NICK_NAME = 'ROUTES-SIGN_UP-CHANGE_NICK_NAME'

export function changeNickName(nickName) {
  return {
    type: CHANGE_NICK_NAME,
    nickName
  }
}

export const CHANGE_EMAIL = 'ROUTES-SIGN_UP-CHANGE_EMAIL'

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email
  }
}

export const CHANGE_ENROLLMENT_T = 'ROUTES-SIGN_UP-CHANGE_RNROLLMENT_T'

export function changeEnrollmentT(enrollmentT) {
  return {
    type: CHANGE_ENROLLMENT_T,
    enrollmentT
  }
}

export const CHANGE_VEHICLE_1_BRAND = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_1_BRAND'

export function changeVehicle1Brand(vehicle1Brand) {
  return {
    type: CHANGE_VEHICLE_1_BRAND,
    vehicle1Brand
  }
}

export const CHANGE_VEHICLE_1_MODEL = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_1_MODEL'

export function changeVehicle1Model(vehicle1Model) {
  return {
    type: CHANGE_VEHICLE_1_MODEL,
    vehicle1Model
  }
}

export const CHANGE_VEHICLE_1_NUM = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_1_NUM'

export function changeVehicle1Num(vehicle1Num) {
  return {
    type: CHANGE_VEHICLE_1_NUM,
    vehicle1Num
  }
}

export const CHANGE_VEHICLE_2_BRAND = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_2_BRAND'

export function changeVehicle2Brand(vehicle2Brand) {
  return {
    type: CHANGE_VEHICLE_2_BRAND,
    vehicle2Brand
  }
}

export const CHANGE_VEHICLE_2_MODEL = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_2_MODEL'

export function changeVehicle2Model(vehicle2Model) {
  return {
    type: CHANGE_VEHICLE_2_MODEL,
    vehicle2Model
  }
}

export const CHANGE_VEHICLE_2_NUM = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_2_NUM'

export function changeVehicle2Num(vehicle2Num) {
  return {
    type: CHANGE_VEHICLE_2_NUM,
    vehicle2Num
  }
}

export const CHANGE_VEHICLE_1_PIC = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_1_PIC'

export function changeVehicle1Pic(vehicle1Pic, fileInput) {
  return {
    type: CHANGE_VEHICLE_1_PIC,
    vehicle1Pic,
    fileInput
  }
}

export const CHANGE_VEHICLE_2_PIC = 'ROUTES-SIGN_UP-CHANGE_VEHICLE_2_PIC'

export function changeVehicle2Pic(vehicle2Pic, fileInput) {
  return {
    type: CHANGE_VEHICLE_2_PIC,
    vehicle2Pic,
    fileInput
  }
}

export const CHANGE_PWD = 'ROUTES-SIGN_UP-CHANGE_PWD'

export function changePwd(pwd) {
  return {
    type: CHANGE_PWD,
    pwd
  }
}

export const CHANGE_PWD2 = 'ROUTES-SIGN_UP-CHANGE_PWD2'

export function changePwd2(pwd2) {
  return {
    type: CHANGE_PWD2,
    pwd2
  }
}

export const REQUEST_SUBMIT = 'ROUTES-SIGN_UP-REQUEST_SUBMIT'

export function requestSubmit(params, files) {
  return {
    type: REQUEST_SUBMIT,
    params,
    files
  }
}

export const RECIEVE_SUBMIT = 'ROUTES-SIGN_UP-RECIEVE_SUBMIT'

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
    register(params, files, ret => {
      if (ret.error_code >= 0) {
        myAlert('注册成功。')
      } else {
        myAlert('注册失败：' + ret.msg + '。')
      }
      dispatch(recieveSubmit(ret.error_code >= 0, ret.msg))
    })
  }
}

export function fetchSubmit(params, files) {
  return dispatch => dispatch(submit(params, files))
}

export const CHANGE_SEX = 'ROUTES-SIGN_UP-CHANGE_SEX'

export function changeSex(sex) {
  return {
    type: CHANGE_SEX,
    sex
  }
}

export const CHANGE_MOBILE = 'ROUTES-SIGN_UP-CHANGE_MOBILE'

export function changeMobile(mobile) {
  return {
    type: CHANGE_MOBILE,
    mobile
  }
}

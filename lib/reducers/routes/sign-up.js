import { combineReducers } from 'redux'

import { 
  CHANGE_SCHOOL,
  CHANGE_IS_DRIVER, 
  CHANGE_MORE_VEHICLE,
  CHANGE_LICENSE_NO,
  CHANGE_LICENSE_PIC,
  CHANGE_NAME,
  CHANGE_NICK_NAME,
  CHANGE_EMAIL,
  CHANGE_PWD,
  CHANGE_PWD2,
  CHANGE_ENROLLMENT_T,
  CHANGE_VEHICLE_1_BRAND,
  CHANGE_VEHICLE_1_MODEL,
  CHANGE_VEHICLE_1_NUM,
  CHANGE_VEHICLE_1_PIC,
  CHANGE_VEHICLE_2_BRAND,
  CHANGE_VEHICLE_2_MODEL,
  CHANGE_VEHICLE_2_NUM,
  CHANGE_VEHICLE_2_PIC,
} from '../../actions/routes/sign-up'

function school(state = '', action) {
  switch(action.type) {
    case CHANGE_SCHOOL:
      return action.school
    default:
      return state
  }
}

function is_driver(state = false, action) {
  switch(action.type) {
    case CHANGE_IS_DRIVER:
      return action.isDriver
    default:
      return state
  }
}

function more_vehicle(state = false, action) {
  switch(action.type) {
    case CHANGE_MORE_VEHICLE:
      return action.moreVehicle
    default:
      return state
  }
}

function license_no(state = '', action) {
  switch(action.type) {
    case CHANGE_LICENSE_NO:
      return action.licenseNo
    default:
      return state
  }
}

function license_pic(state = '', action) {
  switch(action.type) {
    case CHANGE_LICENSE_PIC:
      return action.licensePic
    default:
      return state
  }
}

function name(state = '', action) {
  switch(action.type) {
    case CHANGE_NAME:
      return action.name
    default:
      return state
  }
}

function nick_name(state = '', action) {
  switch(action.type) {
    case CHANGE_NICK_NAME:
      return action.nickName
    default:
      return state
  }
}

function email(state = '', action) {
  switch(action.type) {
    case CHANGE_EMAIL:
      return action.email
    default:
      return state
  }
}

function pwd(state = '', action) {
  switch(action.type) {
    case CHANGE_PWD:
      return action.pwd
    default:
      return state
  }
}

function pwd2(state = '', action) {
  switch(action.type) {
    case CHANGE_PWD2:
      return action.pwd2
    default:
      return state
  }
}

function enrollment_t(state = '', action) {
  switch(action.type) {
    case CHANGE_ENROLLMENT_T:
      return action.enrollmentT
    default:
      return state
  }
}

function vehicle_1_brand(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_1_BRAND:
      return action.vehicle1Brand
    default:
      return state
  }
}

function vehicle_1_model(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_1_MODEL:
      return action.vehicle1Model
    default:
      return state
  }
}

function vehicle_1_num(state = 0, action) {
  switch(action.type) {
    case CHANGE_VEHICLE_1_NUM:
      return action.vehicle1Num
    default:
      return state
  }
}

function vehicle_1_pic(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_1_PIC:
      return action.vehicle1Pic
    default:
      return state
  }
}

function vehicle_2_brand(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_2_BRAND:
      return action.vehicle2Brand
    default:
      return state
  }
}

function vehicle_2_model(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_2_MODEL:
      return action.vehicle2Model
    default:
      return state
  }
}

function vehicle_2_num(state = 0, action) {
  switch(action.type) {
    case CHANGE_VEHICLE_2_NUM:
      return action.vehicle2Num
    default:
      return state
  }
}

function vehicle_2_pic(state = '', action) {
  switch(action.type) {
    case CHANGE_VEHICLE_2_PIC:
      return action.vehicle2Pic
    default:
      return state
  }
}

function license_pic_file(state = null, action) {
  switch(action.type) {
    case CHANGE_LICENSE_PIC:
      return action.fileInput.files[0]
    default:
      return state
  }
}

function vehicle_1_pic_file(state = null, action) {
  switch(action.type) {
    case CHANGE_VEHICLE_1_PIC:
      return action.fileInput.files[0]
    default:
      return state
  }
}

function vehicle_2_pic_file(state = null, action) {
  switch(action.type) {
    case CHANGE_VEHICLE_2_PIC:
      return action.fileInput.files[0]
    default:
      return state
  }
}

export default combineReducers({
  school,
  name,
  nick_name,
  email,
  pwd,
  pwd2,
  enrollment_t,
  is_driver, 
  license_no,
  license_pic,
  vehicle_1_brand,
  vehicle_1_model,
  vehicle_1_num,
  vehicle_1_pic,
  more_vehicle, 
  vehicle_2_brand,
  vehicle_2_model,
  vehicle_2_num,
  vehicle_2_pic,
  // file in fileInput
  license_pic_file,
  vehicle_1_pic_file,
  vehicle_2_pic_file
})

import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonalInfo from '../components/personal-info'
import { 
  changeIsDriver, 
  changeMoreVehicle,
  changeLicenseNo,
  changeLicensePic,
  changeSchool,
  changeName,
  changeNickName,
  changeEmail,
  changeEnrollmentT,
  changeVehicle1Brand,
  changeVehicle1Model,
  changeVehicle1Num,
  changeVehicle2Brand,
  changeVehicle2Model,
  changeVehicle2Num,
  changeVehicle1Pic,
  changeVehicle2Pic,
  fetchSubmit,
  changePwd,
  changePwd2,
  changeSex,
  changeMobile
} from '../actions/routes/sign-up'
import { myAlert } from '../utils/dialog'

class SignUp extends Component {
  handlePersonalInfoIsDriverChange(value) {
    const { dispatch } = this.props
    dispatch(changeIsDriver(value))
  }
  handlePersonalInfoMoreVehicleChange(value) {
    const { dispatch } = this.props
    dispatch(changeMoreVehicle(value))
  }
  handlePersonalInfoSchoolChange(value) {
    const { dispatch } = this.props
    dispatch(changeSchool(value))
  }
  handlePersonalInfoNameChange(value) {
    const { dispatch } = this.props
    dispatch(changeName(value))
  }
  handlePersonalInfoNickNameChange(value) {
    const { dispatch } = this.props
    dispatch(changeNickName(value))
  }
  handlePersonalInfoEmailChange(value) {
    const { dispatch } = this.props
    dispatch(changeEmail(value))
  }
  handlePersonalInfoLicenseNoChange(value) {
    const { dispatch } = this.props
    dispatch(changeLicenseNo(value))
  }
  handlePersonalInfoLicensePicChange(value, fileInput) {
    const { dispatch } = this.props
    const reader = new FileReader()
    reader.onload = evt => {
      dispatch(changeLicensePic(evt.target.result, fileInput))
    }
    reader.readAsDataURL(fileInput.files[0])
  }
  handlePersonalInfoVehicle1BrandChange(value) {
    const { dispatch } = this.props
    dispatch(changeVehicle1Brand(value))
  }
  handlePersonalInfoVehicle1ModelChange(value) {
    const { dispatch } = this.props
    dispatch(changeVehicle1Model(value))
  }
  handlePersonalInfoVehicle1NumChange(value) {
    const { dispatch } = this.props
    dispatch(changeVehicle1Num(Number(value)))
  }
  handlePersonalInfoVehicle2BrandChange(value) {
    const { dispatch } = this.props
    dispatch(changeVehicle2Brand(value))
  }
  handlePersonalInfoVehicle2ModelChange(value) {
    const { dispatch } = this.props
    dispatch(changeVehicle2Model(value))
  }
  handlePersonalInfoVehicle2NumChange(value) {
    const { dispatch } = this.props
    dispatch(changeVehicle2Num(Number(value)))
  }
  handlePersonalInfoEnrollmentTChange(value) {
    const { dispatch } = this.props
    dispatch(changeEnrollmentT(value))
  }
  handlePersonalInfoVehicle1PicChange(value, fileInput) {
    const { dispatch } = this.props
    const reader = new FileReader()
    reader.onload = evt => {
      dispatch(changeVehicle1Pic(evt.target.result, fileInput))
    }
    reader.readAsDataURL(fileInput.files[0])
  }
  handlePersonalInfoVehicle2PicChange(value, fileInput) {
    const { dispatch } = this.props
    const reader = new FileReader()
    reader.onload = evt => {
      dispatch(changeVehicle2Pic(evt.target.result, fileInput))
    }
    reader.readAsDataURL(fileInput.files[0])
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const { dispatch } = this.props
    const {
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
      vehicle_2_brand,
      vehicle_2_model,
      vehicle_2_num,
      vehicle_2_pic,
      license_pic_file,
      vehicle_1_pic_file,
      vehicle_2_pic_file
    } = this.props.app.routes.signUp
    if (pwd != pwd2) {
      myAlert('请输入相同的密码。')
      return
    }
    const params = {
      school,
      name,
      nick_name,
      email,
      pwd,
      enrollment_t,
      is_driver,
      license_no,
      license_pic,
      vehicle_1_brand,
      vehicle_1_model,
      vehicle_1_num,
      vehicle_1_pic,
      vehicle_2_brand,
      vehicle_2_model,
      vehicle_2_num,
      vehicle_2_pic,
    }
    const files = {
      license_pic_file,
      vehicle_1_pic_file,
      vehicle_2_pic_file
    }
    dispatch(fetchSubmit(params, files))
  }
  handlePersonalInfoPwdChange(value) {
    const { dispatch } = this.props
    dispatch(changePwd(value))
  }
  handlePersonalInfoPwd2Change(value) {
    const { dispatch } = this.props
    dispatch(changePwd2(value))
  }
  handlePersonalInfoSexChange(value) {
    const { dispatch } = this.props
    dispatch(changeSex(value))
  }
  handlePersonalInfoMobileChange(value) {
    const { dispatch } = this.props
    dispatch(changeMobile(value))
  }
  render() {
    const { signUp } = this.props.app.routes
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <PersonalInfo {...signUp} password={true}
          onIsDriverChange={this.handlePersonalInfoIsDriverChange.bind(this)}
          onMoreVehicleChange={this.handlePersonalInfoMoreVehicleChange.bind(this)}
          onSchoolChange={this.handlePersonalInfoSchoolChange.bind(this)}
          onNameChange={this.handlePersonalInfoNameChange.bind(this)}
          onNickNameChange={this.handlePersonalInfoNickNameChange.bind(this)}
          onEmailChange={this.handlePersonalInfoEmailChange.bind(this)}
          onLicenseNoChange={this.handlePersonalInfoLicenseNoChange.bind(this)}
          onLicensePicChange={this.handlePersonalInfoLicensePicChange.bind(this)}
          onVehicle1BrandChange={this.handlePersonalInfoVehicle1BrandChange.bind(this)}
          onVehicle1ModelChange={this.handlePersonalInfoVehicle1ModelChange.bind(this)}
          onVehicle1NumChange={this.handlePersonalInfoVehicle1NumChange.bind(this)}
          onVehicle2BrandChange={this.handlePersonalInfoVehicle2BrandChange.bind(this)}
          onVehicle2ModelChange={this.handlePersonalInfoVehicle2ModelChange.bind(this)}
          onVehicle2NumChange={this.handlePersonalInfoVehicle2NumChange.bind(this)}
          onEnrollmentTChange={this.handlePersonalInfoEnrollmentTChange.bind(this)}
          onVehicle1PicChange={this.handlePersonalInfoVehicle1PicChange.bind(this)}
          onVehicle2PicChange={this.handlePersonalInfoVehicle2PicChange.bind(this)}
          onPwdChange={this.handlePersonalInfoPwdChange.bind(this)}
          onPwd2Change={this.handlePersonalInfoPwd2Change.bind(this)}
          onSexChange={this.handlePersonalInfoSexChange.bind(this)}
          onMobileChange={this.handlePersonalInfoMobileChange.bind(this)}/>
        <div className='weui_btn_area'>
          <input className='weui_btn weui_btn_primary' type='submit' value='提交审核' />
        </div>
      </form>
    )
  }
}

export default connect(state => state)(SignUp)

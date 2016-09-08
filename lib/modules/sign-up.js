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
  changeEmail
} from '../actions/routes/sign-up'

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
      dispatch(changeLicensePic(evt.target.result))
    }
    reader.readAsDataURL(fileInput.files[0])
  }
  handlePersonalInfoVehicle1BrandChange(value) {
    console.log('vehicle 1 brand change', value)
  }
  handlePersonalInfoVehicle1ModelChange(value) {
    console.log('vehicle 1 model change', value)
  }
  handlePersonalInfoVehicle1NumChange(value) {
    console.log('vehicle 1 num change', value)
  }
  handlePersonalInfoVehicle2BrandChange(value) {
    console.log('vehicle 2 brand change', value)
  }
  handlePersonalInfoVehicle2ModelChange(value) {
    console.log('vehicle 2 model change', value)
  }
  handlePersonalInfoVehicle2NumChange(value) {
    console.log('vehicle 2 num change', value)
  }
  render() {
    const { signUp } = this.props.app.routes
    return (
      <form>
        <PersonalInfo {...signUp}
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
          onVehicle2NumChange={this.handlePersonalInfoVehicle2NumChange.bind(this)}/>
        <div className='weui_btn_area'>
          <input className='weui_btn weui_btn_primary' type='submit' value='提交审核' />
        </div>
      </form>
    )
  }
}

export default connect(state => state)(SignUp)

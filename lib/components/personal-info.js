import React, { Component } from 'react'

import { Cell, InputCell, SwitchCell, UploadCell, SelectCell } from './style/weui'

class PersonalInfo extends Component {
  handleIsDriverChange(evt) {
    const { onIsDriverChange } = this.props
    if (typeof onIsDriverChange == 'function') onIsDriverChange(evt.target.checked)
  }
  handleMoreVehicleClick(evt) {
    const { onMoreVehicleChange } = this.props
    if (typeof onMoreVehicleChange == 'function') onMoreVehicleChange(evt.target.checked)
  }
  handleSchoolChange(evt) {
    const { onSchoolChange } = this.props
    if (typeof onSchoolChange == 'function') onSchoolChange(evt.target.value)
  }
  handleNameChange(evt) {
    const { onNameChange } = this.props
    if (typeof onNameChange == 'function') onNameChange(evt.target.value)
  }
  handleNickNameChange(evt) {
    const { onNickNameChange } = this.props
    if (typeof onNickNameChange == 'function') onNickNameChange(evt.target.value)
  }
  handleEmailChange(evt) {
    const { onEmailChange } = this.props
    if (typeof onEmailChange == 'function') onEmailChange(evt.target.value)
  }
  handleLicenseNoChange(evt) {
    const { onLicenseNoChange } = this.props
    if (typeof onLicenseNoChange == 'function') onLicenseNoChange(evt.target.value)
  }
  handleLicensePicChange(evt) {
    const { onLicensePicChange } = this.props
    if (typeof onLicensePicChange == 'function') onLicensePicChange(evt.target.value, evt.target)
  }
  handleVehicle1BrandChange(evt) {
    const { onVehicle1BrandChange } = this.props
    if (typeof onVehicle1BrandChange == 'function') onVehicle1BrandChange(evt.target.value)
  }
  handleVehicle1ModelChange(evt) {
    const { onVehicle1ModelChange } = this.props
    if (typeof onVehicle1ModelChange == 'function') onVehicle1ModelChange(evt.target.value)
  }
  handleVehicle1NumChange(evt) {
    const { onVehicle1NumChange } = this.props
    if (typeof onVehicle1NumChange == 'function') onVehicle1NumChange(evt.target.value)
  }
  handleVehicle1PicChange(evt) {
    const { onVehicle1PicChange } = this.props
    if (typeof onVehicle1PicChange == 'function') onVehicle1PicChange(evt.target.value, evt.target)
  }
  handleVehicle2BrandChange(evt) {
    const { onVehicle2BrandChange } = this.props
    if (typeof onVehicle2BrandChange == 'function') onVehicle2BrandChange(evt.target.value)
  }
  handleVehicle2ModelChange(evt) {
    const { onVehicle2ModelChange } = this.props
    if (typeof onVehicle2ModelChange == 'function') onVehicle2ModelChange(evt.target.value)
  }
  handleVehicle2NumChange(evt) {
    const { onVehicle2NumChange } = this.props
    if (typeof onVehicle2NumChange == 'function') onVehicle2NumChange(evt.target.value)
  }
  handleVehicle2PicChange(evt) {
    const { onVehicle2PicChange } = this.props
    if (typeof onVehicle2PicChange == 'function') onVehicle2PicChange(evt.target.value, evt.target)
  }
  handleEnrollmentTChange(evt) {
    const { onEnrollmentTChange } = this.props
    if (typeof onEnrollmentTChange == 'function') onEnrollmentTChange(evt.target.value)
  }
  handlePwdChange(evt) {
    const { onPwdChange } = this.props
    if (typeof onPwdChange == 'function') onPwdChange(evt.target.value)
  }
  handlePwd2Change(evt) {
    const { onPwd2Change } = this.props
    if (typeof onPwd2Change == 'function') onPwd2Change(evt.target.value)
  }
  handleSexChange(evt) {
    const { onSexChange } = this.props
    if (typeof onSexChange == 'function') onSexChange(evt.target.value)
  }
  handleMobileChange(evt) {
    const { onMobileChange } = this.props
    if (typeof onMobileChange == 'function') onMobileChange(evt.target.value)
  }
  render() {
    const { 
      school,
      name,
      nick_name,
      email,
      pwd,
      sex,
      mobile,
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
      password
    } = this.props
    const driverInfo = [
      <InputCell label='驾照号码' key='license_no'>
        <input className='weui_input' onChange={this.handleLicenseNoChange.bind(this)} defaultValue={license_no} required='required'/>
      </InputCell>,
      <UploadCell label='上传驾照照片' key='license_pic'>
        <ul className='weui_uploader_files'>{ license_pic ? <li className='weui_uploader_file' style={{backgroundImage: 'url(' + license_pic + ')'}}></li> : '' }</ul>
        <div className='weui_uploader_input_wrp'>
          <input className='weui_uploader_input' type='file' accept='image/*' 
            onChange={this.handleLicensePicChange.bind(this)} required={ license_pic ? '' : 'required' } />
        </div>
      </UploadCell>,
      <Cell label='添加车辆信息' key='label_vehicle_info' />,
      <InputCell key='vehicle_1_brand' label='品牌'>
        <input className='weui_input' onChange={this.handleVehicle1BrandChange.bind(this)} defaultValue={vehicle_1_brand}/>
      </InputCell>,
      <InputCell key='vehicle_1_model' label='车型'>
        <input className='weui_input' onChange={this.handleVehicle1ModelChange.bind(this)} defaultValue={vehicle_1_model}/>
      </InputCell>,
      <InputCell key='vehicle_1_num' label='可载人数'>
        <input className='weui_input' type='number' step='1' onChange={this.handleVehicle1NumChange.bind(this)} defaultValue={vehicle_1_num}/>
      </InputCell>,
      <UploadCell key='vehicle_1_pic' label='照片'>
        <ul className='weui_uploader_files'>{ vehicle_1_pic ? <li className='weui_uploader_file' style={{backgroundImage: 'url(' + vehicle_1_pic + ')'}}></li> : '' }</ul>
        <div className='weui_uploader_input_wrp'>
          <input className='weui_uploader_input' type='file' accept='image/*' onChange={this.handleVehicle1PicChange.bind(this)}/>
        </div>
      </UploadCell>,
      <SwitchCell key='more_vehicle' label='其他车辆'>
        <input className='weui_switch' type='checkbox' defaultChecked={more_vehicle} onChange={this.handleMoreVehicleClick.bind(this)} />
      </SwitchCell>
    ]
    if (more_vehicle) {
      driverInfo.push(<InputCell key='vehicle_2_brand' label='品牌'><input className='weui_input' onChange={this.handleVehicle2BrandChange.bind(this)} defaultValue={vehicle_2_brand}/></InputCell>,
        <InputCell key='vehicle_2_model' label='车型'><input className='weui_input' onChange={this.handleVehicle2ModelChange.bind(this)} defaultValue={vehicle_2_model}/></InputCell>,
        <InputCell key='vehicle_2_num' label='可载人数'><input className='weui_input' type='number' step='1' onChange={this.handleVehicle2NumChange.bind(this)} defaultValue={vehicle_2_num}/></InputCell>,
        <UploadCell key='vehicle_2_pic' label='照片'>
          <ul className='weui_uploader_files'>{ vehicle_2_pic ? <li className='weui_uploader_file' style={{backgroundImage: 'url(' + vehicle_2_pic + ')'}}></li> : '' }</ul>
          <div className='weui_uploader_input_wrp'>
            <input className='weui_uploader_input' type='file' accept='image/*' onChange={this.handleVehicle2PicChange.bind(this)}/>
          </div>
        </UploadCell>
      )
    }

    return (
      <div className='weui_cells weui_cells_form'>
        <InputCell label='学校'>
          <input className='weui_input' onChange={this.handleSchoolChange.bind(this)} defaultValue={school} required='required'/>
        </InputCell>
        <InputCell label='姓名'>
          <input className='weui_input' onChange={this.handleNameChange.bind(this)} defaultValue={name} required='required'/>
        </InputCell>
        <InputCell label='昵称'>
          <input className='weui_input' onChange={this.handleNickNameChange.bind(this)} defaultValue={nick_name} required='required'/>
        </InputCell>
        <InputCell label='学校邮箱'>
          <input className='weui_input' onChange={this.handleEmailChange.bind(this)} defaultValue={email} type='email' required='required'/>
        </InputCell>
        <SelectCell label='性别'>
          <select className='weui_select' defaultValue={sex} onChange={this.handleSexChange.bind(this)}>
            <option value='1'>男</option>
            <option value='2'>女</option>
          </select>
        </SelectCell>
        <InputCell label='手机'>
          <input className='weui_input' onChange={this.handleMobileChange.bind(this)} defaultValue={mobile} required='required' />
        </InputCell>
        { password ? [
          <InputCell key='pwd' label='密码'>
            <input className='weui_input' onChange={this.handlePwdChange.bind(this)} type='password' required='required' />
          </InputCell>,
          <InputCell key='pwd2' label='确认密码'>
            <input className='weui_input' onChange={this.handlePwd2Change.bind(this)} type='password' required='required' />
          </InputCell>
        ] : '' }
        <InputCell label='入学时间'>
          <input className='weui_input' onChange={this.handleEnrollmentTChange.bind(this)} defaultValue={enrollment_t} type='date' required='required'/>
        </InputCell>
        <SwitchCell label='是否愿意成为车主'>
          <input className='weui_switch' type='checkbox' defaultChecked={is_driver} onChange={this.handleIsDriverChange.bind(this)} />
        </SwitchCell>
        { is_driver ? driverInfo : '' }
      </div>
    )
  }
}

export default PersonalInfo

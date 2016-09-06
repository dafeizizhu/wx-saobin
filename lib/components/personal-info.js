import React, { Component } from 'react'

import { Cell, InputCell, SwitchCell, UploadCell } from './style/weui'

class PersonalInfo extends Component {
  handleIsDriverChange(evt) {
    const { onIsDriverChange } = this.props
    if (typeof onIsDriverChange == 'function') onIsDriverChange(evt.target.checked)
  }
  handleMoreVehicleClick(evt) {
    const { onMoreVehicleChange } = this.props
    if (typeof onMoreVehicleChange == 'function') onMoreVehicleChange(evt.target.checked)
  }
  render() {
    const { isDriver, moreVehicle } = this.props
    const driverInfo = [
      <InputCell label='驾照号码' key='license_no'><input className='weui_input' /></InputCell>,
      <UploadCell label='上传驾照照片' key='license_pic'>
        <ul className='weui_uploader_files'></ul>
        <div className='weui_uploader_input_wrp'>
          <input className='weui_uploader_input' type='file' accept='image/*' multiple />
        </div>
      </UploadCell>,
      <Cell label='添加车辆信息' key='label_vehicle_info' />,
      <InputCell key='vehicle_1_model' label='车型'><input className='weui_input' /></InputCell>,
      <InputCell key='vehicle_1_brand' label='牌子'><input className='weui_input' /></InputCell>,
      <InputCell key='vehicle_1_num' label='可载人数'><input className='weui_input' /></InputCell>,
      <UploadCell key='vehicle_1_pic' label='车子照片'>
        <ul className='weui_uploader_files'></ul>
        <div className='weui_uploader_input_wrp'>
          <input className='weui_uploader_input' type='file' accept='image/*' multiple />
        </div>
      </UploadCell>,
      <SwitchCell key='more_vehicle' label='其他车辆'>
        <input className='weui_switch' type='checkbox' defaultChecked={moreVehicle} onChange={this.handleMoreVehicleClick.bind(this)} />
      </SwitchCell>
    ]
    if (moreVehicle) {
      driverInfo.push(<InputCell key='vehicle_2_model' label='车型'><input className='weui_input' /></InputCell>,
        <InputCell key='vehicle_2_brand' label='牌子'><input className='weui_input' /></InputCell>,
        <InputCell key='vehicle_2_num' label='可载人数'><input className='weui_input' /></InputCell>,
        <UploadCell key='vehicle_2_pic' label='车子照片'>
          <ul className='weui_uploader_files'></ul>
          <div className='weui_uploader_input_wrp'>
            <input className='weui_uploader_input' type='file' accept='image/*' multiple />
          </div>
        </UploadCell>
      )
    }

    return (
      <div className='weui_cells weui_cells_form'>
        <InputCell label='学校'><input className='weui_input' /></InputCell>
        <InputCell label='姓名'><input className='weui_input' /></InputCell>
        <InputCell label='昵称'><input className='weui_input' /></InputCell>
        <InputCell label='学校邮箱'><input className='weui_input' /></InputCell>
        <InputCell label='入学年份'><input className='weui_input' /></InputCell>
        <InputCell label='毕业年份'><input className='weui_input' /></InputCell>
        <InputCell label='签名'><input className='weui_input' /></InputCell>
        <SwitchCell label='是否愿意成为车主'><input className='weui_switch' type='checkbox' defaultChecked={isDriver} onChange={this.handleIsDriverChange.bind(this)} /></SwitchCell>
        { isDriver ? driverInfo : '' }
      </div>
    )
  }
}

export default PersonalInfo

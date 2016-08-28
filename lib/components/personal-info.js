import React, { Component } from 'react'

import { Cell, InputCell, SwitchCell, UploadCell } from './style/weui'

class PersonalInfo extends Component {
  render() {
    return (
      <div className='weui_cells weui_cells_form'>
        <InputCell label='学校'><input className='weui_input' /></InputCell>
        <InputCell label='姓名'><input className='weui_input' /></InputCell>
        <InputCell label='昵称'><input className='weui_input' /></InputCell>
        <InputCell label='学校邮箱'><input className='weui_input' /></InputCell>
        <InputCell label='入学年份'><input className='weui_input' /></InputCell>
        <InputCell label='毕业年份'><input className='weui_input' /></InputCell>
        <InputCell label='签名'><input className='weui_input' /></InputCell>
        <SwitchCell label='是否愿意成为车主'><input className='weui_switch' type='checkbox' /></SwitchCell>
        <UploadCell label='上传驾照照片'>
          <ul className='weui_uploader_files'></ul>
          <div className='weui_uploader_input_wrp'>
            <input className='weui_uploader_input' type='file' accept='image/*' multiple />
          </div>
        </UploadCell>
        <Cell label='添加车辆信息' />
        <InputCell label='车型'><input className='weui_input' /></InputCell>
        <InputCell label='牌子'><input className='weui_input' /></InputCell>
        <InputCell label='Model'><input className='weui_input' /></InputCell>
        <InputCell label='可载人数'><input className='weui_input' /></InputCell>
        <UploadCell label='车子照片'>
          <ul className='weui_uploader_files'></ul>
          <div className='weui_uploader_input_wrp'>
            <input className='weui_uploader_input' type='file' accept='image/*' multiple />
          </div>
        </UploadCell>
      </div>
    )
  }
}

export default PersonalInfo

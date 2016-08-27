import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserCenterNav from '../components/user-center-nav'

class UserCenterPersonalInfo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <UserCenterNav />
        <form>
          <div className='weui_cells weui_cells_form'>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>学校</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>姓名</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>昵称</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>学校邮箱</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>入学年份</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>毕业年份</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>签名</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell weui_cell_switch'>
              <div className='weui_cell_hd weui_cell_primary'>是否愿意成为车主</div>
              <div className='weui_cell_ft'>
                <input className='weui_switch' type='checkbox' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_bd weui_cell_primary'>
                <div className='weui_uploader'>
                  <div className='weui_uploader_hd weui_cell'>
                    <div className='weui_cell_bd weui_cell_primary'>上传驾照照片</div>
                  </div>
                  <div className='weui_uploader_bd'>
                    <ul className='weui_uploader_files'></ul>
                    <div className='weui_uploader_input_wrp'>
                      <input className='weui_uploader_input' type='file' accept='image/*' multiple />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd weui_cell_primary'>添加车辆信息</div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>车型</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>牌子</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>Model</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>可载人数</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' type='number' />
              </div>
            </div>
            <div className='weui_btn_area'>
              <input type='submit' value='确认修改' className='weui_btn weui_btn_primary' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterPersonalInfo)

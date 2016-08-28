import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import UserCenterNav from '../components/user-center-nav'

class UserCenterMyItinerary extends Component {
  handleRequestClick() {
    hashHistory.push('/user-center/my-itinerary/request')
  }
  handleResponseClick() {
    hashHistory.push('/user-center/my-itinerary/response')
  }
  render() {
    const countOptions = [1, 2, 3, 4, 5, 6, 7].map(count => <option key={count} value={count}>{count}</option>)
    const carTypeOptions = ['宝马', '奔驰', '奥迪'].map(carType => <option key={carType} value={carType}>{carType}</option>)
    return (
      <div style={styles.container}>
        <UserCenterNav />
        <form style={{ flex: 1 }}>
          <div className='weui_cells'>
            <div className='weui_cell' onClick={this.handleRequestClick.bind(this)}>
              <i className='weui_icon_info'></i>XX给您发布了蹭车请求
            </div>
            <div className='weui_cell' onClick={this.handleResponseClick.bind(this)}>
              <i className='weui_icon_info'></i>XX回应了您的请求
            </div>
          </div>
          <div className='weui_cells_title'>行程1</div>
          <div className='weui_cells weui_cells_access'>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>选择出发地点</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'></div>
              <div className='weui_cell_ft'>深圳骚斌的家</div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>目的地</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'></div>
              <div className='weui_cell_ft'>深圳骚斌的家</div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>可载人数</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' type='number' />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>出发时间</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' type='datetime-local' style={{ maxWidth: '180px'}} />
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>理想酬劳</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' type='number' />
              </div>
              <div className='weui_cell_ft'>刀/人</div>
            </div>
            <div className='weui_cell weui_cell_select'>
              <div className='weui_cell_hd'>
                <label className='weui_label' style={{paddingLeft: '15px'}}>坐骑类型</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <select className='weui_select' name='carType'>{ carTypeOptions }</select>
              </div>
            </div>
            <div className='weui_cell'>
              <div className='weui_cell_hd'>
                <label className='weui_label'>备注</label>
              </div>
              <div className='weui_cell_bd weui_cell_primary'>
                <input className='weui_input' type='number' />
              </div>
            </div>
          </div>
          <div className='weui_btn_area'>
            <input type='submit' value='保存修改' className='weui_btn weui_btn_primary' />
            <input type='submit' value='取消行程' className='weui_btn weui_btn_default' />
          </div>
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  },
}

export default connect(state => state)(UserCenterMyItinerary)

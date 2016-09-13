import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import DocumentTitle  from 'react-document-title'

import UserCenterNav from '../components/user-center-nav'
import { Cell, InputCell, SelectCell } from '../components/style/weui'

class UserCenterMyRequests extends Component {
  handleRequestClick() {
    hashHistory.push('/user-center/my-requests/request')
  }
  handleInvitationClick() {
    hashHistory.push('/user-center/my-requests/invitation')
  }
  handleDepartureNameClick(item) {
    console.log('departure name click', item)
  }
  handleDestinationNameClick(item) {
    console.log('destination name click', item)
  }
  handlePassengerNumChange(item, evt) {
    console.log('passenger num change', item, evt.target.value)
  }
  handleDepartureTimeChange(item, evt) {
    console.log('departure time change', item, evt.target.value)
  }
  handleRemarkChange(item, evt) {
    console.log('remark change', item, evt.target.value)
  }
  render() {
    const { request_list, invitation_list, request_for_me_list } = this.props.app.routes.userCenterMyRequests
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    const requests = request_list.map((item, index) => (
      <form key={item.request_id}>
        <div className='weui_cells_title'>发布一</div>
        <div className='weui_cells weui_cells_access'>
          <Cell label='选择出发地点' onClick={this.handleDepartureNameClick.bind(this, item)}>{item.departure_name}</Cell>
          <Cell label='目的地' onClick={this.handleDestinationNameClick.bind(this, item)}>{item.destination_name}</Cell>
          <SelectCell label='乘车人数'>
            <select className='weui_select' defaultValue={item.passenger_num} onChange={this.handlePassengerNumChange.bind(this, item)}>{ passengerNumOptions }</select>
          </SelectCell>
          <InputCell label='出发时间'>
            <input className='weui_input' type='datetime-local' defaultValue={item.departure_time} onChange={this.handleDepartureTimeChange.bind(this, item)} />
          </InputCell>
          <InputCell label='备注'>
            <input className='weui_input' defaultValue={item.remark} onChange={this.handleRemarkChange.bind(this, item)} />
          </InputCell>
        </div>
        <div className='weui_btn_area'>
          <input type='submit' value='保存修改' className='weui_btn weui_btn_primary' />
          <input type='submit' value='取消发布' className='weui_btn weui_btn_default' />
        </div>
      </form>
    ))
    return (
      <DocumentTitle title='用户中心 - 蹭车信息'>
        <div style={styles.container} className='narrow'>
          <UserCenterNav />
          <div style={{ flex: 1 }}>
            <div className='weui_cells_title'>getRequestForMe</div>
            <div className='weui_cells'>
              <div className='weui_cell' onClick={this.handleRequestClick.bind(this)}>
                <i className='weui_icon_info'></i>车主XXX邀请您加入他的行程
              </div>
            </div>
            <div className='weui_cells_title'>getMyInvitation</div>
            <div className='weui_cells'>
              <div className='weui_cell' onClick={this.handleInvitationClick.bind(this)}>
                <i className='weui_icon_info'></i>车主XXX回应了您的蹭车请求
              </div>
            </div>
            { requests }
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  },
}

export default connect(state => state)(UserCenterMyRequests)

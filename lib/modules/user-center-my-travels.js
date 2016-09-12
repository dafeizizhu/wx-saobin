import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import DocumentTitle  from 'react-document-title'

import UserCenterNav from '../components/user-center-nav'
import { Cell, InputCell, SelectCell } from '../components/style/weui'
import { beginChangeDeparture } from '../actions/routes/user-center-my-travels-departure'
import { beginChangeDestination } from '../actions/routes/user-center-my-travels-destination'
import {
  changePassengerNum,
  changeDepartureTime,
  changeReward,
  changeVehicleId,
  changeRemark
} from '../actions/routes/user-center-my-travels'

class UserCenterMyTravels extends Component {
  handleRequestClick() {
    hashHistory.push('/user-center/my-travels/request')
  }
  handleResponseClick() {
    hashHistory.push('/user-center/my-travels/response')
  }
  handlePassengerNumChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changePassengerNum(Number(evt.target.value), item))
  }
  handleDepartureTimeChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeDepartureTime(evt.target.value, item))
  }
  handleRewardChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeReward(Number(evt.target.value), item))
  }
  handleVehicleIdChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeVehicleId(evt.target.value, item))
  }
  handleRemarkChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeRemark(evt.target.value, item))
  }
  handleDepartureNameClick(item, evt) {
    const { dispatch } = this.props
    dispatch(beginChangeDeparture(item))
    hashHistory.push('/user-center/my-travels/departure')
  }
  handleDestinationNameClick(item, evt) {
    const { dispatch } = this.props
    dispatch(beginChangeDestination(item))
    hashHistory.push('/user-center/my-travels/destination')
  }
  render() {
    const { travel_list, invitation_list } = this.props.app.routes.userCenterMyTravels
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    const vehicleIdOptions = ['宝马', '奔驰', '奥迪'].map(vehicleId => <option key={vehicleId} value={vehicleId}>{vehicleId}</option>)
    const travels = travel_list.map((item, index) => (
      <form key={item.travel_id}>
        <div className='weui_cells_title'>行程{index}</div>
        <div className='weui_cells weui_cells_access'>
          <Cell label='选择出发地点' onClick={this.handleDepartureNameClick.bind(this, item)}>{item.departure_name}</Cell>
          <Cell label='目的地' onClick={this.handleDestinationNameClick.bind(this, item)}>{item.destination_name}</Cell>
          <SelectCell label='可载人数'>
            <select className='weui_select' defaultValue={item.passenger_num} onChange={this.handlePassengerNumChange.bind(this, item)}>{ passengerNumOptions }</select>
          </SelectCell>
          <InputCell label='出发时间'>
            <input className='weui_input' type='datetime-local' defaultValue={item.departure_time} onChange={this.handleDepartureTimeChange.bind(this, item)} />
          </InputCell>
          <InputCell label='理想酬劳'>
            <input className='weui_input' type='number' defaultValue={item.reward} onChange={this.handleRewardChange.bind(this, item)} placeholder='刀/人' />
          </InputCell>
          <SelectCell label='坐骑类型'>
            <select className='weui_select' defaultValue={item.vehicle_id} onChange={this.handleVehicleIdChange.bind(this, item)}>{ vehicleIdOptions }</select>
          </SelectCell>
          <InputCell label='备注'>
            <input className='weui_input' defaultValue={item.remark} onChange={this.handleRemarkChange.bind(this, item)} />
          </InputCell>
        </div>
        <div className='weui_btn_area'>
          <input type='submit' value='保存修改' className='weui_btn weui_btn_primary' />
          <input type='submit' value='取消行程' className='weui_btn weui_btn_default' />
        </div>
      </form>
    ))
    const invitations = invitation_list.map((item, index) => (
      <div className='weui_cell' onClick={this.handleRequestClick.bind(this, item)}>
        <i className='weui_icon_info'></i>{item.nick_name}给您发布了蹭车请求
      </div>
    ))

    return (
      <DocumentTitle title='用户中心 - 我的行程'>
        <div style={styles.container} className='narrow'>
          <UserCenterNav />
          <div style={{ flex: 1 }}>
            <div className='weui_cells_title'>getRequestForMe</div>
            <div className='weui_cells'>{invitations}</div>
            <div className='weui_cells_title'>getMyInvitation</div>
            <div className='weui_cells'>
              <div className='weui_cell' onClick={this.handleResponseClick.bind(this)}>
                <i className='weui_icon_info'></i>XX回应了您的请求
              </div>
            </div>
            { travels }
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterMyTravels)
